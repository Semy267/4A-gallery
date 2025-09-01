import store from "@/store";
import CButton from "../custome/c-button";

export default function OvConfirmation() {
  const { overlay, closeOverlay } = store();
  const onConfirmation = overlay?.data?.onConfirmation;

  return (
    <div className="flex flex-col gap-[12px]">
      <p>Are you sure want to delete your life?</p>
      <div className="flex items-center justify-center gap-[8px]">
        <CButton size={"default"} variant={"default"} onClick={onConfirmation}>
          <span className="pt-1">ok</span>
        </CButton>
      </div>
    </div>
  );
}
