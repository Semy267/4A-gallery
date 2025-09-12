"use client";
import CButton from "@/components/shared/custome/c-button";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const { push } = useRouter();
  return (
    <div className="max-w-6xl mx-auto pt-30 grid grid-cols-3 px-4 gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <CButton
            variant={"default"}
            size={"default"}
            title="Back"
            onClick={() => push("/dashboard")}
          />
          <CButton variant={"default"} size={"default"} title="Favorite" />
        </div>
        <div className="bg-neutral-800 h-[325px] border flex flex-col gap-4 border-neutral-600 p-2 font-sole">
          <div>
            <h1 className="text-xl">LYNX NAME</h1>
            <p className="text-end text-xl">Salman</p>
          </div>
          <div>
            <h1 className="text-xl">NEXTS NAME</h1>
            <p className="text-end text-xl">White Glint</p>
          </div>
          <div className="border-t-2 border-b-2 border-neutral-500 flex items-center justify-between">
            <h1 className="text-xl">COAM</h1>
            <p className="text-end text-xl">12000C</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 w-full">
        <div className="w-full border-2 border-[#67686A] p-1 h-fit">
          <div className="bg-neutral-900 p-2 w-full border-[#353536] h-full border-2 flex items-center gap-2">
            <div className="w-10 h-10 border"></div>
            <div className="flex flex-col gap-2">
              <h1>Dragon Dive</h1>
              <div className="flex items-center">
                <Play />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
