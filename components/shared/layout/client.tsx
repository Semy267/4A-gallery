"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Loading from "../loading";
import OverlayWrapper from "../overlay-wrapper";

export default function Client({ children }: { children: React.ReactNode }) {
  const { loading, clearLoading, closeOverlay: closeDialog } = useAuthStore();
  const path = usePathname();

  useEffect(() => {
    if (path) {
      clearLoading();
      closeDialog();
    }
  }, [path]);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading isBg />}
      <OverlayWrapper />
      <ProgressBar
        height="4px"
        color="var(--primary)"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}
