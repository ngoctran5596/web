import React from "react";
import HeroContent from "../sub/HeroContent";
import StarsCanvas from "./StarBackground";
import Navbar from "./Navbar";
import AudioPlayer from "../audio/AudioPlayer";

function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full" id="hero">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <StarsCanvas />
      <Navbar />
      <AudioPlayer src="/audiobg.mp3" autoPlay={false} />
    </div>
  );
}

export default Hero;
