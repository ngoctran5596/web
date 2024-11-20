"use client";
import Image from "next/image";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
interface AnniversaryProps {
  _id: string;
  name: string;
  image: Array<string>;
  description: string;
}

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageGrid = ({
  images,
  setSelectedId,
  description,
}: {
  images: Array<string>;
  setSelectedId: (id: { url: string; description: string } | undefined) => void;
  description: string;
}) => {
  return (
    <div className="relative col-span-8 overflow-hidden rounded-lg">
      <div className="grid h-[500px] grid-cols-2 overflow-hidden">
        <div className="relative h-full w-full bg-slate-700">
          <div className="relative z-40 h-full w-full">
            <Image
              onClick={() => {
                setSelectedId({
                  url: images[0],
                  description: description,
                });
              }}
              src={images[0]}
              alt={images[0]}
              style={{ objectFit: "cover" }}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div
          className={`relative grid h-full w-full grid-cols-${
            images.slice(1).length
          } bg-slate-700`}
        >
          {images.slice(1).map((url: string) => (
            <div key={url} className="relative h-full w-full">
              <Image
                src={url}
                onClick={() => {
                  setSelectedId({
                    url: url,
                    description: description,
                  });
                }}
                alt={url}
                style={{ objectFit: "cover" }}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EditableDescription = ({
  item,
  inputValue,
  setInputValue,
  isLoading,
  setIsLoading,
  setEdit,
  isEdit,
}: {
  item: AnniversaryProps;
  inputValue: string;
  setInputValue: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setEdit: (id: string | undefined) => void;
  isEdit: string | undefined;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmitDescription = async () => {
    setIsLoading(true);
    if (!inputValue) {
      setEdit(undefined); // Optionally close the edit mode
      setIsLoading(false);
      return;
    }
    const updatedDescription = inputValue;
    await fetch(
      `https://server-wheat-eta-51.vercel.app/api/v1/category/update/${item._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: inputValue,
        }), // Gửi mô tả mới
      },
    );
    mutate(
      "https://server-wheat-eta-51.vercel.app/api/v1/category",
      (data) => {
        return data.map((d: AnniversaryProps) =>
          d._id === item._id
            ? {
                ...d,
                description: updatedDescription,
              }
            : d,
        );
      },
      false,
    );
    setEdit(undefined); // Optionally close the edit mode
    setIsLoading(false);
    setInputValue("");
  };

  return (
    <div className="flex h-full items-end">
      <div className="relative w-full rounded-lg border-2 border-white bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-black">{item.name}</h1>
        {isEdit === item._id ? (
          <>
            <textarea
              value={inputValue || item.description}
              onChange={handleChange}
              className="z-50 w-full rounded border border-gray-300 p-2 text-lg text-black"
            />
            <div className="p-2">
              <button
                onClick={onSubmitDescription}
                className="z-50 mt-2 rounded bg-blue-500 p-4 text-white"
                disabled={isLoading}
                style={{
                  pointerEvents: isLoading ? "none" : "auto",
                }}
              >
                {isLoading ? "Đang chỉnh sửa..." : "Hoàn tất chỉnh sửa"}
              </button>
            </div>
          </>
        ) : (
          <p className="text-lg text-black">
            {item.description}
            <button
              onClick={() => setEdit(item._id)}
              className="ml-2 text-blue-500"
            >
              ✏️
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

const Anniversary = () => {
  const [selectedId, setSelectedId] = useState<
    { url: string; description: string } | undefined
  >(undefined);

  const [isEdit, setEdit] = useState<string | undefined>();

  const [inputValue, setInputValue] = useState("");

  const [isLoadingUpdate, setIsLoading] = useState(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://server-wheat-eta-51.vercel.app/api/v1/category",
    fetcher,
  );

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
      className="relative z-20 mt-[200px] flex min-h-screen items-center overflow-hidden"
      style={{ transform: "scale(0.9)" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ border: "none", outline: "none" }}
        className="absolute left-0 top-0 -z-10 h-[100%] w-[100%] object-cover opacity-50"
      >
        <source src="/video3.mp4" type="video/mp4" />
      </video>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="relative z-20 h-[500px] w-full items-center justify-center !overflow-visible"
      >
        {data.map((item: AnniversaryProps) => {
          return (
            <SwiperSlide key={item._id} className="cursor-pointer">
              <motion.section
                className="w-full bg-white py-8"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="container mx-auto px-2">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    <ImageGrid
                      images={item.image}
                      setSelectedId={setSelectedId}
                      description={item.description}
                    />
                    <motion.div
                      className="col-span-12 hidden md:col-span-4 md:block"
                      style={{ marginLeft: "-10%", marginBottom: "-20px" }}
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.2 }}
                    >
                      <EditableDescription
                        item={item}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        isLoading={isLoadingUpdate}
                        setIsLoading={setIsLoading}
                        setEdit={setEdit}
                        isEdit={isEdit}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <AnimatePresence>
        {selectedId?.url && (
          <motion.div
            key="modal"
            initial={{ scale: 0 }} // Bắt đầu với kích thước nhỏ
            animate={{ scale: 1 }} // Phóng to đến kích thước bình thường
            exit={{ scale: 0 }} // Khi thoát, trở về kích thước nhỏ
            transition={{
              ease: "linear",
              duration: 0.5, // Thay đổi thời gian nếu cần
            }}
            onClick={() => setSelectedId(undefined)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="rounded-lg bg-white p-4">
              <Image
                src={selectedId.url}
                alt="Selected"
                width={500}
                height={300}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Anniversary;
