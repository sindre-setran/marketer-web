"use client";

import { motion, useTransform, cubicBezier, MotionValue } from "motion/react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Package, Images, Users, Target } from "lucide-react";

interface SearchWrapperProps {
  scrollYProgress: MotionValue<number>;
}

const TYPING_WORDS = [
  "What is my ROAS last 7 days?", 
  "Please create ad creatives for these products based on my current winning angles", 
  "Create a streetwear ad creative for my best selling product"
];

export function SearchWrapper({ scrollYProgress }: SearchWrapperProps) {
  const scale = useTransform(scrollYProgress, [0.45, 0.7], [0.8, 1], {
    ease: cubicBezier(0.83, 0, 0.17, 1),
  });
  
  const opacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1], {
    ease: cubicBezier(0.83, 0, 0.17, 1),
  });

  const filter = useTransform(scrollYProgress, [0.45, 0.6], ["blur(8px)", "blur(0px)"]);

  const ballOpacity = useTransform(scrollYProgress, [0.45, 1], [0, 1]);
  const ballBlur = useTransform(scrollYProgress, [0.45, 1], ["blur(8px)", "blur(32px)"], {
    ease: cubicBezier(0.83, 0, 0.17, 1),
  });
  const ballScale = useTransform(scrollYProgress, [0.45, 1], [0.5, 1.65]);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <motion.div
          style={{ filter: ballBlur, opacity: ballOpacity, scale: ballScale }}
          className="size-128"
        >
          <svg className="w-full h-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.4854 6.95178C40.0817 18.5927 49.3306 27.6847 61.1738 30.235C61.14 30.242 61.1061 30.2497 61.0723 30.2584C61.1005 30.2654 61.129 30.2701 61.1572 30.277L61.1973 30.2858L61.1572 30.2936C59.7835 30.5896 58.4381 30.9583 57.125 31.3961C48.0403 34.4211 40.5381 40.7219 36.0527 48.8912C34.408 51.8846 33.1698 55.1285 32.4053 58.5563L32.3955 58.5934L32.3887 58.5563C31.6242 55.1285 30.3858 51.8827 28.7393 48.8893C24.2486 40.7113 16.7356 34.4078 7.63672 31.3864C7.62088 31.3794 7.60495 31.3742 7.59082 31.3707C6.3026 30.9434 4.98178 30.5843 3.63477 30.2936L3.59668 30.2858L3.63477 30.277C3.66297 30.2718 3.68956 30.2654 3.71777 30.2584C3.68397 30.2497 3.65001 30.242 3.61621 30.235C9.53784 28.9598 14.8115 26.0487 18.9297 22.0026C23.0459 17.9548 26.0076 12.772 27.3066 6.95178C27.6666 8.5666 28.1551 10.134 28.7627 11.6403C29.7017 13.9819 30.9273 16.1806 32.3955 18.193C33.8638 16.1805 35.0886 13.9828 36.0312 11.6393C36.6371 10.1329 37.1254 8.56671 37.4854 6.95178Z" fill="#B5C1E3"/>
          </svg>
        </motion.div>
      </div>
      <motion.div 
        style={{ scale, opacity, filter }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg w-lg z-20 bg-card/70 backdrop-blur-sm p-1 rounded-[28px]"
      >
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
              <button className="border border-foreground/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
                <Package className="size-5" strokeWidth={1.5} />
              </button>
              <button className="border border-foreground/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
                <Images className="size-4" />
              </button>
              <button className="border border-foreground/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
                <Users className="size-4" />
              </button>
              <button className="border border-foreground/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
                <Target className="size-4" />
              </button>
            </div>
            <button className="bg-[#0C193A] text-white rounded-xl size-8 font-medium pb-0.5">↑</button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
