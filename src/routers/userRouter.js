import express from "express";
import { edit, remove } from "../controllers/usersController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", remove);


export default userRouter;