"use client";
import Select, { ActionMeta, SingleValue } from "react-select";

interface SelectInputProps {
  options: SelectOption[];
  onChange?: (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
  title: string;
  className?: string;
}

interface SelectOption {
  value: string;
  label: string;
}

const SelectInput = ({
  options,
  onChange,
  title,
  className,
}: SelectInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-poppins text-base font-medium text-black">{title}</h2>
      <Select
        id="custom-select-id"
        instanceId="custom-instance-id"
        options={options}
        onChange={onChange}
        className={`"rounded-lg outline-none" text-black ${className}`}
        styles={{
          control: (provided) => ({
            ...provided,
            border: "1px solid #9F9F9F",
            backgroundColor: "white",
            padding: "0.75rem", // Equivalent to p-4
            boxShadow: "none", // Remove default shadow
          }),
          menu: (provided) => ({
            ...provided,
            borderRadius: "0.5rem",
            backgroundColor: "white",
          }),
          option: (provided) => ({
            ...provided,
            backgroundColor: "white",
            color: "black",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "black",
          }),
        }}
      />
    </div>
  );
};

export default SelectInput;
