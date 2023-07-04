import cors from "cors";
import express, { Application } from "express";
import "express-async-errors";

const app: Application = express();

app.use(express.json());
app.use(cors());

export default app;
