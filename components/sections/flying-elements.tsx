"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FlyingElement } from "@/components/flying-element";
import { SearchWrapper } from "@/components/search-wrapper";

export function FlyingElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);

  return (
    <div ref={containerRef} className="min-h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <FlyingElement
          scrollYProgress={scrollYProgress}
          variant="shopify"
        />
        <FlyingElement
          scrollYProgress={scrollYProgress}
          variant="google"
          startX={-320}
          startY={-180}
          startRotate={-30}
        />
        <FlyingElement
          scrollYProgress={scrollYProgress}
          variant="snapchat"
          startX={-80}
          startY={-310}
          startRotate={15}
        />
        <FlyingElement
          scrollYProgress={scrollYProgress}
          variant="meta"
          startX={320}
          startY={-180}
          startRotate={25}
        />
        <motion.h2 
          style={{ scale }} 
          className="font-semibold text-8xl text-center max-w-4xl mx-auto tracking-[-0.02em] transition-transform duration-500 ease-out"
        >
          One AI that replaces the agency
        </motion.h2>
        <SearchWrapper scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

