import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedImageProps extends React.ComponentProps<typeof Image> {
  index: number;
}

const HeaderDashboard: React.FC = () => {
  // Add state for controlling animations
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(true);
  }, []);

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: Math.random() * 0.5 + custom * 0.2,
        duration: 0.5,
      },
    }),
  };

  const AnimatedImage = ({ src, index, alt, ...props }: AnimatedImageProps) => (
    <motion.div
      initial="hidden"
      animate={imagesLoaded ? "visible" : "hidden"}
      variants={imageVariants}
      custom={index}
      className="h-full w-full"
    >
      <Image
        src={src}
        alt={alt}
        {...props}
        className="h-full w-full object-cover"
        style={{ borderRadius: 7 }}
      />
    </motion.div>
  );

  return (
    <div className="mb-[100px] h-auto w-full bg-cover bg-center">
      <div
        className="aspect-video h-[400px] w-full bg-cover bg-center md:h-[700px]"
        style={{
          backgroundImage: `url('./bgBaoChau.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="grid h-auto grid-cols-1 gap-3 bg-cover bg-center p-4 md:h-full md:grid-cols-4"
        style={{ backgroundImage: `url('./bgDashboard.jpg')` }}
      >
        <div className="col-span-1 flex h-full items-center justify-center p-2">
          <motion.div className="w-1/2 md:w-full">
            <AnimatedImage
              src="https://i.ibb.co/5rDwzHq/received-1250234749075454.jpg"
              width={1000}
              height={800}
              alt="Description of the image"
              index={0}
              quality={100}
            />
          </motion.div>
        </div>
        <div className="col-span-1">
          <div className="flex h-full flex-row items-center justify-center gap-3 p-2 md:flex-col">
            <div className="w-1/2 md:w-full">
              <AnimatedImage
                src="https://i.ibb.co/LvfT2F6/IMG-20220907-222009-mr1662596389893.jpg"
                width={1000}
                height={800}
                alt="Description of the image"
                index={1}
                quality={100}
              />
            </div>
            <div className="w-1/2 md:w-full">
              <AnimatedImage
                src="https://i.ibb.co/6bvW08L/IMG-20220908-125441.jpg"
                width={1024}
                height={600}
                alt="Description of the image"
                index={2}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <AnimatedImage
            src="https://i.ibb.co/kmwXTVq/IMG-4759-mh1662646678369.jpg"
            width={1024}
            height={600}
            alt="Description of the image"
            className="h-full w-full object-cover md:h-2/3"
            index={3}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
