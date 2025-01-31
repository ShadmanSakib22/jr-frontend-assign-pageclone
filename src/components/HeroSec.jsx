import React from "react";
import Image from "next/image";
import PrimaryBtn from "@/components/PrimaryBtn";

const HeroSec = () => {
  return (
    <>
      <section className="home-hero-section lg:bg-clip-hero-container relative h-auto lg:h-[max(620px,_calc(92vh-49px))] w-full overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] text-white">
        <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
          <div className="h-fit lg:flex-[65] xl:flex-[75]">
            <header className="max-w-[37rem] xl:max-w-2xl space-y-4 lg:space-y-5 mb-[32px]">
              <h1 className="lg:max-w-max lg:whitespace-pre-line font-montserrat text-head-1">
                Embrace the future of finance
              </h1>
              <h5 className="max-w-[37rem] lg:mr-5 font-montserrat text-head-5">
                Reimagine financial services with AnyTech’s open platform,
                distributed banking solution that powers transformation
              </h5>
            </header>

            <div className="w-full lg:w-[244px] mb-[32px] lg:mb-0 ">
              <PrimaryBtn text="Reach Out to Us" href="/contact" />
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
          <Image
            src="/backgrounds/hero-bg.jpg"
            alt="hero-bg"
            fill
            className="h-full w-full object-cover scale-[1.15]"
          />

          <div className="hero-tr-gradient-overlay"></div>
        </div>
      </section>
      <div className="block lg:hidden overflow-hidden bg-clip-hero-image-mobile translate-y-[-20%] -mb-[10%]">
        <Image
          src="/backgrounds/hero-bg.jpg"
          alt="hero-bg"
          width={979}
          height={653}
          className=" object-cover scale-[1.5] "
        />
      </div>
    </>
  );
};

export default HeroSec;
