"use client";

import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { api } from "@/services/api";
import { useState } from "react";
import { toast } from "react-toastify";

export const ExportList = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const { data } = await api.get<Blob>("clients/export", {
        responseType: "blob",
        headers: {
          "Content-Type": "text/csv",
        },
      });

      const url = window.URL.createObjectURL(data);

      const link = document.createElement("a");
      link.href = url;
      link.download = "client-list.csv";
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Erro ao fazer o download do arquivo!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h4>Deseja realizar o download da lista de clientes cadastrados? </h4>
      <h5>É muito fácil basta clicar no botão abaixo!</h5>
      <Button onClick={handleClick}>
        {loading ? (
          <div className="flex w-full items-center justify-center gap-2">
            <Spinner /> <span>Baixando</span>
          </div>
        ) : (
          "Baixar lista de clientes"
        )}
      </Button>
    </div>
  );
};
