"use client";
import CButton from "@/components/shared/c-button";
import useStore from "@/store";

export default function Page() {
  const { setOpenDialog } = useStore();

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
