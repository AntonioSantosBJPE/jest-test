import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client, Operator } from "../../entities";
import { IclientsRequest } from "../../interfaces/clients.interfaces";

export const distributeClients = async (
  listClients: Client[] | IclientsRequest[],
  listOperators: Operator[]
): Promise<Client[]> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const totalOperators = listOperators.length - 1;
  let countOperators = 0;
  const listClientToCreate = listClients.map((client) => {
    const newCLient = clientRepository.create({
      ...client,
      operator: listOperators[countOperators],
    });

    if (totalOperators == countOperators) {
      countOperators = 0;
    } else {
      countOperators++;
    }

    return newCLient;
  });

  return listClientToCreate;
};
