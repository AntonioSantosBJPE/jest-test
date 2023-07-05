import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client, Operator } from "../../entities";
import { distributeClients } from "../../utils/clients/distributeClients.utils";
import { loadClients } from "../../utils/clients/loadClients.utils";

export const createListClientsService = async (
  file: Express.Multer.File | undefined
): Promise<any> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const operatorRepository: Repository<Operator> =
    AppDataSource.getRepository(Operator);

  const [headerList, ...listClientsRequest] = await loadClients(file!);

  const listOperators = await operatorRepository.find();

  const listClientToCreate = await distributeClients(
    listClientsRequest,
    listOperators
  );
  const listClientsSaved = await clientRepository.save(listClientToCreate);

  return listClientsSaved;
};
