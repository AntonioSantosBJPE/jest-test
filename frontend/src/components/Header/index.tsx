import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b-2 border-gray-300 flex-none">
      <div
        className="mx-auto my-0 h-28 w-full max-w-[1200px] flex flex-col items-center 
      justify-around p-3 sm:h-20 sm:flex-row sm:justify-between"
      >
        <Link
          href={"/"}
          className="text-4xl bg-gradient-to-r from-green-500 via-cyan-500 
          to-blue-500 text-transparent bg-clip-text font-bold "
        >
          Jet Test
        </Link>

        <div className="flex gap-4">
          <Link
            href={"/operators"}
            className="transition ease-in-out delay-150  text-gray-800 hover:text-gray-700
          hover:-translate-y-1 hover:scale-110 hover:underline hover:underline-offset-2
           duration-300"
          >
            Operadores
          </Link>
          <Link
            href={"/clients"}
            className="transition ease-in-out delay-150  text-gray-800 hover:text-gray-700
            hover:-translate-y-1 hover:scale-110 hover:underline hover:underline-offset-2
             duration-300"
          >
            Clientes
          </Link>
        </div>
      </div>
    </header>
  );
};
