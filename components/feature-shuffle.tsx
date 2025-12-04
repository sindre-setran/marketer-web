"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FeatureShuffle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const animationSettings = {
    initial: { opacity: 0, y: 0, scale: 0.85, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, y: 0, scale: 1.05, filter: "blur(6px)" },
    transition: { 
      opacity: { duration: 0.5, ease: "easeOut" as const }, 
      y: { type: "spring" as const, duration: 0.7, bounce: 0 }, 
      scale: { type: "spring" as const, duration: 0.7, bounce: 0 },
      filter: { duration: 0.5, ease: "easeOut" as const }
    }
  } as const;

  const textAnimationSettings = {
    initial: { opacity: 0, y: 16, filter: "blur(2px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -16, filter: "blur(2px)" },
    transition: { 
      opacity: { duration: 0.2, ease: "easeOut" as const }, 
      y: { type: "spring" as const, duration: 0.6, bounce: 0 },
      filter: { duration: 0.2, ease: "easeOut" as const }
    }
  } as const;

  const content = [
    {
      heading: "It does the heavy lifting for you",
      description: "All your marketing data, unified and understood by AI"
    },
    {
      heading: "And the seriously heavy lifting",
      description: "Your data becomes context for actionable guidance"
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Swap image at 50% scroll
      if (latest >= 0.5 && currentImage === 0) {
        setCurrentImage(1);
      } else if (latest < 0.5 && currentImage === 1) {
        setCurrentImage(0);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, currentImage]);

  return (
    <motion.div 
      ref={containerRef} 
      className="h-[200vh] transition-colors duration-500 relative bg-muted"
      /*animate={{ 
        backgroundColor: currentImage === 1 ? '#01040F' : 'var(--muted)' 
      }}
      transition={{
        backgroundColor: {
          duration: 0.5,
          delay: 0.25,
          ease: "easeOut",
        }
      }}*/
    >
      <div className="relative sticky top-0 h-screen overflow-hidden">
        <AnimatePresence>
          {currentImage === 1 && (
            <motion.div
              className="absolute w-full aspect-square -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              initial={{
                opacity: 0,
                scale: 0,
                backgroundColor: "#01040F",
              }}
              animate={{
                opacity: 1,
                scale: 2,
                backgroundColor: "#01040F",
              }}
              exit={{
                opacity: 0,
                scale: 1,
                backgroundColor: "#01040F",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                scale: {
                  type: "spring" as const,
                  stiffness: 100,
                  damping: 30,
                }
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-6 items-center h-screen max-w-screen-xl mx-auto px-8">
          <div className="basis-1/2">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentImage}
                {...textAnimationSettings}
                className={cn("max-w-md space-y-4", currentImage === 1 && "dark")}
              >
                <h2 className="text-5xl font-semibold text-balance text-foreground leading-tight">
                  {content[currentImage].heading}
                </h2>
                <p className="text-foreground/50 text-lg">
                  {content[currentImage].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="basis-1/2 relative">
            <AnimatePresence mode="popLayout">
              {currentImage === 0 ? (
                <motion.div
                  key="image"
                  {...animationSettings}
                  className="relative"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20">
                    <Image 
                      src="/img/ui-01.svg" 
                      alt="Feature" 
                      width={2048} 
                      height={2560} 
                    />
                  </div>
                  <Image 
                    className="w-full rounded-3xl aspect-[4/5]" 
                    src="/img/feature-01.jpg" 
                    alt="Feature" 
                    width={2048} 
                    height={2560} 
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="filled-div"
                  {...animationSettings}
                  className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#020A22] to-[#010614] relative"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20">
                    <Image 
                      src="/img/ui-02.svg" 
                      alt="Feature" 
                      width={2048} 
                      height={2560} 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}