"use client";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { OperatorsContext } from "../../_contexts/OperatorsContext";
import { requestOperatorSchema, TrequestOperator } from "./schemas";

export const FormCreateOperator = () => {
  const [loading, setLoading] = useState(false);
  const { updateListOperators } = useContext(OperatorsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TrequestOperator>({
    mode: "onBlur",
    resolver: zodResolver(requestOperatorSchema),
  });

  const submit = async (formData: TrequestOperator) => {
    try {
      setLoading(true);
      const response = await api.post("operators", formData);
      toast.success("Operador criado com sucesso!");
      updateListOperators();
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      reset();
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <h4 className="text-center text-xl font-semibold ">
        Para cadastrar operadores é muito fácil!
      </h4>
      <h5 className="text-center">
        Basta digitar o nome desejado, logo abaixo, e na sequencia clicar no
        botão <span className="font-bold underline">Cadastrar operador</span>.
      </h5>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-2 w-full max-w-md "
      >
        <div className="flex flex-col w-full gap-1.5">
          <label htmlFor="input-name" className="font-semibold ">
            Nome
          </label>
          <div className="flex flex-col w-full gap-1 items-center">
            <input
              id="input-name"
              type="text"
              {...register("name")}
              placeholder="Digite o nome"
              className="w-full border rounded h-10 px-4 py-2"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name?.message}</p>
            )}
          </div>
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? (
            <div className="flex w-full items-center justify-center gap-2">
              <Spinner /> <span>Cadastrando</span>
            </div>
          ) : (
            "Cadastrar operador"
          )}
        </Button>
      </form>
    </div>
  );
};
