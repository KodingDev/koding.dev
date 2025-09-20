import type React from "react";
import { Video } from "./Video";

type MediaEmbedProps = {
  src: string;
  className?: string;
} & Omit<React.ComponentProps<"iframe"> & React.ComponentProps<"video">, "src">;

const YOUTUBE_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?/;
const MP4_REGEX = /(\/[^/]+)+\.mp4$/;

export const MediaEmbed: React.FC<MediaEmbedProps> = ({ src, ...props }) => {
  const youtubeMatch = src.match(YOUTUBE_REGEX);

  if (youtubeMatch) {
    return (
      <iframe
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${youtubeMatch[1]}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props}
      />
    );
  }

  if (MP4_REGEX.test(src)) {
    return <Video src={src} {...props} />;
  }

  return null;
};
