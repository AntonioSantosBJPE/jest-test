"use client";
import { api } from "@/services/api";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

export const UploadList = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
      const formData = new FormData();
      formData.append("file", selectedFile);

      const { data } = await api.post("/clients", formData);
      toast.success(data.message);

      resetForm();
      setSelectedFile(null);
    } catch (error) {
      toast.error("Erro ao enviar o arquivo CSV. Tente novamente!");
    }
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button type="submit" className="rounded border">
        Exportar
      </button>
    </form>
  );
};
