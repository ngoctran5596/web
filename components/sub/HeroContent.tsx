"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          variants={slideInFromTop}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[20px]">
            Hello vợ yêu của tui <span className="text-[#7042f8]">❤️</span>
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Đây là
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              tình cảm{" "}
            </span>
            anh dành cho vợ mong là vợ sẽ thích
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Thời gian này thật khó cho cả 2 khi đã yêu xa gần 3 năm rồi.Anh mong
          sẽ nhanh được gần em và chăm sóc cho em. Yêu vợ nhất trên đời
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/dashboard"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Bắt đầu nào!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-end items-center relative "
      >
        <Image src="/anhcuoi.png" alt="work icons" height={400} width={500} />
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex absolute bottom-4 right-[-100px]"
        >
          <Image src="/teddy.png" alt="gau icons" height={200} width={200} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
