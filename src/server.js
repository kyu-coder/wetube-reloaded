import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (request, response) => {
    // return response.end(); // ending the request (one of many ways to end)
    return response.send("I still love you."); // another way to end the request (with a sweet msg)
}

const handleLogin = (request, response) => {
    return response.send("Login here.");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

