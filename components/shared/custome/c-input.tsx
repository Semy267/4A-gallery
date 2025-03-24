"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ICinput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  name: string;
  label?: string;
  validators?: any;
  form: any; // NOTE if u know the type of form, please let me know or just open pr
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
                {field.state.meta.errors
                  ?.map((err: any) => err.message)
                  ?.join(", ")}
              </em>
            ) : null}
          </div>
        );
      }}
    />
  );
}
