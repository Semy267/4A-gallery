import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="!text-neutral-300 bg-black">{children}</div>;
}
