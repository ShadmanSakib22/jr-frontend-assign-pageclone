import React from "react";
import Image from "next/image";

const SecBreak = () => {
  return (
    <div className="my-[64px] md:my-[24px] w-full min-h-[60px] max-h-[240px] ">
      <Image
        src={"/backgrounds/polygonbreak.svg"}
        alt="..."
        width={1920}
        height={240}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SecBreak;
