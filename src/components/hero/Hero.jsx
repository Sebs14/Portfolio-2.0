"use client";
import React from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

const Hero = () => {
  let words = ["Frontend Developer", "Gamer", "Computer Science Engineer"];
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  gsap.registerPlugin(TextPlugin);
  useEffect(() => {
    if (ref.current && ref2.current && ref3.current) {
      const text = new SplitType(ref.current);
      gsap.fromTo(
        text.chars,
        {
          y: 112,
        },
        {
          y: 0,
          stagger: 0.07,
          duration: 1,
          onComplete: () => masterTL.play(),
        }
      );

      let masterTL = gsap.timeline({ repeat: -1 }).pause();

      words.forEach((word, index) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
        tl.to(ref2.current, {
          duration: 2,
          text: word,
        });
        masterTL.add(tl);
      });

      gsap.fromTo(
        ref3.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0,
          duration: 0.8,
          ease: "power2.inOut",
          repeat: -1,
        }
      );
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-fit">
        <h1
          ref={ref}
          className="poligon text-3xl sm:text-4xl md:text-7xl font-noto-sans font-black text-white "
        >
          SEBASTIAN.FLORES
        </h1>
        <div className="flex w-full items-center justify-center">
          <span
            ref={ref2}
            className="text-1xl sm:text-3xl md:text-4xl font-noto-sans font-semibold text-white"
          ></span>
          <div
            ref={ref3}
            className="mt-1 sm:mt-0 h-4 w-[2px] sm:h-10 sm:w-1 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
