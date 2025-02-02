"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const slideData = [
  {
    tag: "Customer focused",
    title: "Purpose-built financial services",
    image: "/images/customer-focused.jpg",
    content: {
      highlight:
        "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      description:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    },
  },
  {
    tag: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    image: "/images/agile-adaptable.jpg",
    content: {
      highlight:
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      description:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    },
  },
  {
    tag: "Compliance ready",
    title: "Manage compliance with ease",
    image: "/images/compliance-ready.png",
    content: {
      highlight:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      description:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    },
  },
  {
    tag: "Secure and safe",
    title: "Highly secure and safe",
    image: "/images/secure-safe.jpg",
    content: {
      highlight:
        "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      description:
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    },
  },
];

const HomeSec4Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      {/* Desktop Tabs */}
      <div className="hidden md:flex gap-3 flex-wrap justify-center items-center  text-blueMain text-body-0 drop-shadow-none py-[32px]">
        {slideData.map((slide, index) => (
          <button
            key={index}
            className={`px-[28px] lg:px-[38px] xl:px-[48px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300  hover:bg-[#F5FAFF]  ${
              activeIndex === index ? "bg-blueHighlight " : "bg-inherit"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {slide.tag}
          </button>
        ))}
      </div>

      <div
        className="w-full pt-[24px] md:pt-0"
        style={{
          filter: "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
        }}
      >
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={600}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="relative"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-[32px] p-[24px] lg:p-[64px] rounded-[20px] mb-5 lg:h-[550px] bg-white">
                  <div className="space-y-6 md:space-y-8">
                    <header className="space-y-4 md:space-y-8">
                      <h6 className="text-head-6 text-blueMain font-montserrat">
                        {slide.tag}
                      </h6>
                      <h3 className="text-head-3 text-blueText font-montserrat">
                        {slide.title}
                      </h3>
                    </header>
                    <div className="block md:hidden h-[150px] relative">
                      <Image
                        src={slide.image}
                        alt={slide.tag}
                        fill
                        className="object-cover w-full h-full rounded-[8px]"
                      />
                    </div>
                    <article className="text-body-1">
                      <p>
                        <strong>{slide.content.highlight}</strong>
                      </p>
                      <br />
                      <p>{slide.content.description}</p>
                    </article>
                  </div>
                  <div className="hidden md:block h-[425px] relative">
                    <Image
                      src={slide.image}
                      alt={slide.tag}
                      fill
                      className="object-cover w-full h-full rounded-[16px]"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default HomeSec4Swiper;
