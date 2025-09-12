"use client";
import CButton from "@/components/shared/custome/c-button";
import store from "@/store";
import { useRouter } from "next/navigation";
import React from "react";
const descSoundtrack = "A collection of Armored Core 4A game soundtracks";
const descGallery =
  "Collection of images and illustrations of the game Armored Core 4A";
const descWiki = "Lore & NEXTs Database";

export default function Dashboard() {
  const { push } = useRouter();
  const { setDescription } = store();
  return (
    <div className="max-w-6xl mx-auto pt-30 grid grid-cols-3">
      {/* TODO */}
      <div className="col-span-2"></div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <CButton
            variant={"default"}
            size={"default"}
            title="Gallery"
            onMouseEnter={() => setDescription(descGallery)}
          />
          <CButton
            variant={"default"}
            size={"default"}
            title="Soundtrack"
            onClick={() => push("/soundtrack")}
            onMouseEnter={() => setDescription(descSoundtrack)}
          />
          <CButton
            variant={"default"}
            size={"default"}
            title="Wiki"
            onMouseEnter={() => setDescription(descWiki)}
          />
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
    </div>
  );
}
