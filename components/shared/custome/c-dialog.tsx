import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import CloseDialog from "@/shared/close-dialog";

const CModal = ({
  open,
  setIsOpen,
  height,
  width,
  children,
  title,
  classNameTitle,
  isPadding = true,
  isClose = true,
}: CDialog) => {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn(
          "w-full h-auto p-0 max-h-[80vh] overflow-y-auto bg-background flex flex-col gap-[16px] gap-0 overflow-hidden rounded-[12px] focus-visible:outline-none",
          height,
          width,
        )}
        style={{ zIndex: 999 }}
      >
        <DialogHeader className={cn("p-[16px]", isClose && "text-left")}>
          <DialogTitle
            className={cn(
              "text-base font-semibold text-foreground mb-5",
              classNameTitle,
            )}
          >
            {title}
          </DialogTitle>
          {isClose && <CloseDialog />}
        </DialogHeader>

        <div className={cn("p-[16px]", !isPadding && "p-0")}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default CModal;
