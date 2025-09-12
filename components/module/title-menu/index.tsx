"use client";
import { Title } from "@/lib/image";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import store from "@/store";
import VideoBackground from "./video-background";
import AudioBackground from "./audio-background";
import Menu from "./menu";

export default function TitleMenu() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isWarning, setIsWarning] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const { setOpenOverlay, closeOverlay } = store();
  const dialog = () => {
    setOpenOverlay({
      id: "CONFRIMATION",
      title: "Disclaimer",
      isClose: false,
      disableOutsideInteraction: true,
      data: {
        onConfirmation: () => {
          setIsWarning(false);
          setIsOpen(false);
          closeOverlay();
          setTimeout(() => {
            audioRef.current?.play();
          }, 1);
          setTimeout(() => {
            videoRef.current?.play();
          }, 15000);
        },
      },
    });
  };
  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      dialog();
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isWarning ? (
        <div className="relative w-screen h-screen overflow-hidden flex justify-between flex-col items-center"></div>
      ) : (
        <motion.div
          className="relative w-screen h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <VideoBackground videoRef={videoRef} />
          <AudioBackground audioRef={audioRef} />
          <Menu Title={Title} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
