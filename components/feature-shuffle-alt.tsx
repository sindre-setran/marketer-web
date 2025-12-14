"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { SearchWrapper } from "./search-wrapper";
import { TypingAnimation } from "./ui/typing-animation";
import { Paperclip, Plus } from "lucide-react";

export function FeatureShuffleAlt() {
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

  const TYPING_WORDS = [
    "What is my ROAS last 7 days?", 
    "Please create ad creatives for these products based on my current winning angles", 
    "Create a streetwear ad creative for my best selling product"
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
    <div className="h-[200vh] relative" ref={containerRef}>
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-sm z-10"></div>
        <Image
          className="absolute inset-0 h-full w-full object-cover scale-110"
          src="https://images.squarespace-cdn.com/content/v1/5f1ca67263feee4aa0b0d67a/4ba97ce0-d932-435c-b19e-342bd5b38059/johannelog-20.jpg?format=1500w"
          alt="Feature"
          width={1000}
          height={2000}
          priority
        />
      </div>
      <div className="relative sticky top-0 h-screen overflow-hidden z-20 px-8 py-20">
        <div className="h-full max-w-screen-xl mx-auto bg-background/90 relative overflow-hidden p-2 rounded-3xl backdrop-blur-md">
          <div className="flex gap-6 items-center h-full max-w-screen-xl mx-auto">
            <div className="basis-2/5 p-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentImage}
                  {...textAnimationSettings}
                  className={cn("max-w-md leading-tight text-3xl font-medium")}
                >
                  <h2 className="text-foreground">
                    {content[currentImage].heading}
                  </h2>
                  <p className="text-muted-foreground/80">
                    {content[currentImage].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="basis-3/5 h-full relative">
              <div className="w-full h-full relative overflow-hidden rounded-xl">
                {/* Background Image - fades out when currentImage changes */}
                <AnimatePresence>
                  {currentImage === 0 && (
                    <motion.div
                      key="background-image"
                      initial={{ opacity: 0, scale: 1.11 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.11 }}
                      transition={{ duration: 0.5, scale: { type: "spring" as const, stiffness: 100, damping: 30 } }}
                      className="absolute inset-0"
                    >
                      <Image 
                        className="w-full h-full object-cover" 
                        src="https://images.squarespace-cdn.com/content/v1/5f1ca67263feee4aa0b0d67a/0a8f0a23-b237-45ad-8e35-c4aaa1090d2c/Copyright+Johanne+Log-17.jpg?format=3000w" 
                        alt="Feature" 
                        width={2048} 
                        height={2560}
                        quality={100}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Magic wand and glow - appears when currentImage is 1 */}
                <AnimatePresence>
                  {currentImage === 1 && (
                    <>
                      <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
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
                        className="absolute w-full aspect-square bg-[#01040F] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl z-10"
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

                {/* UI overlay - transitions between the two states */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20 z-30 flex items-center justify-center"
                  >
                    {/*<Image 
                      src={currentImage === 0 ? "/img/ui-01.svg" : "/img/ui-02.svg"}
                      alt="Feature" 
                      width={2048} 
                      height={2560} 
                      className="max-w-lg mx-auto"
                    />*/}
                      <div className="shadow-lg max-w-lg w-full z-20 bg-card/70 backdrop-blur-sm p-1 rounded-[28px]">
                        <div className="bg-card rounded-[24px] p-4 min-h-[150px] flex flex-col justify-between shadow-lg">
                          <div className="text-foreground">
                            <TypingAnimation 
                              deleteSpeed={30} 
                              typeSpeed={60} 
                              words={TYPING_WORDS} 
                              loop 
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1.5 text-muted-foreground">
                              <button className="border border-foreground/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-accent transition-all duration-300">
                                <Paperclip className="size-4"/>
                              </button>
                              <button className="border border-foreground/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-accent transition-all duration-300">
                                <Plus className="size-4" />
                              </button>
                            </div>
                            <button className="bg-[#0C193A] text-white rounded-lg size-8 font-medium pb-0.5">↑</button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}