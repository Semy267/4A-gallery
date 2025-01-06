import { IoMdClose } from "react-icons/io";
import store from "@/store";

export default function CloseModal() {
  const { closeDialog } = store();

  return (
    <button
      type="button"
      onClick={closeDialog}
      className="absolute right-4 top-3"
    >
      <IoMdClose size={20} />
    </button>
  );
}
