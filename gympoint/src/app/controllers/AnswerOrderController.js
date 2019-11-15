import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';
import Mail from '../../lib/Mail';

class AnswerOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: { answer_at: null },
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const helpOrder = await HelpOrder.findByPk(req.params.id);

    const result = await helpOrder.update({
      ...req.body,
      answer_at: new Date(),
    });

    const { student_id } = helpOrder;

    const student = await Student.findByPk(student_id);

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: `Resposta a pergunta ${result.id}`,
      text: `
        Pergunta: ${result.question}
        Resposta: ${result.answer}
        Respondida em: ${result.answer_at}

        Bons treinos!
      `,
    });

    return res.json(result);
  }
}

export default new AnswerOrderController();
