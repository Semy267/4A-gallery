"use client";
import CButton from "@/components/shared/custome/c-button";
import store from "@/store";

export default function DemoOverlay() {
  const { setOpenOverlay: setOpenDialog } = store();

  const handleConfirmation = (isClose: boolean = false) => {
    setOpenDialog({
      id: "CONFRIMATION",
      title: "Confirmation",
      isClose,
      data: {
        onConfirmation: () => console.log("confirm"),
      },
    });
  };
  const handleConfirmDisableInteraction = (isClose: boolean = false) => {
    setOpenDialog({
      id: "CONFRIMATION",
      isClose,
      disableOutsideInteraction: true,
      data: {
        onConfirmation: () => console.log("confirm"),
      },
    });
  };
  return (
    <div className="flex items-center justify-center gap-[8px] flex-wrap">
      <CButton
        title="Confirmation with x"
        onClick={() => handleConfirmation(true)}
        variant="secondary"
      />
      <CButton
        title="Confirmation without x"
        onClick={() => handleConfirmation(false)}
        variant="secondary"
      />

      <CButton
        title="Confirmation with x and disable outisde interaction"
        onClick={() => handleConfirmDisableInteraction(true)}
        variant="secondary"
      />
      <CButton
        title="Confirmation without x and disable outisde interaction"
        onClick={() => handleConfirmDisableInteraction(false)}
        variant="secondary"
      />
    </div>
  );
}
