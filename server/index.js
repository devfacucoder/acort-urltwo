import express from "express";
const app = express();
import mongoose from "./db.js";
import cors from "cors";
import urlRoutes from "./urls.routes.js";
import urlModel from "./url.model.js";
import dotenv from "dotenv";
dotenv.config()
// Función para eliminar URLs expiradas
const deleteExpiredUrls = async () => {
  const now = new Date();
  await urlModel.deleteMany({ expirationDate: { $lt: now } });
  console.log("URLs expiradas eliminadas.");
};

// Llamada periódica (por ejemplo, cada 24 horas)
setInterval(deleteExpiredUrls, 24 * 60 * 60 * 1000); // Cada 24 horas
app.use(cors());

app.use(express.json());
app.use(urlRoutes);

app.listen(4000, () => {
  console.log("server abierto en: " + process.env.BASE_URL);
});
