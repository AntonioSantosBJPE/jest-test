import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Operator } from "../entities";
import { AppError } from "../errors";

export const validateOperatorIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const paramsId: string = req.params.id;

  if (isNaN(Number(paramsId))) {
    throw new AppError("Operator not found", 404);
  }

  const operatorRepository: Repository<Operator> =
    AppDataSource.getRepository(Operator);
  const findOperator: Operator | null = await operatorRepository.findOneBy({
    id: Number(paramsId),
  });

  if (!findOperator) {
    throw new AppError("Operator not found", 404);
  }

  res.locals.operator = findOperator;
  next();
};
