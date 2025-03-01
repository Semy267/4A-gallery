import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import store from "@/store";

const CDrawer = ({
  open,
  setIsOpen,
  children,
  headerTitle,
  height,
  paddingContent = true,
}: CDrawer) => {
  const { closeDrawer } = store();
  return (
    <Drawer
      open={open}
      onOpenChange={(isOpen) => (!isOpen ? setIsOpen() : null)}
    >
      <DrawerContent
        onEscapeKeyDown={closeDrawer}
        onInteractOutside={closeDrawer}
        className={cn("overflow-hidden !rounded-t-md", height || "h-[300px]")}
      >
        {" "}
        <DrawerHeader>
          <DrawerTitle>{headerTitle}</DrawerTitle>
        </DrawerHeader>
        <div className={cn("p-4", !paddingContent && "!p-0")}>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default CDrawer;
