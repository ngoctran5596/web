import React from "react";
import HeroContent from "../sub/HeroContent";
import StarsCanvas from "./StarBackground";
import Navbar from "./Navbar";
import AudioPlayer from "../audio/AudioPlayer";

function Hero() {
  return (
    <div className="relative" id="hero">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-[-340px] -z-[1] h-full w-full rotate-180 object-cover"
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
