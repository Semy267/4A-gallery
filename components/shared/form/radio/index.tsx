import { cn } from "@/lib/utils";
import React from "react";
import Label from "../../label";

type CRadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const CRadio: React.FC<CRadioProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer">
      <input
        {...props}
        type="radio"
        className={cn(
          "accent-primary cursor-pointer h-[20px] min-w-[20px] focus:ring-0 focus:ring-offset-0 focus:outline-0",
          className,
        )}
      />
      {label && (
        <Label
          label={label}
          className={cn(props.disabled && "text-gray-400")}
        />
      )}
    </label>
  );
};
