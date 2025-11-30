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
  const ballBlur = useTransform(scrollYProgress, [0.45, 1], ["blur(24px)", "blur(128px)"]);
  const ballScale = useTransform(scrollYProgress, [0.45, 1], [0.5, 1]);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <motion.div
          style={{ filter: ballBlur, opacity: ballOpacity, scale: ballScale }}
          className="bg-[#9CB5DF] blur-xl rounded-full size-128"
        ></motion.div>
      </div>
      <motion.div 
        style={{ scale, opacity, filter }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg w-lg z-20 bg-[#F1F4FE]/70 backdrop-blur-sm p-1 rounded-[28px]"
      >
        <div className="bg-white rounded-[24px] p-4 min-h-[150px] flex flex-col justify-between shadow-lg">
          <div className="text-[#10214C]">
            <TypingAnimation 
              deleteSpeed={30} 
              typeSpeed={60} 
              words={TYPING_WORDS} 
              loop 
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 text-[#10214C]/60">
              <button className="border border-[#285FF6]/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
                <Package className="size-5" strokeWidth={1.5} />
              </button>
              <button className="border border-[#285FF6]/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
                <Images className="size-4" />
              </button>
              <button className="border border-[#285FF6]/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
                <Users className="size-4" />
              </button>
              <button className="border border-[#285FF6]/10 rounded-lg size-8 flex items-center justify-center cursor-pointer hover:bg-[#285FF6]/10 transition-all duration-300">
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
