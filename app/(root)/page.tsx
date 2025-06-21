"use client";
import CButton from "@/components/shared/custome/c-button";
import store from "@/store";

import { Suspense } from "react";
import DynamicList from "@/components/shared/dynamic-list";
import DemoCarousel from "@/components/module/example/demo-carousel";
import Pagination from "@/components/shared/pagination";
import DemoInput from "@/components/module/example/demo-input";
import DemoDropdown from "@/components/module/example/demo-dropdown";
import DemoPopover from "@/components/module/example/demo-popover";
import DemoTable from "@/components/module/example/demo-table";
import OverlayWrapper from "@/components/shared/overlay-wrapper";

export default function Page() {
  const { setOpenDialog } = store();

  const handleConfirmation = () => {
    setOpenDialog({
      id: "CONFRIMATION",
      width: "w-[300px]",
      title: "Confirmation",
      data: {
        onConfirmation: () => console.log("confirm"),
        text: "Are you sure?",
      },
    });
  };

  return (
    <div className="p-2 container mx-auto w-full grid gap-10">
      <CButton
        title="Confirmation"
        onClick={handleConfirmation}
        variant="secondary"
      />
      <OverlayWrapper trigger={<span>open</span>} headerTitle="test">
        <div>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </div>
      </OverlayWrapper>
      <DynamicList
        isLoading={false}
        item={["Item 1", "Item 2", "Item 3"]}
        render={(item) => <div key={item}>{item}</div>}
      />
      <DemoCarousel />
      <Suspense>
        <Pagination totalPages={20} />
      </Suspense>
      <DemoInput />
      <DemoDropdown />
      <DemoPopover />
      <DemoTable />
    </div>
  );
}
