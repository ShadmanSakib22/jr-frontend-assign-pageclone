import React from "react";
import Image from "next/image";

const PrimaryBtn = ({ text = "Input Text", href = "#" }) => {
  return (
    <a
      className={`w-[full] py-[14px] md:py-[15.5px] rounded-[3px] bg-orange shadow-button-primary text-link flex gap-2 items-center justify-center hover:gap-4 transition-all duration-500 ease-in-out`}
      href={href}
    >
      <div>{text}</div>
      <Image
        src="/icons/ChevronRightWhite.svg"
        alt="ChevronRightWhite"
        width={6}
        height={9}
      />
    </a>
  );
};

export default PrimaryBtn;
