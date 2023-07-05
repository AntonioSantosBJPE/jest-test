import { Router } from "express";
import * as operatorsController from "../controllers/operators.controller";

export const operatorsRoutes: Router = Router();

operatorsRoutes.post("", operatorsController.createOperatorController);
