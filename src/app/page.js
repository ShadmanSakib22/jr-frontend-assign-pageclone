import Image from "next/image";
import HeroSec from "@/components/HeroSec";
import SecBreak from "@/components/SecBreak";
import HomeSec2Image from "@/components/HomeSec2Image";
import HomeSec3Cards from "@/components/HomeSec3Cards";
import HomeSec3Swiper from "@/components/HomeSec3Swiper";
import HomeSec4Swiper from "@/components/HomeSec4Swiper";
import HomeSec5Stats from "@/components/HomeSec5Stats";
import AssociatedFirms from "@/components/AssociatedFirms";
import CtaSec from "@/components/CtaSec";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSec />

      <section className="container mt-[62px]">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-[15px] relative">
          {/*Text*/}
          <div className="space-y-4 md:space-y-6 ">
            <h6 className="text-head-6 uppercase text-blueMain font-montserrat">
              POWERING THE FUTURE OF FINANCE
            </h6>
            <h2 className="whitespace-pre-line text-head-2 text-blueText font-montserrat">
              Uncovering new ways to delight customers
            </h2>
            {/*Image*/}
            <div className="block md:hidden">
              <HomeSec2Image />
            </div>
            <div className="lg:pt-2 ">
              <div className="text-body-1">
                <p>
                  <strong>
                    AnyTech is revolutionising financial technology by
                    introducing innovative and real-time transaction account
                    processing capabilities, specifically designed for retail
                    financial services.
                  </strong>
                </p>
              </div>
              <br />
              <div className="text-body-1">
                <p>
                  Our modern approach surpasses traditional banking and card
                  processing systems, empowering you with the most advanced
                  technology for lasting success.
                </p>
              </div>
            </div>
          </div>
          {/*Image*/}
          <div className="hidden md:block">
            <HomeSec2Image />
          </div>
        </div>
      </section>

      <SecBreak />

      <section className="container md:mb-[128px]">
        <header className="space-y-4 md:space-y-6 text-center">
          <h6 className="text-head-6 uppercase text-blueMain font-montserrat">
            OUR PHILOSOPHY
          </h6>
          <h2 className="whitespace-pre-line text-head-2 text-blueText font-montserrat">
            Human-centred innovation
          </h2>
        </header>
        <div className="py-[30px]">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/home-sec3-2206x727.png"
            />
            <Image
              src="/images/home-sec3-1710x1965.png"
              alt="Image"
              width={1710}
              height={1965}
              className="w-full h-full object-contain"
            />
          </picture>
        </div>
        {/*Animated Cards - slide up by 20% when first visible*/}
        <div className="hidden md:block">
          <HomeSec3Cards />
        </div>
        {/*Swiper Cards for mobile */}
        <div className="block md:hidden">
          <HomeSec3Swiper />
        </div>
      </section>

      <div className="block md:hidden">
        <SecBreak />
      </div>

      <section className="container">
        <header className="text-center space-y-4 md:space-y-6">
          <h6 className="text-head-6 uppercase text-blueMain font-montserrat">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="whitespace-pre-line text-head-2 text-blueText font-montserrat">
            The future of finance
          </h2>
        </header>
        <HomeSec4Swiper />
      </section>

      <SecBreak />

      <section className="mb-4">
        <div className="container">
          <h6 className="text-head-6 text-blueMain font-montserrat text-center pb-10 md:pb-8">
            TRUSTED BY THE BEST
          </h6>
          <HomeSec5Stats />
        </div>
        <AssociatedFirms />
      </section>

      <CtaSec />
    </main>
  );
}
