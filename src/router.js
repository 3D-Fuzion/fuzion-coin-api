import {
  GetAll,
  Create,
  Delete,
  RemoveCoin,
  AddCoin,
  GetCoin,
} from "./routes/UserCommands.js";
import { LogIn, SignIn } from "./routes/ManagerCommands.js";
import { Router } from "express";
const router = Router();

router.get("/user", GetAll);
router.get("/coin/:id", GetCoin);
router.post("/user", Create);
// router.post("/user/login", LogIn);
router.delete("/user/:id", Delete);
// router.post("/login", LogIn);
// router.post("/manager", SignIn);
router.post("/manager/removecoin", RemoveCoin);
router.post("/manager/addcoin", AddCoin);

export default router;
