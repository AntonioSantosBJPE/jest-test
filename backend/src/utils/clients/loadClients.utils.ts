import { parse as csvParse } from "csv-parse";
import fs from "node:fs";
import { IclientsRequest } from "../../interfaces/clients.interfaces";

export const loadClients = (
  file: Express.Multer.File
): Promise<IclientsRequest[]> => {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file.path);
    const clients: IclientsRequest[] = [];

    const parseFile = csvParse();
    stream.pipe(parseFile);

    parseFile
      .on("data", async (line) => {
        const [nome, nascimento, valor, email] = line;

        clients.push({
          name: nome,
          birthDate: nascimento,
          email: email,
          value: valor,
        });
      })
      .on("end", () => {
        fs.promises.unlink(file.path);
        resolve(clients);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};
