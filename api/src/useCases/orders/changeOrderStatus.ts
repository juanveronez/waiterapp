import { Request, Response } from "express";
import { Order, ORDER_STATUS } from "../../models/order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!ORDER_STATUS.includes(status)) {
      res.status(400).json({
        error: "Invalid status",
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
