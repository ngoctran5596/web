"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        style={{ background }}
        className="splash w-[200px]  h-[200px] absolute left-[20%] bottom-0 right-0 top-0"
      >
        <Image src={"/hear.png"} alt={"heart"} width={200} height={200} />
      </div>
      <motion.div className="card" variants={cardVariants}>
        <Image src={"/anhcuoi.png"} alt={"heart"} width={200} height={200} />
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

export default function ScrollViewImages() {
  return (
    <div>
      {food.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}
