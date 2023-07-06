"use client";
import { Ioperator } from "../../_contexts/types";

interface IlistClientsProps {
  operator: Ioperator;
}

export const ListClients = ({ operator }: IlistClientsProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h4 className="font-semibold text-center">Lista de clientes</h4>
      <ul className="flex gap-2 flex-wrap ">
        {operator.clients.length > 0 ? (
          operator.clients.map((client, index) => {
            return (
              <li key={`${client.name}-${client.id}`} className={""}>
                <h4>
                  <span className="font-semibold">
                    {`${index + 1} - Nome - `}
                  </span>
                  {client.name}
                </h4>
              </li>
            );
          })
        ) : (
          <h5 className="font-semibold text-center text-base">
            Não existe clientes cadastrados!
          </h5>
        )}
      </ul>
    </div>
  );
};
