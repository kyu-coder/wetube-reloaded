import express from "express";

const userRouter = express.Router();

const handleEditUser = (request, response) => response.send("Edit User");

userRouter.get("/edit", handleEditUser);


export default userRouter;