import { Request, Response } from "express";
import { loadClients } from "../utils/clients/loadClients";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { file } = req;
  const teste = await loadClients(file!);
  return res.status(201).json(teste);
};
