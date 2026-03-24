import type React from "react";
import { cn } from "@/lib/utils";
import { VideoPlayer } from "./video";

type MediaEmbedProps = {
  src: string;
  className?: string;
  title?: string;
};

const YOUTUBE_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?/;
const MP4_REGEX = /\.mp4$/i;

export const MediaEmbed: React.FC<MediaEmbedProps> = ({ src, className, title }) => {
  const youtubeMatch = src.match(YOUTUBE_REGEX);

  if (youtubeMatch) {
    return (
      // oxlint-disable-next-line jsx-a11y/iframe-has-title, react/iframe-missing-sandbox
      <iframe
        title={title ?? "YouTube video player"}
        src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
        className={cn("border-none", className)}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (MP4_REGEX.test(src)) {
    return <VideoPlayer src={src} className={className} />;
  }

  return null;
};
