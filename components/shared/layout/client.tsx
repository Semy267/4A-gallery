"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store";
import CoreDialog from "../dialog/core";
import CoreDrawer from "../drawer/core";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Client({ children }: { children: React.ReactNode }) {
  const {
    loading,
    clearLoading,
    closeDialog: closeModal,
    closeDrawer,
  } = useAuthStore();
  const path = usePathname();

  useEffect(() => {
    clearLoading();
    closeModal();
    closeDrawer();
  }, [path]);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      <CoreDialog />
      <CoreDrawer />
      <ProgressBar
        height="4px"
        color="#3b82f6"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}
