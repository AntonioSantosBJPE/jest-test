import { Request, Response } from "express";
import { createListClientsService } from "../services/clients";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { file } = req;
  const response = await createListClientsService(file);
  return res.status(201).json(response);
};
