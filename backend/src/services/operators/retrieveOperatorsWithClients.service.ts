import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Operator } from "../../entities";

export const retrieveOperatorsWithClientsService = async (): Promise<
  Operator[]
> => {
  const contactRepository: Repository<Operator> =
    AppDataSource.getRepository(Operator);

  const findListOperators: Operator[] = await contactRepository.find({
    relations: {
      clients: true,
    },
  });

  return findListOperators;
};
