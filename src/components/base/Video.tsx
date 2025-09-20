"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

type VideoProps = {
  src: string;
} & Omit<React.ComponentProps<"video">, "src">;

export const Video: React.FC<VideoProps> = ({ src, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [paused]);

  return (
    <div className="relative h-full">
      <video ref={videoRef} muted loop onClick={() => setPaused(!paused)} {...props}>
        <source src={src} type="video/mp4" />
        <track kind="captions" />
      </video>

      <div className="group pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {paused && (
            <div className="flex flex-col items-center justify-center rounded-full bg-black/50 p-4 transition-opacity duration-100">
              <span className="icon-[mdi--play] h-8 w-8" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
