import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video3D = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { rotateX: 90 },
        {
          rotateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-16 flex justify-center perspective-[1000px]">
      <div
        ref={containerRef}
        className="shadow-2xl rounded-lg w-4/5 max-w-4xl transform-gpu"
      >
        <video
          src="https://framerusercontent.com/assets/eh0Asrp9YhQpKB0KudH4eU8o.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Video3D;
