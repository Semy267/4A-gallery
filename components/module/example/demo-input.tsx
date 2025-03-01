import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ProfileSchema } from "@/lib/validation";
import CInput from "@/shared/custome/c-input";
import { Form } from "@/components/ui/form";
import { IoIosAdd } from "react-icons/io";
import { Default } from "@/lib/image";
import CButton from "@/components/shared/custome/c-button";
import { useState } from "react";

export default function DemoInput() {
  const [search, setSearch] = useState("");
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "Jhon",
    },
  });

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    console.log(values);
  };
  return (
    <div className="flex items-start flex-col gap-4 max-w-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <CInput
            iconSvg={<IoIosAdd />}
            label="Name"
            placeholder="Jhon Doe"
            form={form}
            name="name"
          />
          <CInput
            iconImg={Default}
            label="Username"
            placeholder="johndoe24"
            form={form}
            name="username"
          />
          <CButton title="Submit" className="mt-5" font="bd" />
        </form>
      </Form>
      <CInput
        placeholder="Search..."
        value={search}
        name="search"
        onChange={(e: any) => setSearch(e.target.value)}
      />
    </div>
  );
}
