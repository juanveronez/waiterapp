import { model, Schema } from "mongoose";

export const ORDER_STATUS = ["WAITING", "IN_PRODUCTION", "DONE"];

export const Order = model(
  "Order",
  new Schema({
    table: { type: String, required: true },
    status: {
      type: String,
      enum: ORDER_STATUS,
      default: "WAITING",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    products: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          quantity: { type: Number, default: 1 },
        },
      ],
    },
  })
);
