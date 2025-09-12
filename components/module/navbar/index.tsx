"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const path = usePathname();
  let title;

  switch (path) {
    case "/dashboard":
      title = "Dashboard";
      break;
    case "/profile":
      title = "Profile";
      break;
    case "/soundtrack":
      title = "Soundtrack";
      break;
    case "/gallery":
      title = "Gallery";
      break;
    case "/wiki":
      title = "Wiki";
      break;
    default:
      title = "For Answer";
  }
  return (
    <div className="flex gap-4 h-25 fixed w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-70%" />
      <div className="border-b h-full border-r border-neutral-300 py-2 px-6 w-100 flex justify-end items-end">
        <span className="text-3xl font-trajan uppercase">{title}</span>
      </div>
      <div className="border-b h-full border-neutral-300 sm:flex hidden items-end w-full">
        {path !== "/dashboard" && (
          <div className="w-60 flex flex-col mb-[3px]">
            <span className="text-2xl font-sole">Strayed</span>
            <div className="h-[1px] bg-gradient-to-r from-red-600 to-black w-full" />
          </div>
        )}
      </div>
    </div>
  );
}
