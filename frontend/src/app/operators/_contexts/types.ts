import { ReactNode } from "react";

export interface IoperatorsProviderProps {
  children: ReactNode;
}

export interface IoperatorsContext {
  listOperators: Ioperator[] | undefined;
  updateListOperators: () => Promise<void>;
  deleteOperator: (operatorId: number) => Promise<void>;
  loading: boolean;
}

interface Iclient {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  value: string;
}
export interface Ioperator {
  id: number;
  name: string;
  clients: Iclient[];
}
