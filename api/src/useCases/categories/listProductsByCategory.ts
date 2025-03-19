import { Request, Response } from "express";
import { Product } from "../../models/product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where("category").equals(categoryId);
    res.json(products);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
