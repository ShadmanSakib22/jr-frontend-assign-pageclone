"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const HeroMotion = () => {
  const backgroundRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    // Slide-in animation on first load
    gsap.from(backgroundRef.current, {
      opacity: 0,
      x: -50,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(foregroundRef.current, {
      opacity: 0,
      x: 50,

      duration: 1,
      ease: "power2.out",
    });

    // Mouse move animation
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate movement based on mouse position
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      // Animate background with opposite movement
      gsap.to(backgroundRef.current, {
        x: -moveX * 5,
        y: -moveY * 5,
        duration: 0.5,
        ease: "power2.out",
      });

      // Animate foreground with regular movement
      gsap.to(foregroundRef.current, {
        x: moveX * 3,
        y: moveY * 3,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:block absolute top-[-4px] left-[-4px] inset-0 w-full h-full">
        <Image
          ref={backgroundRef}
          src="/backgrounds/hero-an-bg.svg"
          alt="Background"
          aria-hidden="true"
          fill
          className="object-fill absolute  z-[2]"
          priority
        />
        <Image
          ref={foregroundRef}
          src="/backgrounds/hero-an-fg.svg"
          alt="Foreground"
          aria-hidden="true"
          fill
          className="object-fill z-[3]"
          priority
        />
      </div>

      <div className="block lg:hidden overflow-hidden absolute top-[-18%] left-[9%] inset-0 w-full h-full">
        {/* TODO mobile spotlight - animate slide from top right to bottom left */}
        <Image
          ref={foregroundRef}
          src="/backgrounds/hero-an-mobile.svg"
          alt="Foreground"
          aria-hidden="true"
          fill
          className="object-fill "
          priority
        />
      </div>
    </>
  );
};

export default HeroMotion;
