import { AppDataSource } from "../../data-source";
import { Operator } from "../../entities";
import { redistributeClients } from "../../utils/clients/redistributeClients";

export const deleteOperatorService = async (
  operator: Operator
): Promise<void> => {
  const operatorRepository = AppDataSource.getRepository(Operator);

  await operatorRepository.remove(operator);

  await redistributeClients();
};
