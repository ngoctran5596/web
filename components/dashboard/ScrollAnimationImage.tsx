"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const DataImages = [
  {
    src: "https://i.ibb.co/vsn2bdv/IMG-20240225-131810.jpg",
    alt: "Tổng tài và công chúa",
    description:
      "Khi anh và em ngồi đây nhìn vào máy ảnh, Thì chúng ta biết được chúng ta đã làm được đã trải qua hết vui,buồn,giận,hờn trong tình yêu.Tiếp tục sẽ như nào nhỉ?????????",
  },
  {
    src: "https://i.ibb.co/LPC3qq0/IMG-20240225-131814.jpg",
    alt: "Tổng tài và công chúa",
    description:
      "Thật biết ơn vì đã có em bên anh, nụ cười em tựa như là có ánh nắng trong mùa đông lạnh lẽo vậy.",
  },
  {
    src: "https://i.ibb.co/qkr56t9/IMG-20240225-131850.jpg",
    alt: "Tổng tài và công chúa",
    description:
      "Nụ cười của kẻ chiến thắng và nụ cười của cô công chúa hạnh phúc",
  },
  {
    src: "https://i.ibb.co/V3XsQ9Q/IMG-20240308-161401.jpg",
    alt: "Công chúa của đời anh",
    description:
      "Trúc xinh trúc đứng một mình, Châu xinh châu đứng một mình cũng xinh.LOVE",
  },
  {
    src: "https://i.ibb.co/7K5XWrL/IMG-20240308-162704.jpg",
    alt: "Ánh mắt của kẻ sy tình",
    description: "Trong mắt anh, em là người đẹp nhất",
  },
  {
    src: "https://i.ibb.co/dth6cZb/IMG-20240308-163357.jpg",
    alt: "Ánh mắt của kẻ sy tình",
    description:
      "Có những thứ chỉ cần nhìn vào ảnh là có thể hiểu sự hạnh phúc của họ, ANH ĐANG RẤT HẠNH PHÚC",
  },
  {
    src: "https://i.ibb.co/RTXSmLk/MEITU-20241109-174649364.jpg",
    alt: "Ánh mắt của kẻ sy tình",
    description:
      "Trên đời có nhiều người cười đẹp, nhưng em là người cười đẹp nhất",
  },
  {
    src: "https://i.ibb.co/6rHPWCR/received-271864012624791.jpg",
    alt: "Hụt hẫng",
    description:
      "Anh xin lỗi vợ yêu đám cưới còn nhiều chỗ sơ xài thiếu bánh kem của vợ. Hẹn vợ 1 ngày nào đó đám cưới 10 năm nhé vợ yêu. Anh sẽ bù ở bãi biển như anh đã từng hứa. Nhìn lại anh lại khóc vì không được như vợ mong muốn. Xin lỗi em thật nhiều.",
  },
  {
    src: "https://i.ibb.co/QmKQL77/received-783094680400265.jpg",
    alt: "Hụt hẫng",
    description:
      "Cảm ơn em đã chọn anh, anh sẽ cố gắng làm được hết những gì anh hứa.",
  },
];

const ScrollAnimationImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Tách effect xử lý audio setup
  useEffect(() => {
    audioRef.current = new Audio("/giacmongaycuoi.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []); // Chỉ chạy một lần khi mount

  // Effect riêng xử lý scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop;
      const sectionHeight = scrollContainer.clientHeight;
      const newIndex = Math.round(scrollPosition / sectionHeight);

      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < DataImages.length
      ) {
        setActiveIndex(newIndex);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div
      className="relative h-[700px] w-full overflow-hidden"
      ref={containerRef}
    >
      {/* Phần hình ảnh cố định bên trái */}
      <div className="hidden h-[700px] w-1/2 items-center justify-center border-8 border-white lg:flex">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex h-full w-full px-10"
        >
          <Image
            src={DataImages[activeIndex].src}
            alt={DataImages[activeIndex].alt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
      <div className="absolute left-0 right-0 top-0 h-[700px] w-full lg:left-3/4">
        <div className="flex h-[700px] w-full items-center">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0px",
              paddingBottom: "177.778%",
            }}
          >
            <iframe
              allow="fullscreen; autoplay"
              height="100%"
              src="https://streamable.com/e/7m2842?autoplay=1&muted=1"
              width="100%"
              style={{
                border: "none",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
              className="z-20 aspect-video w-full object-fill lg:h-[700px] lg:w-1/4"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Phần description có thể scroll bên phải */}
      <div
        ref={scrollContainerRef}
        className="absolute right-0 top-0 hidden h-[700px] w-1/2 overflow-y-auto lg:block"
        style={{
          scrollSnapType: "y mandatory",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {DataImages.map((image, index) => (
          <div
            key={index + "boxright"}
            className="flex h-[700px] w-1/2 items-center border-8 border-pink-500 bg-cover bg-center bg-no-repeat px-4"
            style={{
              scrollSnapAlign: "start",
              backgroundImage: "url('/Cardwedding.png')",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h2 className="mb-4 text-2xl font-bold">{image.alt}</h2>
              <p className="text-gray-600">{image.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimationImage;
