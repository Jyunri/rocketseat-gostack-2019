import HelpOrder from '../models/HelpOrder';

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
    return res.json(result);
  }
}

export default new AnswerOrderController();
