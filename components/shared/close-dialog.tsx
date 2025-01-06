import { IoMdClose } from "react-icons/io";
import useRootStore from "@/store";

export default function CloseModal() {
  const { closeModal }: any = useRootStore();

  return (
    <button
      type="button"
      onClick={closeModal}
      className="absolute right-4 top-3"
    >
      <IoMdClose size={20} />
    </button>
  );
}
