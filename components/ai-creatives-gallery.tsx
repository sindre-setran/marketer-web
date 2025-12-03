"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  index: number;
  isVisible: boolean;
}

function AnimatedImage({ src, alt, index, isVisible }: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{
        duration: 0.5,
        delay: isVisible ? index * 0.1 : 0,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Image 
        className="aspect-[4/5] rounded-xl max-w-[200px]" 
        src={src} 
        alt={alt} 
        width={400} 
        height={500} 
      />
    </motion.div>
  );
}

interface MarqueeRowProps {
  children: React.ReactNode;
  reverse?: boolean;
  repeat?: number;
  rowIndex: number;
}

function MarqueeRow({ children, reverse, repeat = 3, rowIndex }: MarqueeRowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRow = rowRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRow) {
      observer.observe(currentRow);
    }

    return () => {
      if (currentRow) {
        observer.unobserve(currentRow);
      }
    };
  }, []);

  return (
    <div ref={rowRef}>
      <Marquee reverse={reverse} repeat={repeat}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { isVisible } as any);
          }
          return child;
        })}
      </Marquee>
    </div>
  );
}

export function AICreativesGallery() {
  const { setTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Debounce theme changes for better performance
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            // Switch to dark when 50% visible
            if (entry.intersectionRatio >= 0.5) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }, 50); // Small delay to prevent rapid fire changes
        });
      },
      {
        threshold: 0.5, // Only track 50% visibility
      }
    );

    const currentSection = sectionRef.current;
    
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      clearTimeout(timeoutId);
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [setTheme]);

  return (
    <section ref={sectionRef} className="bg-background text-foreground py-24">
      <div className="mb-12 px-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center w-full gap-3 text-center text-balance">
          <h2 className="font-semibold text-4xl leading-tight max-w-lg">Leading AI Creatives that scale brands</h2>
          <p className="text-muted-foreground max-w-lg">Equiping brand owners with a Creative volume to outperform the competiton, or supercharges inhouse Creative teams</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-xs bg-gradient-to-r from-background to-transparent z-10 transition-colors duration-500"></div>
        <div className="absolute inset-y-0 right-0 w-xs bg-gradient-to-l from-background to-transparent z-10 transition-colors duration-500"></div>
        <MarqueeRow reverse repeat={3} rowIndex={0}>
          <AnimatedImage src="/img/ad/ad_01.jpg" alt="AI Creatives" index={0} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_02.jpg" alt="AI Creatives" index={1} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_03.jpg" alt="AI Creatives" index={2} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_04.jpg" alt="AI Creatives" index={3} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_05.jpg" alt="AI Creatives" index={4} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_06.jpg" alt="AI Creatives" index={5} isVisible={false} />
        </MarqueeRow>
        <MarqueeRow repeat={3} rowIndex={1}>
          <AnimatedImage src="/img/ad/ad_07.jpg" alt="AI Creatives" index={0} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_08.jpg" alt="AI Creatives" index={1} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_09.jpg" alt="AI Creatives" index={2} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_10.jpg" alt="AI Creatives" index={3} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_11.jpg" alt="AI Creatives" index={4} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_12.jpg" alt="AI Creatives" index={5} isVisible={false} />
        </MarqueeRow>
        <MarqueeRow reverse repeat={3} rowIndex={2}>
          <AnimatedImage src="/img/ad/ad_13.jpg" alt="AI Creatives" index={0} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_14.jpg" alt="AI Creatives" index={1} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_15.jpg" alt="AI Creatives" index={2} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_16.jpg" alt="AI Creatives" index={3} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_17.jpg" alt="AI Creatives" index={4} isVisible={false} />
          <AnimatedImage src="/img/ad/ad_18.jpg" alt="AI Creatives" index={5} isVisible={false} />
        </MarqueeRow>
      </div>
    </section>
  );
}

