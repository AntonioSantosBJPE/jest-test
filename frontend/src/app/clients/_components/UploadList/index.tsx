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
    <form
      onSubmit={handleFormSubmit}
      ref={formRef}
      className="flex flex-col  gap-4 w-full max-w-md "
    >
      <InputUpload onChange={handleFileChange} />

      <Button type="submit" disabled={loading}>
        {loading ? (
          <div className="flex w-full items-center justify-center gap-2">
            <Spinner /> <span>Exportando</span>
          </div>
        ) : (
          "Exportar"
        )}
      </Button>
    </form>
  );
};
