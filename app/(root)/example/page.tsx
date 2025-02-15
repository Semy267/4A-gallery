"use client";
import CButton from "@/components/shared/custome/c-button";
import store from "@/store";

export default function Page() {
  const { setOpenDialog } = store();

  const handleConfirmation = () => {
    setOpenDialog({
      modalName: "CONFRIMATION",
      width: "w-[300px]",
      headerTitle: "Confirmation",
      data: {
        onConfirmation: () => console.log("confirm"),
        text: "Are you sure?",
      },
    });
  };
  return (
    <div className="p-2">
      <CButton
        title="Confirmation"
        onClick={handleConfirmation}
        variant="secondary"
      />
    </div>
  );
}
