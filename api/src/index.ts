import express from "express";
import cors from "cors";
import userController from "./controllers/userController";

const app = express();

app.use(cors());

app.use("/user", userController);

app.listen(5000, () => console.log("API listening on http://localhost:5000"));
