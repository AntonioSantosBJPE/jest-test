import { ContainerLayout } from "@/components/ContainerLayout";
import Link from "next/link";

const Home = () => {
  return (
    <ContainerLayout>
      <section className=" my-5 flex flex-col items-center gap-6 w-full h-full py-8 ">
        <h1 className="text-black font-bold text-2xl text-center">
          Sistema de Importação de dados CSV
        </h1>
        <div className="flex flex-col gap-8  w-full items-center md:flex-row p-8">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <h3 className="text-center font-semibold text-xl">
              Bem-vindo ao nosso sistema.
            </h3>
            <p className="text-justify">
              Aqui você poderá importar os dados dos seus clientes, em formato
              csv e atribuir automaticamente, esses dados, aos operadores
              cadastrados.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <h3 className="text-center  font-semibold text-xl">
              Vamos começar?
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-justify">
                Para importar sua lista de clientes ou para exportar a lista de
                clientes cadastrados acesse a página:
                <Link
                  href={"/"}
                  className="transition ease-in-out delay-150  text-gray-800 hover:text-gray-700
            underline underline-offset-2 hover:-translate-y-1 hover:scale-110 duration-300
             ml-2 hover:decoration-2"
                >
                  Clientes
                </Link>
              </p>
              <p className="text-justify">
                Para cadastrar novos operadores, deletar antigos ou para
                visualizar a lista dos operados com seus clientes acesse a
                página:
                <Link
                  href={"/"}
                  className="transition ease-in-out delay-150  text-gray-800 hover:text-gray-700
            underline underline-offset-2 underline- hover:-translate-y-1 hover:scale-110 duration-300
             ml-2 hover:decoration-2"
                >
                  Operadores
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContainerLayout>
  );
};
export default Home;
