"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AnimatedCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            AOS.refresh();
          }
        });
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector(".cards-container");
    if (target) observer.observe(target);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cards-container">
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {[
          {
            imgSrc: "/icons/fullSuiteSolutions-50x50.svg",
            title: "Full-suite solutions",
            description:
              "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
          },
          {
            imgSrc: "/icons/simplifyTheComplex-50x51.png",
            title: "Simplify the complex",
            description:
              "Simplify complex processes and optimize your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
          },
          {
            imgSrc: "/icons/cuttingEdgeTech-50x50.svg",
            title: "Cutting-edge tech",
            description:
              "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
          },
        ].map((item, index) => (
          <li
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className={`h-full space-y-[8px] md:space-y-6 bg-[#F8FCFF] rounded-[20px] p-6 md:p-8 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={item.imgSrc} alt={item.title} width={50} height={50} />
            <h4 className="font-montserrat text-blueText text-head-4">
              {item.title}
            </h4>
            <p className="text-body-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedCards;
