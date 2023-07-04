import cors from "cors";
import express, { Application } from "express";
import "express-async-errors";
import { errorHandler } from "./errors";
import * as routers from "./routers";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/clients", routers.clientsRoutes);

app.use(errorHandler);

export default app;
