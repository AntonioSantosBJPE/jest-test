import { ReactNode } from "react";

interface IcontainerLayoutProps {
  children: ReactNode;
}
export const ContainerLayout = ({ children }: IcontainerLayoutProps) => {
  return (
    <div className="mx-auto my-0 w-full  max-w-[1200px] px-3 bg-white rounded-lg">
      {children}
    </div>
  );
};
