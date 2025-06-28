import React from "react";
import Label from "@/components/shared/label";
import { cn } from "@/lib/utils";

type CCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const CCheckbox: React.FC<CCheckboxProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer">
      <input
        type="checkbox"
        {...props}
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
