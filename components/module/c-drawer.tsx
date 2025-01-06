import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const CDrawer = ({
  open,
  setIsOpen,
  children,
  headerTitle,
  height,
  paddingContent = true,
}: CDrawer) => {
  return (
    <Drawer
      open={open}
      onOpenChange={(isOpen) => (!isOpen ? setIsOpen() : null)}
    >
      <DrawerContent
        className={cn(
          "bg-neutral overflow-hidden !rounded-t-md",
          height || "h-[300px]",
        )}
      >
        {" "}
        <DrawerHeader className="!p-0">
          <DrawerTitle className="flex pb-5 px-4">{headerTitle}</DrawerTitle>
        </DrawerHeader>
        <div className={cn("p-4", !paddingContent && "!p-0")}>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default CDrawer;
