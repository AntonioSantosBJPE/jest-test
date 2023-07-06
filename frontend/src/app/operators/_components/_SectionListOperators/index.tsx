import { ListOperators } from "./ListOperators";

export const SectionListOperators = () => {
  return (
    <section className="flex flex-col gap-6 w-full items-center">
      <h4 className="text-center text-xl font-semibold ">
        Lista de operadores cadastrados e seus clientes
      </h4>
      <ListOperators />
    </section>
  );
};
