import { Router } from "express";
import multer from "multer";
import multerConfig from "../configs/multer.config";
import * as clientsController from "../controllers/clients.controller";
import { validatedFileSentMiddleware } from "../middlewares";

const upload = multer(multerConfig);

export const clientsRoutes: Router = Router();

clientsRoutes.post(
  "",
  upload.single("file"),
  validatedFileSentMiddleware,
  clientsController.createClientController
);

clientsRoutes.get("/export", clientsController.exportListClientsController);
