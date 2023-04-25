import React from "react";
import { Item } from "../fetchers/useFetcherFolder";
import Hls from "hls.js";

const MediaPlayer: React.FC<{ media: Item }> = ({ media }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const hls = new Hls();
    hls.loadSource(media.source);
    if (!!videoRef.current) {
      hls.attachMedia(videoRef.current);
    }
  }, [media.source]);

  return <video ref={videoRef} controls />;
};

export default MediaPlayer;
