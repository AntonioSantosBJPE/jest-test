import { ContainerLayout } from "@/components/ContainerLayout";
import { ContainerSplitLine } from "@/components/ContainerSplitLine";
import Link from "next/link";
import { ExportList } from "./_components/_ExportLIst.tsx";
import { UploadList } from "./_components/_UploadList";

export const metadata = {
  title: "Jet-test | clientes",
  description: "Página de gerenciamento de clientes",
};

const ClientsPage = () => {
  return (
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
          Página de gerenciamento de clientes
        </h1>
        <ContainerSplitLine />
        <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center">
          <UploadList />
          <ExportList />
        </div>
      </section>
    </ContainerLayout>
  );
};

export default ClientsPage;
