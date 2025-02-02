"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const firmImages = [
  "/firms/BankOfChengde.png",
  "/firms/BankOfChina.png",
  "/firms/BankOfShanghai.png",
  "/firms/CGBank.png",
  "/firms/ChinaCiticBank.png",
  "/firms/OneBank.png",
  "/firms/PinganBank.png",
  "/firms/PostalSavingsBOC.png",
  "/firms/SeaBank.png",
  "/firms/ShangdongCommercialBank.png",
  "/firms/VipFubon.svg",
  "/firms/XiamenInternational.png",
  "/firms/xwBank.png",
  "/firms/SPDBank.png",
  "/firms/DCScardCenter.png",
];

const AssociatedFirms = () => {
  return (
    <>
      <div className="container mt-32 grid grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-[34px] max-md:hidden">
        {firmImages.map((image, index) => (
          <div key={index} className="relative aspect-[16/9]">
            <Image
              src={image}
              alt={`associated-firm-${index + 1}`}
              fill
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden overflow-visible mt-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            360: {
              slidesPerView: 2.7,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          slidesPerView={2.5}
        >
          {firmImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-20">
                <Image
                  src={image}
                  alt={`associated-firm-${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AssociatedFirms;
