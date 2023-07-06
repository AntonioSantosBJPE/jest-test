"use client";
import { useContext } from "react";
import { OperatorsContext } from "../../_contexts/OperatorsContext";
import { CardInfosOperator } from "./CardInfosOperator";

export const ListOperators = () => {
  const { listOperators, deleteOperator, loading } =
    useContext(OperatorsContext);
  return (
    <ul className="flex flex-col w-full px-3 sm:px-10 gap-4 ">
      {listOperators && listOperators.length > 0 ? (
        listOperators.map((operator) => {
          return (
            <CardInfosOperator
              key={`${operator.name}-${operator.id}`}
              operator={operator}
            />
          );
        })
      ) : (
        <h3 className="text-center font-semibold text-lg">
          Ainda não existem operadores cadastrados!
        </h3>
      )}
    </ul>
  );
};
