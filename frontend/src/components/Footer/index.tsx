export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-gray-300 absolute bottom-0">
      <div className="mx-auto my-0 h-20 w-full max-w-[1200px] flex items-center flex-col justify-around py-2 px-3">
        <h4 className="text-center font-medium">
          {new Date().getFullYear()} &copy; Todos os direitos reservados.
        </h4>
        <h4 className="text-center  font-medium">
          Desenvolvido por Antonio Santos
        </h4>
      </div>
    </footer>
  );
};
