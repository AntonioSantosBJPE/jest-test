import { InputHTMLAttributes } from "react";

interface IinputUploadProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputUpload = ({ ...rest }: IinputUploadProps) => {
  return (
    <div className="relative">
      <input
        type="file"
        accept=".csv"
        className="appearance-none w-full py-2 pl-3 pr-8 bg-white border border-gray-300
           rounded-md leading-tight focus:outline-none focus:border-blue-500 "
        {...rest}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ">
        <svg
          className="h-5 w-5 text-gray-400 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 7V5a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9l-4-2zM4 5h6v2H4V5zm12 10H4v-1l4-2 4 2v1h4v-4h-2v2l-2-1-2 1V9.5L18 12v3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
