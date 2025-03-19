import { Request, Response } from "express";
import { Product } from "../../models/product";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
