import { Label } from "@/components/ui/label";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface CSelectField extends CSelect {
  value: string;
  onChange: (value: string) => void;
}

export default function CSelectField({
  label,
  className,
  classNameParent,
  placeholder,
  options,
  value,
  onChange,
}: CSelectField) {
  return (
    <div className={cn("w-full", classNameParent)}>
      {label && <Label>{label}</Label>}
      <Select value={value} onValueChange={(e) => onChange(e)}>
        <div className="relative mb-[25px]">
          <SelectTrigger className={cn(className)}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </div>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-foreground"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
