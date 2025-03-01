import { CSelect } from "@/components/shared/custome/c-select";
import { OPT_DUMMY } from "@/lib/constants";

import { Form } from "@/components/ui/form";
import { SelectScheme } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import CButton from "@/components/shared/custome/c-button";

export default function DemoSelect() {
  const [forms, setForms] = useState({
    normal: "",
  });

  const form = useForm<z.infer<typeof SelectScheme>>({
    resolver: zodResolver(SelectScheme),
  });

  const onSubmit = async (values: z.infer<typeof SelectScheme>) => {
    console.log(values);
  };

  return (
    <div>
      <CSelect
        form={forms}
        name="normal"
        options={OPT_DUMMY}
        onChange={(value) => setForms({ ...forms, normal: value })}
        label="normal"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-10"
        >
          <CSelect
            isForm
            label="with validation rhf"
            form={form}
            name="options"
            options={OPT_DUMMY}
          />
          <CButton title="Submit" type="submit" />
        </form>
      </Form>
    </div>
  );
}
