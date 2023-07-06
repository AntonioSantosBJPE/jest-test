import { ContainerLayout } from "@/components/ContainerLayout";
import { ContainerSplitLine } from "@/components/ContainerSplitLine";
import Link from "next/link";
import { FormCreateOperator } from "./_components/_FormCreateOperator.tsx";
import { OperatorsProvider } from "./_contexts/OperatorsContext";
import { requestListOperators } from "./_utils/requestListOperators";

export const metadata = {
  title: "Jet-test | Operadores",
  description: "Página de gerenciamento de operadores",
};

const OperatorsPage = async () => {
  const listOperators = await requestListOperators();
  return (
    <OperatorsProvider requestListOperators={listOperators}>
      <ContainerLayout>
        <section className=" my-5 flex flex-col items-center gap-6 w-full h-full py-8 relative">
          <Link
            href="/"
            className="absolute right-2 top-0 text-sm transition ease-in-out
         delay-150  text-gray-800 hover:text-gray-700 hover:-translate-y-1 
         hover:scale-110 hover:underline hover:underline-offset-2 duration-300"
          >
            Voltar para página inicial
          </Link>
          <h1 className="text-black font-bold text-xl text-center sm:text-2xl">
            Página de gerenciamento de operadores
          </h1>
          <ContainerSplitLine />
          <div className="w-full flex flex-col  gap-10 items-center justify-center">
            <FormCreateOperator />
            <ContainerSplitLine />
          </div>
        </section>
      </ContainerLayout>
    </OperatorsProvider>
  );
};

export default OperatorsPage;
