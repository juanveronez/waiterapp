import { Product } from "../types/Product";

export const getProductUri = ({ imagePath }: Product) =>
  `http://10.140.140.12:3001/uploads/${imagePath}`;
