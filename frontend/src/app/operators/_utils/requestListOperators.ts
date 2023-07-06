import { api } from "@/services/api";
import { Ioperator } from "../_contexts/types";

export const requestListOperators = async () => {
  try {
    const { data } = await api.get<Ioperator[]>("operators");
    return data;
  } catch (error) {
    console.log(error);
  }
};
