import {
  GetAll,
  Create,
  Delete,
  RemoveCoin,
  AddCoin,
  GetCoin,
  LogIn,
  VerifyToken,
} from "./routes/UserCommands.js";
import { Router } from "express";
const router = Router();

router.get("/user", VerifyToken, GetAll);
router.get("/coin/:id", VerifyToken, GetCoin);
router.post("/user", VerifyToken, Create);
router.post("/user/login", LogIn);
// router.post("/user/login", LogIn);
router.delete("/user/:id", VerifyToken, Delete);
// router.post("/manager", SignIn);
router.post("/manager/removecoin", VerifyToken, RemoveCoin);
router.post("/manager/addcoin", VerifyToken, AddCoin);

export default router;
