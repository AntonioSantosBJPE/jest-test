import { Router } from "express";
import multer from "multer";
import multerConfig from "../configs/multer.config";
import * as clientsController from "../controllers/clients.controller";

const upload = multer(multerConfig);

export const clientsRoutes: Router = Router();

clientsRoutes.post(
  "",
  upload.single("file"),
  clientsController.createClientController
);

clientsRoutes.get("/export", clientsController.exportListClientsController);
