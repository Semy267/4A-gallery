import { IoMdClose } from "react-icons/io";
import store from "@/store";
import { cn } from "@/lib/utils";

export default function CloseDialog({ className }: { className?: string }) {
  const { closeDialog } = store();

  return (
    <button
      type="button"
      onClick={closeDialog}
      className={cn("absolute right-4 top-4", className)}
    >
      <IoMdClose size={20} />
    </button>
  );
}
