import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import CloseDialog from "../close-dialog";

const CDrawer = ({
  open = false,
  setIsOpen,
  children,
  title,
  isPadding = true,
  isClose = true,
}: CDialog) => {
  return (
    <Drawer open={open} onOpenChange={setIsOpen} dismissible={false}>
      <DrawerContent>
        <DrawerHeader className={cn(isClose && "text-left py-0")}>
          <DrawerTitle className="text-foreground!">{title}</DrawerTitle>
          {isClose && <CloseDialog />}
        </DrawerHeader>
        <div className={cn("p-4", !isPadding && "p-0")}>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default CDrawer;
