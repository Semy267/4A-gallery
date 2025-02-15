"use client";
import CButton from "@/components/shared/custome/c-button";
import store from "@/store";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ProfileSchema } from "@/lib/validation";
import CInput from "@/shared/custome/c-input";
import { Form } from "@/components/ui/form";
import { IoIosAdd } from "react-icons/io";
import { Default } from "@/lib/image";
import { useState } from "react";
import CInputV2 from "@/shared/custome/c-input-v2";
import DynamicList from "@/components/shared/dynamic-list";

export default function Page() {
  const { setOpenDrawer } = store();
  const [search, setSearch] = useState("");

  const handleConfirmation = () => {
    setOpenDrawer({
      id: "CONFRIMATION",
      // width: "w-[300px]",
      height: "h-[200px]",
      headerTitle: "Confirmation",
      data: {
        onConfirmation: () => console.log("confirm"),
        text: "Are you sure?",
      },
    });
  };

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "Jhon",
    },
  });

  const nameValue = form.watch("name");
  console.log(nameValue);

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    console.log(values);
  };

  return (
    <div className="p-2">
      <CButton
        title="Confirmation"
        onClick={handleConfirmation}
        variant="secondary"
      />
      <DynamicList
        isLoading={false}
        item={["Item 1", "Item 2", "Item 3"]}
        render={(item) => <div>{item}</div>}
      />
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
            <CButton title="Submit" className="mt-5" />
          </form>
        </Form>
        <CInputV2
          placeholder="Search..."
          value={search}
          name="search"
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
