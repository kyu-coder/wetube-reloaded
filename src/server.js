import express, { response } from "express";

const PORT = 4000;

const app = express();

const logger = (request, response, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
}

const handleHome = (request, response) => {
    return response.send("I love middlewares");
}

const handleLogin = (request, response) => {
    return response.send({message: "Login here."});
}

const privateMiddleware = (request, response, next) => {
    const url = request.url;
    if(url === "/protected"){
        return response.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, you may continue");
    next();
}

const handleProtected = (request, response) => {
    return response.send("Welcome to the private lounge.");
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

