import { Router } from "express";
import * as operatorsController from "../controllers/operators.controller";
import * as middlewares from "../middlewares";
import { operatorCreateRequestSchema } from "../schemas/operators.schemas";

export const operatorsRoutes: Router = Router();

operatorsRoutes.post(
  "",
  middlewares.validateBodyMiddleware(operatorCreateRequestSchema),
  middlewares.validateUniqueNameOperatorsMiddleware,
  operatorsController.createOperatorController
);

operatorsRoutes.get("", operatorsController.retrieveOperatorsListController);
operatorsRoutes.get(
  "/:id",
  middlewares.validateOperatorIdMiddleware,
  operatorsController.retrieveOperatorController
);

operatorsRoutes.patch(
  "/:id",
  middlewares.validateOperatorIdMiddleware,
  middlewares.validateBodyMiddleware(operatorCreateRequestSchema),
  middlewares.validateUniqueNameOperatorsMiddleware,
  operatorsController.updateOperatorController
);

operatorsRoutes.delete(
  "/:id",
  middlewares.validateOperatorIdMiddleware,
  operatorsController.deleteClientController
);
