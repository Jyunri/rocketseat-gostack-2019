import * as Yup from 'yup';
import { addMonths } from 'date-fns';
import Plan from '../models/Plan';
import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Queue from '../../lib/Queue';
import EnrollmentMail from '../jobs/EnrollmentMail';

class EnrollmentController {
  async index(req, res) {
    if (req.params.id) {
      const enrollment = await Enrollment.findByPk(req.params.id, {
        include: [
          {
            model: Student,
            as: 'student',
            attributes: ['name'],
          },
          {
            model: Plan,
            as: 'plan',
            attributes: ['title'],
          },
        ],
      });
      return res.json(enrollment);
    }

    const enrollments = await Enrollment.findAll({
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title'],
        },
      ],
    });

    return res.json(enrollments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id } = req.body;
    const enrollmentExistsForStudent = await Enrollment.findOne({
      where: { student_id },
    });

    if (enrollmentExistsForStudent) {
      return res
        .status(400)
        .json({ error: 'This student is already enrolled' });
    }

    const { price, duration } = await Plan.findByPk(req.body.plan_id);

    const start_date = new Date(req.body.start_date);
    const end_date = addMonths(start_date, duration);

    const total_price = price * duration;

    const enrollment = await Enrollment.create({
      start_date: req.body.start_date,
      end_date,
      price: total_price,
      student_id,
      plan_id: req.body.plan_id,
    });

    const student = await Student.findByPk(student_id);

    await Queue.add(EnrollmentMail.key, {
      student,
      start_date,
      end_date,
      price,
    });

    return res.json(enrollment);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const convertedStartDate = new Date(start_date);

    const enrollment = await Enrollment.findByPk(req.params.id);

    if (student_id !== enrollment.student_id) {
      const enrollmentExistsForStudent = await Enrollment.findOne({
        where: { student_id },
      });

      if (enrollmentExistsForStudent) {
        return res
          .status(400)
          .json({ error: 'Esse aluno já possui uma matricula' });
      }
    }

    const { price, duration, end_date } = await Plan.findByPk(req.body.plan_id);
    let needsRecalculate = false;

    if (
      plan_id !== enrollment.plan_id ||
      convertedStartDate !== enrollment.start_date
    ) {
      needsRecalculate = true;
    }

    const result = await enrollment.update({
      start_date: convertedStartDate,
      end_date: needsRecalculate
        ? addMonths(convertedStartDate, duration)
        : end_date,
      price: price * duration,
      student_id,
      plan_id,
    });

    return res.json(result);
  }

  async delete(req, res) {
    await Enrollment.destroy({ where: { id: req.params.id } });

    return res.json({ message: 'ok' });
  }
}

export default new EnrollmentController();
