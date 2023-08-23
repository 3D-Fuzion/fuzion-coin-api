import { connect } from "mongoose";
import express, { json } from "express";
import router from "./router.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(json());
app.use(router);

const PORT = process.env.PORT || 3001;

const DB_USER = "admin";
const DB_PASSWORD = encodeURIComponent("@Gui92720108");

app.listen(PORT, () => console.log("Server running on port " + PORT));

connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@fuzion-db.umq4kca.mongodb.net/?retryWrites=true&w=majority`
)
  .then(() => {
    console.log("Conectado ao Banco de Dados!");
  })
  .catch((err) => {
    console.log(err);
  });
