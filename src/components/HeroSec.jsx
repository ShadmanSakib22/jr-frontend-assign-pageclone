import React from "react";
import PrimaryBtn from "@/components/PrimaryBtn";

const HeroSec = () => {
  return (
    <section className="home-hero-section lg:bg-clip-hero-container relative h-auto lg:h-[max(620px,_calc(92vh-49px))] w-full overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] text-white">
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 class="lg:max-w-max lg:whitespace-pre-line font-montserrat text-head-1">
              Embrace the future of finance
            </h1>
            <h5 className="max-w-[37rem] lg:mr-5 font-montserrat text-head-5">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </h5>
          </header>
          <PrimaryBtn width="244px" text="Contact Us" href="/contact" />
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
