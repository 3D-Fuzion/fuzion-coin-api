import { GetAll, Create, Delete } from "./routes/UserCommands.js";
import { LogIn, SignIn } from "./routes/ManagerCommands.js";
import { Router } from "express";
const router = Router();

router.get("/user", GetAll);
router.post("/user", Create);
// router.post("/user/login", LogIn);
router.delete("/user/:id", Delete);
// router.post("/login", LogIn);
// router.post("/manager", SignIn);
// router.post("/manager/changecoin", ChangeCoinQuantity);

export default router;
