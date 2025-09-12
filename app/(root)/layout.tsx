"use client";
import BottomDesc from "@/components/module/bottom-desc/bottomDesc";
import Navbar from "@/components/module/navbar";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="!text-neutral-300 bg-black font-sole relative overflow-hidden h-screen">
      {path !== "/" && <Navbar />}

      {children}
      {path !== "/" && <BottomDesc />}
    </div>
  );
}
