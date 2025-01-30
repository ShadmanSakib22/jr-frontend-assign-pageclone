import React from "react";

const PrimaryBtn = ({ width = "244px", text = "Enter Text", href = "#" }) => {
  return (
    <a
      className={`py-[14px] md:py-[15.5px] w-[${width}] rounded-[3px] bg-orange shadow-button-primary text-link flex gap-2 items-center justify-center hover:gap-4 transition-all duration-500 ease-in-out`}
      href={href}
    >
      <div>{text}</div>
      <div className="text-[11px] leading-[23px] font-semibold">&#62;</div>
    </a>
  );
};

export default PrimaryBtn;
