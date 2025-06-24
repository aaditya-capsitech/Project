import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !circleRef.current) return;

    gsap.fromTo(
      circleRef.current,
      { scale: 1 },
      {
        scale: 20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",  
          end: "bottom top",  
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-white"
    >
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 w-[100px] h-[100px] rounded-full bg-[#E6E6FA] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <div className="text-2xl mb-4 text-blue-900">★★★★★</div>
        <blockquote className="italic text-lg text-gray-800 mb-6 leading-relaxed">
          "Journey has changed how I communicate with my partners. It allows
          organizations to be onboarded with our platform quickly. I like that I
          can send a company one link and track the users and what content they
          are consuming. This gives me 4 hours plus a week back."
        </blockquote>
        <p className="font-semibold text-gray-900">Taylor Nielsen</p>
        <p className="text-sm text-gray-700">Partnerships at Builder.io</p>
      </div>
    </section>
  );
};

export default Testimonial;
