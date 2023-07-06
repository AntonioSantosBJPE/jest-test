"use client";

import { api } from "@/services/api";
import { createContext, useState } from "react";
import { Ioperator, IoperatorsContext, IoperatorsProviderProps } from "./types";

export const OperatorsContext = createContext({} as IoperatorsContext);

export const OperatorsProvider = ({
  children,
  requestListOperators,
}: IoperatorsProviderProps) => {
  const [listOperators, setListOperators] = useState(requestListOperators);

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
      await api.delete(`operators/${operatorId}`);
      updateListOperators();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OperatorsContext.Provider
      value={{ listOperators, updateListOperators, deleteOperator }}
    >
      {children}
    </OperatorsContext.Provider>
  );
};
