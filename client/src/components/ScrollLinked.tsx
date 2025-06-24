import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video3d from "./Video3d";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollLinked() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !circleRef.current || !barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        scale: 20,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(barRef.current, {
        scaleX: 1,
        opacity: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative z-0 overflow-hidden">
      <div
        ref={barRef}
        className="absolute top-0 left-0 right-0 h-2 bg-white origin-left z-10 scale-x-0 opacity-100 pointer-events-none"
      />

      {/*(INSIDE wrapper) */}
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[#E6E6FA] z-0 pointer-events-none"
        style={{ scale: 0.2, opacity: 1 }}
      />

      {/* Actual scroll section */}
      <div className="relative z-10">
        <section className="text-center py-20 px-4">
          <h1 className="text-5xl font-bold text-blue-900 leading-tight">
            One link. All your content. <br />
            <span className="text-gray-800">Delivered like it was built </span>
            <span className="text-green-600">just for them.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-gray-600">
            Use what you already have—videos, decks, PDFs—and deliver it in one
            story-first link that buyers will actually engage with.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-900">
              Create a Journey
            </button>
            <button className="bg-white border px-6 py-2 rounded-md shadow hover:bg-gray-100">
              Check an Example
            </button>
          </div>
          <Video3d />
        </section>


        <section className="py-16 bg-white text-center">
          <h2 className="text-lg font-medium text-gray-700 mb-8">
            Trusted by 1,000s of B2B teams
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto">
            <img src="/logos/nextbillion.png" className="h-12 object-contain" />
            <img src="/logos/snapattack.png" className="h-12 object-contain" />
            <img src="/logos/fsg.png" className="h-10 object-contain" />
            <img src="/logos/jones.png" className="h-10 object-contain" />
            <img src="/logos/lempire.png" className="h-12 object-contain" />
            <img src="/logos/longangle.png" className="h-8 object-contain" />
            <img src="/logos/heart.png" className="h-10 object-contain" />
            <img src="/logos/teraleap.png" className="h-8 object-contain" />
            <img src="/logos/trustlayer.png" className="h-8 object-contain" />
            <img src="/logos/onsched.png" className="h-4 object-contain" />
          </div>
        </section>
      </div>
    </div>
  );
}
