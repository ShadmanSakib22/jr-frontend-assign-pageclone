"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const CtaMotion = () => {
  const ctaBackgroundRef = useRef(null);
  const ctaForegroundRef = useRef(null);
  const ctaMobileRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slide-in animation when in viewport
            gsap.from(ctaBackgroundRef.current, {
              opacity: 0,
              x: -50,
              y: -50,
              duration: 1.5,
              ease: "power2.out",
            });

            gsap.from(ctaForegroundRef.current, {
              opacity: 0,
              x: 50,
              duration: 1.5,
              ease: "power2.out",
            });

            gsap.from(ctaMobileRef.current, {
              opacity: 0,
              x: 50,
              y: -100,
              duration: 1.5,
              ease: "power2.out",
            });

            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 } // Triggers when 20% of element is visible
    );

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Mouse move animation
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      gsap.to(ctaBackgroundRef.current, {
        x: -moveX * 7,
        y: -moveY * 7,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(ctaForegroundRef.current, {
        x: moveX * 7,
        y: moveY * 7,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="hidden lg:block absolute top-[-2%] left-[0] inset-0 w-full h-full overflow-hidden">
        <Image
          ref={ctaBackgroundRef}
          src="/backgrounds/cta-dark.svg"
          alt="Background"
          aria-hidden="true"
          fill
          className="object-cover scale-[120%] absolute z-[2]"
          priority
        />
        <Image
          ref={ctaForegroundRef}
          src="/backgrounds/cta-light.svg"
          alt="Foreground"
          aria-hidden="true"
          fill
          className="object-cover scale-[120%] z-[3] "
          priority
        />
      </div>

      <div className="block lg:hidden overflow-hidden absolute w-[100%] h-[100%] top-0 left-0 blur-sm ">
        <Image
          ref={ctaMobileRef}
          src="/backgrounds/cta-mobile.svg"
          alt="Background"
          aria-hidden="true"
          fill
          className="object-cover "
          priority
        />
      </div>
    </div>
  );
};

export default CtaMotion;
