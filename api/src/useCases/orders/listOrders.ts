import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate("products.product");
    res.json(orders);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
