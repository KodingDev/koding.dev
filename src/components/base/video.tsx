"use client";

import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaTimeDisplay,
  MediaTimeRange,
} from "media-chrome/react";
import type React from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  src: string;
  className?: string;
};

const chromeVars = {
  "--media-primary-color": "var(--primary)",
  "--media-secondary-color": "transparent",
  "--media-text-color": "white",
  "--media-control-hover-background": "rgba(255,255,255,0.1)",
  "--media-font-family": "var(--font-sans)",
  "--media-range-track-background": "rgba(255,255,255,0.2)",
  "--media-control-background": "transparent",
  "--media-range-thumb-background": "white",
} as CSSProperties;

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className }) => (
  <MediaController
    style={chromeVars}
    className={cn("overflow-clip rounded-md", className)}
  >
    <video slot="media" muted loop playsInline preload="metadata" className="w-full">
      <source src={src} type="video/mp4" />
      <track kind="captions" />
    </video>

    <MediaControlBar className="m-1.5 rounded-md bg-black/60 backdrop-blur-sm">
      <MediaPlayButton className="p-2" />
      <MediaTimeRange className="flex-1 px-1" />
      <MediaTimeDisplay showDuration className="px-2 text-xs" />
      <MediaMuteButton className="p-2" />
    </MediaControlBar>
  </MediaController>
);
