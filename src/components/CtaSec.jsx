import React from "react";
import PrimaryBtn from "@/components/PrimaryBtn";
import CtaMotion from "@/components/CtaMotion";

const CtaSec = () => {
  return (
    <section className="relative h-[60vh] lg:h-[530px] w-full text-white bg-cta-style ">
      <div className="container flex flex-col w-full items-start justify-center h-full relative z-10  mt-6">
        <h2 className="mb-6 font-montserrat text-head-2">Legacy no longer</h2>
        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <div className="w-full lg:w-[195px] ">
          <PrimaryBtn
            text="Contact Us"
            href="https://www.linkedin.com/in/shadman-sakib-3b8bb3298/"
          />
        </div>
      </div>
      <CtaMotion />
    </section>
  );
};

export default CtaSec;
