import React from "react";
import Image from "next/image";
import HomeSec2Parralax from "@/components/HomeSec2Parralax";

const HomeSec2Image = () => {
  return (
    <div className="my-[60px] md:my-0 relative h-fit lg:text-clip ">
      <div className="mx-auto w-[76%]">
        <Image
          src="/images/home-sec2.png"
          alt="POWERING THE FUTURE OF FINANCE"
          width={954}
          height={1157}
          className="w-full h-full object-cover"
          style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
        />
      </div>
      <div>
        <div className="absolute top-[10%] right-[2.4%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl motion-translate-8s">
          <Image
            src={"/icons/bank-ico-116x115.svg"}
            alt="Banking"
            width={116}
            height={115}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl motion-translate-6s">
          <Image
            src={"/icons/investment-ico-89x88.svg"}
            alt="Investment"
            width={89}
            height={88}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute top-[20%] left-[5.5%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl motion-translate-5s">
          <Image
            src={"/icons/card-ico-74x75.svg"}
            alt="Investment"
            width={74}
            height={75}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <HomeSec2Parralax />
    </div>
  );
};

export default HomeSec2Image;
