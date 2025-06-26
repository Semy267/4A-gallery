import * as React from "react";

import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBreakpoint } from "@/lib/hooks";
import store from "@/store";
import { cn } from "@/lib/utils";
import CloseOverlay from "../close-overlay";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import OvConfirmation from "./ov-confirmation";

export default function OverlayWrapper() {
  const { isMobile } = useBreakpoint();
  const { overlay, closeOverlay } = store();
  const id = overlay?.id;
  const title = overlay?.title;
  const isClose = overlay?.isClose;
  const open = overlay?.open || false;
  const isPadding = overlay?.isPadding ?? true;
  const classNameTitle = overlay?.classNameTitle;
  const titleAlign = overlay?.titleAlign || "start";
  const disableOutsideInteraction = overlay?.disableOutsideInteraction || false;

  const handleDisableOutsideInteraction = (e: KeyboardEvent | any) => {
    disableOutsideInteraction && e.preventDefault();
  };

  const Content = () => {
    switch (id) {
      case "CONFRIMATION":
        return <OvConfirmation />;
    }
  };

  return isMobile ? (
    <Drawer
      open={open}
      onOpenChange={() => closeOverlay()}
      dismissible={!disableOutsideInteraction}
    >
      <DrawerContent>
        {title ? (
          <DrawerHeader>
            <DialogTitle
              className={classNameTitle}
              style={{ textAlign: titleAlign }}
            >
              {title}
            </DialogTitle>
            {isClose && <CloseOverlay />}
          </DrawerHeader>
        ) : (
          <VisuallyHidden asChild>
            <DialogTitle></DialogTitle>
          </VisuallyHidden>
        )}
        <div
          className={cn(
            "max-h-[80vh] w-full max-w-xl mx-auto",
            isPadding ? "p-[16px]" : "p-0",
          )}
        >
          {Content()}
        </div>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={() => closeOverlay()}>
      <DialogContent
        className={cn(isPadding ? "p-[16px]" : "p-0")}
        onInteractOutside={(e) => handleDisableOutsideInteraction(e)}
        onEscapeKeyDown={(e) => handleDisableOutsideInteraction(e)}
        aria-describedby={title ? title : undefined}
      >
        {title ? (
          <DialogHeader>
            <DialogTitle
              className={classNameTitle}
              style={{ textAlign: titleAlign }}
            >
              {title}
            </DialogTitle>
            {isClose && <CloseOverlay />}
          </DialogHeader>
        ) : (
          <VisuallyHidden asChild>
            <DialogTitle></DialogTitle>
          </VisuallyHidden>
        )}
        {!title && isClose && <CloseOverlay />}
        {Content()}
      </DialogContent>
    </Dialog>
  );
}
