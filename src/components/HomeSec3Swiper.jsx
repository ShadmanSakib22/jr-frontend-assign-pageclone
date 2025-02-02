"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomeSec3Swiper = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1.5}
        autoplay={false}
        className="mySwiper [&_.swiper-wrapper]:!grid [&_.swiper-wrapper]:grid-cols-[repeat(3,1fr)]"
      >
        <SwiperSlide className="h-full">
          <div className="h-full space-y-[8px] md:space-y-6 bg-[#F8FCFF] rounded-[20px] p-6 md:p-8">
            <Image
              src={"/icons/fullSuiteSolutions-50x50.svg"}
              alt="Full Suite Solutions"
              width={50}
              height={50}
            />
            <h4 className="font-montserrat text-blueText text-head-4">
              Full-suite solutions
            </h4>
            <p className="text-body-1 ">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className="h-full space-y-[8px] md:space-y-6 bg-[#F8FCFF] rounded-[20px] p-6 md:p-8">
            <Image
              src={"/icons/simplifyTheComplex-50x51.png"}
              alt="Simplify the complex"
              width={50}
              height={50}
            />
            <h4 className="font-montserrat text-blueText text-head-4">
              Simplify the complex
            </h4>
            <p className="text-body-1 ">
              Simplify complex processes and optimise your financial operations
              by leveraging the power of AI, Blockchain, Cloud Computing, and
              Big Data.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className="h-full space-y-[8px] md:space-y-6 bg-[#F8FCFF] rounded-[20px] p-6 md:p-8">
            <Image
              src={"/icons/cuttingEdgeTech-50x50.svg"}
              alt="Cutting-edge tech"
              width={50}
              height={50}
            />
            <h4 className="font-montserrat text-blueText text-head-4">
              Cutting-edge tech
            </h4>
            <p className="text-body-1 ">
              We seamlessly combine cutting-edge technologies, resulting in an
              unparalleled fintech experience for financial institutions.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSec3Swiper;
