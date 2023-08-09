import { model } from "mongoose";

export const User = model("User", {
  name: String,
  email: String,
  cpf: String,
  password: String,
  coin: Number,
});
