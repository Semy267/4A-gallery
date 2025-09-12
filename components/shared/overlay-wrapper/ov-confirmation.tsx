import store from "@/store";
import CButton from "../custome/c-button";

export default function OvConfirmation() {
  const { overlay, closeOverlay } = store();
  const onConfirmation = overlay?.data?.onConfirmation;

  return (
    <div className="flex flex-col gap-[12px] font-sole">
      <p>
        This website is a <strong>non-commercial fan project</strong> inspired
        by Armored Core and related mecha culture. All rights to the original
        works, names, and designs belong to their respective creators and
        publishers. No copyright infringement intended.
      </p>
      <p>
        <strong>Audio Notice</strong>: This page contains music and sound
        effects. Please lower your volume or use headphones if needed
      </p>
      <div className="flex items-center justify-center gap-[8px]">
        <CButton size={"default"} variant={"default"} onClick={onConfirmation}>
          <span className="pt-1">ok</span>
        </CButton>
      </div>
    </div>
  );
}
