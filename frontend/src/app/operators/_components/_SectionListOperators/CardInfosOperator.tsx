"use client";

import { Button } from "@/components/Button";
import { ContainerSplitLine } from "@/components/ContainerSplitLine";
import { Spinner } from "@/components/Spinner";
import { LiHTMLAttributes, useContext } from "react";
import { OperatorsContext } from "../../_contexts/OperatorsContext";
import { Ioperator } from "../../_contexts/types";
import { ListClients } from "./ListClients";

interface IcardInfosOperatorProps extends LiHTMLAttributes<HTMLLIElement> {
  operator: Ioperator;
}

export const CardInfosOperator = ({
  operator,
  ...rest
}: IcardInfosOperatorProps) => {
  const { deleteOperator, loading } = useContext(OperatorsContext);
  return (
    <li
      className="border rounded p-3 border-gray-300 flex flex-col gap-2"
      {...rest}
    >
      <div className="flex gap-2 justify-between items-center w-full flex-wrap">
        <h4>
          <span className="font-semibold">Nome</span> - {operator.name}
        </h4>

        <Button disabled={loading} onClick={() => deleteOperator(operator.id)}>
          {loading ? (
            <div className="flex w-full items-center justify-center gap-2">
              <Spinner /> <span>Deletando</span>
            </div>
          ) : (
            "Deletar operador"
          )}
        </Button>
      </div>
      <ContainerSplitLine />
      <ListClients operator={operator} />
    </li>
  );
};
