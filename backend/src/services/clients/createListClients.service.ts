import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { distributeClients } from "../../utils/clients/distributeClients.utils";
import { loadClients } from "../../utils/clients/loadClients.utils";

export const createListClientsService = async (
  file: Express.Multer.File | undefined
): Promise<string> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const [headerList, ...listClientsRequest] = await loadClients(file!);

  await distributeClients(listClientsRequest);

  return "Upload realizado com sucesso!";
};
