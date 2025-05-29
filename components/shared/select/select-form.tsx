import CSelect from ".";
import { SelectValue } from "@/components/ui/select";
import Common from "../trigger/common";
import { Calendar } from "lucide-react";

interface ISelectForm {
  form?: any;
  name: string;
  options: IOpt[];
  placeholder?: string;
}

export default function CSelectForm({ form, name, ...props }: ISelectForm) {
  return (
    <form.Field
      name={name}
      validators={form.validators}
      children={(field: any) => {
        const isError = field && !!field.state.meta.errors.length;
        return (
          <>
            <CSelect
              {...props}
              value={field.state.value}
              onChange={(e) => field.handleChange(e)}
              placeholder={props.placeholder}
              options={props.options}
              trigger={
                <Common iconSvg={Calendar}>
                  <SelectValue placeholder="select" />
                </Common>
              }
            />

            {isError && (
              <em>
                {field.state.meta.errors?.map((err: any) => err.message)?.[0]}
              </em>
            )}
          </>
        );
      }}
    />
  );
}
