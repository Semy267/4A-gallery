"use client";

import store from "@/store";
import { useBreakpoint } from "@/lib/hooks";
import CDialog from "@/shared/custome/c-dialog";
import CDrawer from "@/shared/custome/c-drawer";
import DConfirmation from "./d-confirmation";

export default function CoreDialog() {
  const { dialog, closeDialog } = store();
  const id = dialog?.id;
  const title = dialog?.title;
  const width = dialog?.width;
  const height = dialog?.height;
  const open = dialog?.open || false;
  const isClose = dialog?.isClose;
  const isPadding = dialog?.isPadding;
  const classNameTitle = dialog?.classNameTitle;
  const { isMobile } = useBreakpoint();

  const Content = () => {
    switch (id) {
      case "CONFRIMATION":
        return <DConfirmation />;
    }
  };

  const renderContent = () => {
    switch (isMobile) {
      case true:
        return (
          <CDrawer
            open={open}
            setIsOpen={() => closeDialog()}
            title={title}
            height={height}
            isPadding={isPadding}
            isClose={isClose}
          >
            <Content />
          </CDrawer>
        );
      default:
        return (
          <CDialog
            isPadding={isPadding}
            open={open}
            title={title}
            height={height}
            width={width}
            setIsOpen={() => closeDialog()}
            classNameTitle={classNameTitle}
            isClose={isClose}
          >
            <Content />
          </CDialog>
        );
    }
  };

  return open && renderContent();
}
