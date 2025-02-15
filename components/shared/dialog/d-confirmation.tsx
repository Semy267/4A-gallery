import store from "@/store";
import CButton from "@/shared/custome/c-button";

export default function DConfirmation() {
  const { dialog, closeDialog } = store();
  const onConfirmation = dialog?.data?.onConfirmation;
  const text = dialog?.data?.text;

  return (
    <div className="flex flex-col gap-5 items-center">
      <h2>{text}</h2>
      <div className="flex gap-2 items-center w-full *:w-full">
        <CButton title="Cancel" onClick={closeDialog} variant="destructive" />
        <CButton title="Yes!" onClick={onConfirmation} />
      </div>
    </div>
  );
}
