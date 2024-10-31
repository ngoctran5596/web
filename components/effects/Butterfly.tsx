"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ButterflyProps {
  x: number;
  y: number;
}

const Butterfly = ({ x, y }: ButterflyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: x + (Math.random() > 0.5 ? 100 : -100),
        y: y - 100,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="absolute z-50 pointer-events-none"
    >
      <Image
        src="/hear.png" // Đảm bảo bạn có hình ảnh bướm trong thư mục public
        alt="butterfly"
        width={30}
        height={30}
        className="w-auto h-auto"
      />
    </motion.div>
  );
};

export default Butterfly;
