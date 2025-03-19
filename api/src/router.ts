import { join } from "node:path";
import { Router } from "express";
import multer, { diskStorage } from "multer";

import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategory";
import { listProducts } from "./useCases/products/listProducts";
import { createProduct } from "./useCases/products/createProduct";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategory";
import { listOrders } from "./useCases/orders/listOrders";
import { createOrder } from "./useCases/orders/createOrder";
import { changeOrderStatus } from "./useCases/orders/changeOrderStatus";
import { cancelOrder } from "./useCases/orders/cancelOrder";

export const router = Router();

const upload = multer({
  storage: diskStorage({
    destination: (req, file, callback) => {
      callback(null, join(__dirname, "..", "uploads"));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get("/categories", listCategories);

router.post("/categories", createCategory);

router.get("/products", listProducts);

router.post("/products", upload.single("image"), createProduct);

router.get("/categories/:categoryId/products", listProductsByCategory);

router.get("/orders", listOrders);

router.post("/orders", createOrder);

router.patch("/orders/:orderId", changeOrderStatus);

router.delete("/orders/:orderId", cancelOrder);
