import React from "react";

interface CustomInputProps {
  title: string;
  id: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CustomInput = ({
  title,
  id,
  type,
  placeholder,
  onChange,
  className,
}: CustomInputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id}
        className="font-poppins text-base font-medium text-black"
      >
        {title}
      </label>
      <input
        className="rounded-lg border border-[#9F9F9F] bg-white p-4 text-black outline-none"
        type={type || "text"}
        placeholder={placeholder || ""}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
