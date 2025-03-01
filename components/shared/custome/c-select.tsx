import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type CSelectBase = CSelect &
  (
    | { isForm: true; onChange?: (value: string) => void }
    | { isForm?: false; onChange?: (value: string) => void }
  );

export function CSelect({
  options,
  label,
  placeholder = "Select an option",
  isForm = false,
  form,
  name,
  required = false,
  className,
  classNameParent,
  onChange,
}: CSelectBase) {
  return isForm ? (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => {
        const isError = fieldState.error?.message;

        return (
          <FormItem>
            <FormControl>
              <BaseSelect
                isForm
                label={label}
                classNameParent={classNameParent}
                className={className}
                required={required}
                form={form.value}
                name={name}
                onChange={field.onChange}
                placeholder={placeholder}
                options={options}
              />
            </FormControl>
            {isError && <FormMessage />}
          </FormItem>
        );
      }}
    />
  ) : (
    <BaseSelect
      isForm={false}
      label={label}
      classNameParent={classNameParent}
      className={className}
      required={required}
      form={form[name]}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
    />
  );
}

const BaseSelect = ({
  label,
  classNameParent,
  className,
  required,
  form,
  onChange,
  placeholder,
  options,
}: CSelectBase) => {
  return (
    <div className={cn("w-full", classNameParent)}>
      {label && (
        <Label>
          {label}
          {required ? " *" : ""}
        </Label>
      )}
      <Select value={form} onValueChange={onChange}>
        <SelectTrigger className={cn(className)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
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
};
