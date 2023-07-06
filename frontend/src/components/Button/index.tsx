"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface IbuttonPros extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...rest }: IbuttonPros) => {
  return (
    <button
      className="bg-white text-gray-700 disabled:text-gray-500 font-bold py-2 px-4 
        border border-gray-300 hover:bg-gray-50 hover:text-gray-800 hover:border-gray-400 rounded outline-none disabled:cursor-not-allowed
         disabled:opacity-50"
      {...rest}
    >
      {children}
    </button>
  );
};
