import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client, Operator } from "../../entities";

export const redistributeClients = async (): Promise<void> => {
  const operatorRepository: Repository<Operator> =
    AppDataSource.getRepository(Operator);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const listOperators = await operatorRepository.find({
    relations: {
      clients: true,
    },
  });

  const listClients = await clientRepository.find();

  const totalOperators = listOperators.length - 1;
  let countOperators = 0;

  listOperators.sort((operatorA, operatorB) => operatorA.id - operatorB.id);

  const listClientToUpdate = listClients.map((client) => {
    const updateCLient = clientRepository.create({
      ...client,
      operator: listOperators[countOperators],
    });

    if (totalOperators == countOperators) {
      countOperators = 0;
    } else {
      countOperators++;
    }

    return updateCLient;
  });

  await clientRepository.save(listClientToUpdate);
};
