import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Operator } from "../../entities";
import { TrequestCreateOperator } from "../../interfaces/operators.interfaces";

export const createOperatorService = async (
  body: TrequestCreateOperator
): Promise<Operator> => {
  const operatorRepository: Repository<Operator> =
    AppDataSource.getRepository(Operator);

  const newOperator: Operator = operatorRepository.create({ ...body });
  await operatorRepository.save(newOperator);
  return newOperator;
};
