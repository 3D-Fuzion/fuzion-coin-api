import {
  GetAll,
  Create,
  Delete,
  RemoveCoin,
  AddCoin,
  GetCoin,
  LogIn,
  VerifyToken,
  PixTransfer,
} from "./routes/UserCommands.js";

import { Authentication, VerifyApiStatus } from "./routes/ServerCommands.js";
import { Router } from "express";
const router = Router();

router.get("/user", GetAll);
router.post("/user", VerifyToken, Create);
router.post("/user/login", LogIn);
router.post("/pix", VerifyToken, PixTransfer);
router.delete("/user/:id", VerifyToken, Delete);

router.get("/status", VerifyApiStatus);
router.get("/authentication", Authentication);

router.get("/coin/:id", VerifyToken, GetCoin);
router.post("/manager/removecoin", VerifyToken, RemoveCoin);
router.post("/manager/addcoin", VerifyToken, AddCoin);

export default router;
