import { Label } from "../ui/label";
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

export default function FieldSelect({
  label,
  form,
  className,
  classNameParent,
  placeholder,
  options,
  name,
}: CSelect) {
  return (
    <form.Field
      name={name}
      validators={form.validators}
      children={(field: any) => {
        return (
          <div className={cn("w-full", classNameParent)}>
            {label && <Label>{label}</Label>}
            <Select
              value={field.state.value as string}
              onValueChange={(e) => field.handleChange(e)}
            >
              <div className="relative mb-[25px]">
                <SelectTrigger className={cn(className)}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                {field.state.meta.errors.length ? (
                  <em className="absolute left-0 bottom-[-20px] text-xs text-red-500">
                    {field.state.meta.errors
                      ?.map((err: any) => err.message)
                      ?.join(", ")}
                  </em>
                ) : null}
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
      }}
    />
  );
}
