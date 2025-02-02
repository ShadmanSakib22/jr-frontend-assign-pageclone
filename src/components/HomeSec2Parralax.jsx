"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: backgroundRef.current.parentElement, // 👈 Trigger based on its parent container
        start: "top center", // 👈 Start when the top of the container reaches the center of the viewport
        end: "bottom center", // 👈 End when the bottom of the container reaches the center
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="absolute top-[-7%] inset-0 w-full h-full -z-10 overflow-hidden "
      style={{
        transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        animationFillMode: "forwards",
      }}
    >
      <Image
        src={"/backgrounds/home-sec2-an1.svg"}
        alt="background frame"
        width={346}
        height={319}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ParallaxBackground;
