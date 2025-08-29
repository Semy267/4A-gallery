import { Suspense } from "react";
import DynamicList from "@/components/shared/dynamic-list";
import DemoCarousel from "@/components/module/example/demo-carousel";
import Pagination from "@/components/shared/pagination";
import DemoInput from "@/components/module/example/demo-input";
import DemoDropdown from "@/components/module/example/demo-dropdown";
import DemoPopover from "@/components/module/example/demo-popover";
import DemoTable from "@/components/module/example/demo-table";
import DemoDialog from "@/components/module/example/demo-overlay";

export default function Page() {
  return (
    <div className="p-2 container grid gap-10">
      <div className="">halo world</div>

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
      <DemoDialog />
    </div>
  );
}
