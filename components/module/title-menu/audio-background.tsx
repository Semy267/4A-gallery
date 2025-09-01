import React from "react";

export default function AudioBackground({ audioRef }: { audioRef: any }) {
  return (
    <audio loop ref={audioRef} className="absolute">
      <source src="/sounds/sound-title.mp3" type="audio/mpeg" />
      Browser anda belum support dawg
    </audio>
  );
}
