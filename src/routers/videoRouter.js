import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (request, response) => response.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);


export default videoRouter;