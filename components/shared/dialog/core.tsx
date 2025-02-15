"use client";

import store from "@/store";
import CDialog from "@/shared/custome/c-dialog";
import DConfirmation from "./d-confirmation";

export default function CoreDialog() {
  const { dialog: modal, closeDialog: closeModal } = store();
  const open = modal?.open;
  const modalName = modal?.modalName;
  const paddingContent = modal?.paddingContent;
  const headerTitle = modal?.headerTitle;
  const showHeader = modal?.showHeader;
  const height = modal?.height || "";
  const width = modal?.width || "";
  const headerClassName = modal?.headerClassName || "";

  const ModalContent = () => {
    switch (modalName) {
      case "CONFRIMATION":
        return <DConfirmation />;
    }
  };
  return open ? (
    <CDialog
      paddingContent={paddingContent}
      open={open}
      headerTitle={headerTitle}
      showHeader={showHeader}
      height={height}
      width={width}
      setIsOpen={() => closeModal}
      headerClassName={headerClassName}
    >
      <ModalContent />
    </CDialog>
  ) : null;
}
