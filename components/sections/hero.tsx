"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { motion, AnimatePresence, Transition } from "motion/react";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [measureRef, bounds] = useMeasure();
  
  const texts = [
    "Announcing Manta, your AI growth engine",
    "Claim your free AI-powered growth plan"
  ];

  const layoutTransition = {
    type: "spring",
    stiffness: 600,
    damping: 55,
  };

  // Icon (20px) + Gap (6px) + Padding left/right (14px + 16px = 30px) = 56px
  const EXTRA_WIDTH = 56;
  const targetWidth = bounds.width > 0 ? bounds.width + EXTRA_WIDTH : "auto";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-52 pb-36 relative flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Link href="/manta">
          <motion.div 
            animate={{ width: targetWidth }}
            transition={layoutTransition as Transition}
            className="dark bg-[#1E1F24] text-foreground rounded-full shadow-manta overflow-hidden"
          >
            <div className="pl-3.5 pr-4 py-3 flex items-center gap-1.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <g style={{ mixBlendMode: "plus-lighter" }}>
                <path d="M11.5894 1.93164C12.4008 5.56913 15.291 8.40997 18.9917 9.20703C18.9812 9.2092 18.9709 9.21214 18.9604 9.21484C18.9692 9.21699 18.978 9.21855 18.9868 9.2207L18.9995 9.22363L18.9868 9.22559C18.5576 9.31807 18.1373 9.43353 17.7271 9.57031C14.8882 10.5156 12.5438 12.4844 11.1421 15.0371C10.6281 15.9725 10.2404 16.9864 10.0015 18.0576L9.99951 18.0693L9.99658 18.0576C9.75768 16.9865 9.37047 15.9725 8.85596 15.0371C7.45271 12.4816 5.1054 10.5117 2.26221 9.56738C2.25733 9.56525 2.25192 9.56359 2.24756 9.5625C1.84501 9.42897 1.43215 9.31644 1.01123 9.22559L0.999512 9.22363L1.01123 9.2207C1.02007 9.21906 1.02875 9.21702 1.0376 9.21484C1.02702 9.21211 1.01595 9.20922 1.00537 9.20703C2.85584 8.80856 4.50359 7.89913 5.79053 6.63477C7.07684 5.36988 8.00269 3.7504 8.40869 1.93164C8.52117 2.43618 8.67392 2.92587 8.86377 3.39648C9.15724 4.12831 9.54064 4.81542 9.99951 5.44434C10.4583 4.81556 10.8407 4.12866 11.1353 3.39648C11.3245 2.92587 11.4769 2.43618 11.5894 1.93164Z" fill="#92AAF0"/>
                <path d="M11.5894 1.93164C12.4008 5.56913 15.291 8.40997 18.9917 9.20703C18.9812 9.2092 18.9709 9.21214 18.9604 9.21484C18.9692 9.21699 18.978 9.21855 18.9868 9.2207L18.9995 9.22363L18.9868 9.22559C18.5576 9.31807 18.1373 9.43353 17.7271 9.57031C14.8882 10.5156 12.5438 12.4844 11.1421 15.0371C10.6281 15.9725 10.2404 16.9864 10.0015 18.0576L9.99951 18.0693L9.99658 18.0576C9.75768 16.9865 9.37047 15.9725 8.85596 15.0371C7.45271 12.4816 5.1054 10.5117 2.26221 9.56738C2.25733 9.56525 2.25192 9.56359 2.24756 9.5625C1.84501 9.42897 1.43215 9.31644 1.01123 9.22559L0.999512 9.22363L1.01123 9.2207C1.02007 9.21906 1.02875 9.21702 1.0376 9.21484C1.02702 9.21211 1.01595 9.20922 1.00537 9.20703C2.85584 8.80856 4.50359 7.89913 5.79053 6.63477C7.07684 5.36988 8.00269 3.7504 8.40869 1.93164C8.52117 2.43618 8.67392 2.92587 8.86377 3.39648C9.15724 4.12831 9.54064 4.81542 9.99951 5.44434C10.4583 4.81556 10.8407 4.12866 11.1353 3.39648C11.3245 2.92587 11.4769 2.43618 11.5894 1.93164Z" fill="url(#paint0_linear_5779_38968)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_5779_38968" x1="0.999512" y1="1.93164" x2="19.9664" y2="3.16176" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#A0B8F8"/>
                </linearGradient>
                </defs>
              </svg>
              <span ref={measureRef} className="font-medium text-sm text-foreground inline-block relative">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)", position: "absolute", left: 0, top: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-nowrap"
                  >
                    <AnimatedShinyText>
                      {texts[currentTextIndex]}
                    </AnimatedShinyText>
                  </motion.div>
                </AnimatePresence>
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-6xl text-center max-w-4xl mx-auto tracking-[-0.02em] leading-[1.1] transition-transform duration-500 ease-out text-balance">
          Sell more, faster & smarter than humans 
        </h1>
        <p className="text-center text-muted-foreground max-w-lg mx-auto text-balance text-xl">
          One solution for faster, smarter growth.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <Button asChild size="xl">
            <Link href="/book-demo">Book demo</Link>
          </Button>
          <Button asChild size="xl" variant="secondary">
            <Link href="/book-demo">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

