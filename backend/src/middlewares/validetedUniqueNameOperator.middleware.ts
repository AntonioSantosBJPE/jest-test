import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Operator } from "../entities";
import { AppError } from "../errors";
import { TrequestCreateOperator } from "../interfaces/operators.interfaces";

export const validateUniqueNameOperatorsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const operatorsRepository: Repository<Operator> =
    AppDataSource.getRepository(Operator);
  const body: TrequestCreateOperator = req.body;

  if (body.name) {
    const operatorNameToValidate: Operator | null =
      await operatorsRepository.findOne({
        where: {
          name: body.name,
        },
      });

    if (operatorNameToValidate) {
      throw new AppError("Operator name already exists", 409);
    }
  }

  next();
};
