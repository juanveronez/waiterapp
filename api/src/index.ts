import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import { join } from "node:path";

mongoose
  .connect("mongodb://root:example@localhost:27017/")
  .then(() => {
    const app = express();

    app.use("/uploads", express.static(join(__dirname, "..", "uploads")));

    app.use(express.json());
    app.use(router);

    const port = 3001;
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });

    console.log("Conectado ao MongoDB");
  })
  .catch((e: Error) => console.error("Erro ao se conectar com o Mongo:", e));
