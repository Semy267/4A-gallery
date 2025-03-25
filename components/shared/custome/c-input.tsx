"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ICinput extends IFieldInput {
  validators?: {
    onChange?: (args: any) => void;
    onChangeAsync: (args: any) => void;
    onChangeAsyncDebounceMs: number;
  };
  name: string;
  form: any;
}

export default function CInput({
  name,
  validators,
  label,
  form,
  ...props
}: ICinput) {
  return (
    <form.Field
      name={name}
      validators={validators}
      children={(field: any) => {
        return (
          <div className="relative mb-[25px]">
            {label && <Label>{label}</Label>}
            <Input
              {...props}
              name={field.name}
              value={field.state.value as string}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors.length ? (
              <em className="absolute left-0 bottom-[-20px] text-xs text-red-500">
                {field.state.meta.errors?.map((err: any) => err.message)?.[0]}
              </em>
            ) : null}
          </div>
        );
      }}
    />
  );
}
