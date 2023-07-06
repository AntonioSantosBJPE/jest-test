"use client";

import { api } from "@/services/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Ioperator, IoperatorsContext, IoperatorsProviderProps } from "./types";

export const OperatorsContext = createContext({} as IoperatorsContext);

export const OperatorsProvider = ({
  children,
  requestListOperators,
}: IoperatorsProviderProps) => {
  const [listOperators, setListOperators] = useState(requestListOperators);
  const [loading, setLoading] = useState(false);

  const updateListOperators = async () => {
    try {
      const { data } = await api.get<Ioperator[]>("operators");
      setListOperators(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOperator = async (operatorId: number) => {
    try {
      setLoading(true);
      await api.delete(`operators/${operatorId}`);
      updateListOperators();
      toast.success("Operador deletado com sucesso!");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OperatorsContext.Provider
      value={{ listOperators, updateListOperators, deleteOperator, loading }}
    >
      {children}
    </OperatorsContext.Provider>
  );
};
