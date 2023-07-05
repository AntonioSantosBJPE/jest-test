import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { generateCSVFile } from "../../utils/clients/generateCsvFile.utils";

export const exportListClientsService = async (): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const listClients = await clientRepository.find();

  const csvData = listClients.map((item) => {
    return {
      nome: item.name,
      nascimento: item.bithDate,
      valor: item.value,
      email: item.email,
    };
  });

  const columnsHeader = ["nome", "nascimento", "valor", "email"];
  const filePath = "tmp/clients.csv";

  await generateCSVFile(csvData, columnsHeader, filePath);
};
