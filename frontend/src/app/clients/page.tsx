import { ContainerLayout } from "@/components/ContainerLayout";
import { UploadList } from "./_components/UploadList";

const ClientsPage = () => {
  return (
    <ContainerLayout>
      <section className=" my-5 flex flex-col items-center gap-6 w-full h-full py-8 ">
        <h1>Pagian cliente</h1>
        <UploadList />
      </section>
    </ContainerLayout>
  );
};

export default ClientsPage;
