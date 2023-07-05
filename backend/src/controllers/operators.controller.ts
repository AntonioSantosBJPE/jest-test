import { Request, Response } from "express";

export const createOperatorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(201).json("teste rota de criação de operator");
};
