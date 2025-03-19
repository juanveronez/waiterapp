import { Request, Response } from "express";
import { Category } from "../../models/category";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
