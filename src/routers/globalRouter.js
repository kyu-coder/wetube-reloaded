import express from "express";

const globalRouter = express.Router();

const handleHome = (request, response) => response.send("Home");

globalRouter.get("/", handleHome);


export default globalRouter;