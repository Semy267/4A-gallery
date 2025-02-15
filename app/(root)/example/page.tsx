"use client";
import CButton from "@/components/shared/custome/c-button";
import store from "@/store";

export default function Page() {
  const { setOpenDrawer } = store();

  const handleConfirmation = () => {
    setOpenDrawer({
      id: "CONFRIMATION",
      // width: "w-[300px]",
      height: "h-[200px]",
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
