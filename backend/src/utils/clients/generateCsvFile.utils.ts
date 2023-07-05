import { stringify } from "csv-stringify";
import fs from "node:fs";

export const generateCSVFile = (
  csvData: any[],
  columnsHeader: string[],
  filePath: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const csvOptions = {
      header: true,
      columns: columnsHeader,
    };

    stringify(csvData, csvOptions, (err, csvString) => {
      if (err) {
        console.error(err);
        reject("Erro ao gerar o arquivo CSV");
        return;
      }

      fs.writeFile(filePath, csvString, (err) => {
        if (err) {
          console.error(err);
          reject("Erro ao salvar o arquivo CSV");
          return;
        }

        resolve(filePath);
      });
    });
  });
};
