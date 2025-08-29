"use client";
import CImage from "@/components/shared/custome/c-image";
import { Title } from "@/lib/image";
import Image from "next/image";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Page() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlay, setIsPlay] = React.useState(false);
  const [isWarning, setIsWarning] = React.useState(true);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (isPlay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlay(!isPlay);
  };
  return (
    <AnimatePresence>
      {isWarning ? (
        <div className="relative w-screen h-screen overflow-hidden flex justify-between flex-col items-center"></div>
      ) : (
        <div className="relative w-screen h-screen overflow-hidden">
          <video
            ref={videoRef}
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={"/videos/title-menu.mp4"} type="video/mp4" />
            Browser anda belum support dawg
          </video>
          <audio autoPlay loop ref={audioRef} muted>
            <source src="/sounds/sound-title.mp3" type="audio/mpeg" />
            Browser anda belum support dawg
          </audio>
          <div className="z-20 w-full h-full flex justify-between flex-col items-center">
            <div className="w-[1200px] z-20">
              <Image
                src={Title}
                width={1200}
                height={1200}
                alt="title"
                className=" object-contain"
              />
            </div>
            <button className="z-20 text-white" onClick={handlePlay}>
              mulai
            </button>
            <h1></h1>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
