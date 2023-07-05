import { stringify } from "csv-stringify";
import fs from "node:fs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors";

export const exportListClientsService = async (): Promise<any> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const listClients = await clientRepository.find();

  const writeStream = fs.createWriteStream("tmp/clients.csv");
  const stringifier = stringify({
    header: true,
    columns: ["nome", "nascimento", "valor", "email"],
  });

  if (listClients.length > 0) {
    listClients.forEach((client) => {
      const { id, operator, ...clientNoId } = client;
      stringifier.write(Object.values(clientNoId));
    });
  } else {
    throw new AppError("Client list is empty", 400);
  }

  stringifier.pipe(writeStream);
};
