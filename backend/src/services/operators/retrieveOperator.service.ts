import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Operator } from "../../entities";

export const retrieveOperatorService = async (
  operatorID: number
): Promise<Operator> => {
  const contactRepository: Repository<Operator> =
    AppDataSource.getRepository(Operator);

  const findOperator: Operator | null = await contactRepository.findOne({
    where: {
      id: operatorID,
    },
    relations: {
      clients: true,
    },
  });

  return findOperator!;
};
