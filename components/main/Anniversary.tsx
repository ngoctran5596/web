"use client";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
interface AnniversaryProps {
  _id: string;
  name: string;
  image: string;
  description: string;
}

import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Anniversary = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false, // true nếu bạn chỉ muốn trigger một lần
    amount: 0.2, // Kích hoạt khi 20% component hiển thị
    margin: "100px 0px 100px 0px",
  });

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/api/v1/category",
    fetcher
  );
  console.log("isInView", isInView);
  React.useEffect(() => {
    if (isInView) {
      console.log("User đã scroll đến Anniversary section!");
      // Thêm các hành động khác khi user scroll đến đây
    }
  }, [isInView]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data || data.length === 0) return <div>No data available</div>;
  return (
    <motion.section
      id="Anniversary"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.5,
        margin: "0px 0px 0px 0px",
      }}
      transition={{ duration: 0.8 }}
      className="mt-[200px] min-h-screen flex items-center relative overflow-hidden"
      style={{ transform: "scale(0.9)" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ border: "none", outline: "none" }}
        className="absolute top-0 left-0  w-[100%] h-[100%] object-cover -z-10  opacity-50"
      >
        <source src="/video3.mp4" type="video/mp4" />
      </video>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/20 -z-10" /> */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full relative z-20 !overflow-visible justify-center items-center h-[500px] "
      >
        {data.map((item: AnniversaryProps) => {
          return (
            <SwiperSlide key={item._id} className="cursor-pointer">
              <motion.section
                className="w-full py-8 bg-white"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="container mx-auto px-2">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8 relative">
                      <div className="relativ w-full bg-white rounded-lg  h-[500px] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <motion.div
                      className="col-span-4 h-[500px]"
                      style={{ marginLeft: "-10%", marginBottom: "-20px" }}
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.2 }}
                    >
                      <div className="h-full flex items-end">
                        <div className=" relative p-6 rounded-lg shadow-lg border-2 border-white bg-white w-full">
                          <h1 className="text-black text-2xl mb-6 font-bold">
                            {item.name}
                          </h1>
                          <p className="text-black text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default Anniversary;
