"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  autoPlay?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, autoPlay = false }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src={src} loop />
      <button
        onClick={togglePlay}
        className=" text-white font-bold py-2 px-4 rounded"
      >
        {isPlaying ? (
          "Pause"
        ) : (
          <Image src={"/music.png"} width={40} height={40} alt="music" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
