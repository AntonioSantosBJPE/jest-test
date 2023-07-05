import { Request, Response } from "express";
import { Operator } from "../entities";
import { TrequestCreateOperator } from "../interfaces/operators.interfaces";
import {
  createOperatorService,
  deleteOperatorService,
  retrieveOperatorService,
  retrieveOperatorsWithClientsService,
  updateOperatorService,
} from "../services/operators";

export const createOperatorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: TrequestCreateOperator = req.body;

  const response: Operator = await createOperatorService(body);
  return res.status(201).json(response);
};

export const retrieveOperatorsListController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: Operator[] = await retrieveOperatorsWithClientsService();
  return res.status(200).json(response);
};

export const retrieveOperatorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const operatorId: number = res.locals.operator.id;
  const response: Operator = await retrieveOperatorService(operatorId);
  return res.status(200).json(response);
};

export const updateOperatorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const operator: Operator = res.locals.operator;
  const body: TrequestCreateOperator = req.body;
  const response: Operator = await updateOperatorService(operator, body);
  return res.status(200).json(response);
};

export const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const operator: Operator = res.locals.operator;
  await deleteOperatorService(operator);
  return res.status(204).send();
};
