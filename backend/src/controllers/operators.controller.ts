import { Request, Response } from "express";
import { TrequestCreateOperator } from "../interfaces/operators.interfaces";
import { createOperatorService } from "../services/operators";

export const createOperatorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: TrequestCreateOperator = req.body;

  const response = await createOperatorService(body);
  return res.status(201).json(response);
};
