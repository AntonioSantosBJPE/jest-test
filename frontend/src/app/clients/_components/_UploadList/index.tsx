"use client";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { api } from "@/services/api";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { InputUpload } from "./InputUpload";

export const UploadList = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file!);
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      toast.error("Nenhum arquivo selecionado.");
      return;
    }

    if (selectedFile.type !== "text/csv") {
      toast.error("Por favor, selecione um arquivo CSV.");
      resetForm();
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);

      const { data } = await api.post("/clients", formData);
      toast.success(data.message);

      resetForm();
      setSelectedFile(null);
    } catch (error) {
      toast.error("Erro ao enviar o arquivo CSV. Tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md md:w-1/2">
      <h4 className="text-center text-xl font-semibold ">
        Para cadastrar clientes é muito fácil!
      </h4>
      <h5 className="text-justify">
        Basta clicar no botão{" "}
        <span className="font-bold underline">Escolher Arquivo</span>, logo
        abaixo, selecionar seu arquivo, apenas arquivos do tipo .csv são
        aceitos, e na sequencia clicar no botão{" "}
        <span className="font-bold underline">Exporta lista de clientes</span>.
      </h5>
      <form
        onSubmit={handleFormSubmit}
        ref={formRef}
        className="flex flex-col gap-4 w-full "
      >
        <InputUpload onChange={handleFileChange} />

        <Button type="submit" disabled={loading}>
          {loading ? (
            <div className="flex w-full items-center justify-center gap-2">
              <Spinner /> <span>Exportando</span>
            </div>
          ) : (
            "Exportar lista de clientes"
          )}
        </Button>
      </form>
    </div>
  );
};
