import React from "react";

export default function VideoBackground({ videoRef }: { videoRef: any }) {
  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={"/videos/title-menu.mp4"} type="video/mp4" />
      Browser anda belum support dawg
    </video>
  );
}
