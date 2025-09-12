"use client";
import store from "@/store";
import React from "react";

export default function BottomDesc() {
  const { description } = store();
  return (
    <div className="absolute bottom-0 border-t-2 border-b-2 p-4 border-neutral-500 w-screen">
      <div className="max-w-6xl w-full mx-auto">
        {description} <span className="invisible">a</span>
      </div>
    </div>
  );
}
