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
            <>
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2"
                initial={{
                  opacity: 0,
                  filter: "blur(32px)",
                  top: "100%",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  top: "0%",
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(32px)",
                  top: "100%",
                  rotate: 180,
                }}
                transition={{
                  type: "spring" as const,
                  stiffness: 100,
                  damping: 30,
                  rotate: { duration: 0 },
                }}
              >
                <svg className="w-full h-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.4854 6.95178C40.0817 18.5927 49.3306 27.6847 61.1738 30.235C61.14 30.242 61.1061 30.2497 61.0723 30.2584C61.1005 30.2654 61.129 30.2701 61.1572 30.277L61.1973 30.2858L61.1572 30.2936C59.7835 30.5896 58.4381 30.9583 57.125 31.3961C48.0403 34.4211 40.5381 40.7219 36.0527 48.8912C34.408 51.8846 33.1698 55.1285 32.4053 58.5563L32.3955 58.5934L32.3887 58.5563C31.6242 55.1285 30.3858 51.8827 28.7393 48.8893C24.2486 40.7113 16.7356 34.4078 7.63672 31.3864C7.62088 31.3794 7.60495 31.3742 7.59082 31.3707C6.3026 30.9434 4.98178 30.5843 3.63477 30.2936L3.59668 30.2858L3.63477 30.277C3.66297 30.2718 3.68956 30.2654 3.71777 30.2584C3.68397 30.2497 3.65001 30.242 3.61621 30.235C9.53784 28.9598 14.8115 26.0487 18.9297 22.0026C23.0459 17.9548 26.0076 12.772 27.3066 6.95178C27.6666 8.5666 28.1551 10.134 28.7627 11.6403C29.7017 13.9819 30.9273 16.1806 32.3955 18.193C33.8638 16.1805 35.0886 13.9828 36.0312 11.6393C36.6371 10.1329 37.1254 8.56671 37.4854 6.95178Z" fill="#01040F"/>
                </svg>
              </motion.div>
              <motion.div
                className="absolute w-full aspect-square bg-[#01040F] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                initial={{
                  opacity: 0,
                  scale: 0,
                  translateY: "100%",
                }}
                animate={{
                  opacity: 1,
                  scale: 2,
                  translateY: "0%",
                }}
                exit={{
                  opacity: 0,
                  scale: 1,
                  translateY: "100%",
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
            </>
          )}
        </AnimatePresence>
        <div className="flex gap-6 items-center h-screen max-w-screen-xl mx-auto px-4">
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