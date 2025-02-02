"use client";
import React from "react";
import CountUp from "react-countup";

const statsData = [
  {
    number: 20,
    prefix: ">",
    description: "Years of Experience",
  },
  {
    number: 40,
    suffix: "+",
    description: "Financial Institutions",
  },
  {
    number: 200,
    suffix: "m",
    prefix: ">",
    description: "Customers Each",
  },
];

const HomeSec5Stats = () => {
  return (
    <div className="lg:flex items-center justify-between max-lg:space-y-6 xl:mx-28">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="flex lg:flex-col items-center border-dashed border-blueHighlight max-lg:border-b max-lg:justify-between max-lg:pb-4"
        >
          <h2 className="text-[48px] md:text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blueMain via-blueMain to-[#0057BB] inline-block text-transparent bg-clip-text">
            {stat.prefix}
            <CountUp
              end={stat.number}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce={true}
              scrollSpyDelay={200}
              scrollSpyOffset={100}
            />
            {stat.suffix}
          </h2>
          <p className="px-2 sm:px-0 text-right lg:text-center text-[#151D2F] max-lg:text-link lg:text-lg lg:mt-[19px]">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomeSec5Stats;
