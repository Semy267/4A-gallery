import * as React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useBreakpoint } from "@/lib/hooks";

export default function OverlayWrapper({
  children,
  trigger,
  headerTitle,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
  headerTitle?: string;
}) {
  const { isMobile } = useBreakpoint();
  return isMobile ? (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>{headerTitle}</DrawerHeader>
        <div className="max-h-[80vh] max-w-sm mx-auto">{children}</div>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{headerTitle}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
