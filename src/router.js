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
  GetUserData,
  GetUserByEmail,
} from "./routes/UserCommands.js";

import { Authentication, VerifyApiStatus } from "./routes/ServerCommands.js";
import { Router } from "express";
const router = Router();

router.get("/user", GetAll);
router.get("/coin/:id", VerifyToken, GetCoin);
router.get("/user/:id", VerifyToken, GetUserData);
router.get("/user/pix/search/:email", VerifyToken, GetUserByEmail);

router.post("/pix", VerifyToken, PixTransfer);
router.post("/user", VerifyToken, Create);
router.post("/user/login", LogIn);

router.delete("/user/:id", VerifyToken, Delete);

router.get("/status", VerifyApiStatus);
router.get("/authentication", Authentication);

router.post("/manager/removecoin", VerifyToken, RemoveCoin);
router.post("/manager/addcoin", VerifyToken, AddCoin);

export default router;
