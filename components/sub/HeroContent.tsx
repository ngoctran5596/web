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
import Link from "next/link";

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-50 mt-40 flex w-full flex-row px-20"
    >
      <div className="bg m-auto h-full w-full flex-col">
        <motion.div
          className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] text-center opacity-[0.9]"
          variants={slideInFromTop}
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-[20px]">
            Hello vợ yêu của tui <span className="text-[#7042f8]">❤️</span>
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-[90%] flex-col gap-6 text-4xl font-bold text-white"
        >
          <span>
            Đây là
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              tình cảm{" "}
            </span>
            anh dành cho vợ mong là vợ sẽ thích
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[90%] text-lg text-gray-400"
        >
          Thời gian này thật khó cho cả 2 khi đã yêu xa gần 3 năm rồi.Anh mong
          sẽ nhanh được gần em và chăm sóc cho em. Yêu vợ nhất trên đời
        </motion.p>
        <motion.div variants={slideInFromLeft(1)}>
          <Link
            href="/dashboard"
            className="button-primary z-50 mx-auto max-w-[90%] cursor-pointer rounded-lg p-3 py-2 text-center text-white"
          >
            Bắt đầu nào!
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative z-0 flex h-full w-full items-center justify-center"
      >
        <Image src="/anhcuoi.png" alt="work icons" height={400} width={500} />
        <motion.div
          variants={slideInFromRight(0.8)}
          className="absolute bottom-4 right-[-20px] flex h-1/3 w-1/3"
        >
          <Image src="/teddy.png" alt="gau icons" height={200} width={200} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
