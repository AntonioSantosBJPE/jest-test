import { Request, Response } from "express";
import { resolve } from "node:path";
import {
  createListClientsService,
  exportListClientsService,
} from "../services/clients";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { file } = req;
  const response = await createListClientsService(file);
  return res.status(201).json({ message: response });
};

export const exportListClientsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  await exportListClientsService();
  const tmpFile = resolve(__dirname, "../../tmp", "clients.csv");

  return res.download(tmpFile);
};
