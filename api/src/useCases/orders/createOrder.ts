import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products, createdAt, status } = req.body;
    const order = await Order.create({ table, products, createdAt, status });
    res.status(201).json(order);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
