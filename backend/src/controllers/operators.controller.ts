import { Request, Response } from "express";
import { Operator } from "../entities";
import { TrequestCreateOperator } from "../interfaces/operators.interfaces";
import {
  createOperatorService,
  retrieveOperatorsWithClientsService,
} from "../services/operators";

export const createOperatorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: TrequestCreateOperator = req.body;

  const response: Operator = await createOperatorService(body);
  return res.status(201).json(response);
};

export const retrieveOperatorsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: Operator[] = await retrieveOperatorsWithClientsService();
  return res.status(200).json(response);
};
