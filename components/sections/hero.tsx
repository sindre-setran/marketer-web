"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { motion, AnimatePresence, Transition, LayoutGroup, Variants } from "motion/react";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TextAnimate } from "@/components/ui/text-animate";

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [measureRef, bounds] = useMeasure();
  
  const texts = [
    "Announcing Manta, your AI growth engine",
    "Claim your free AI-powered growth plan"
  ];

  const words = ["online", "beauty", "fashion", "furniture", "wellness"];

  const layoutTransition = {
    type: "spring",
    stiffness: 600,
    damping: 55,
  };

  // Entry animation configuration
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: "30%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.75,
        ease: "easeOut",
        y: { type: "spring", stiffness: 400, damping: 55 },
      },
    },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-48 sm:pt-52 pb-24 sm:pb-32 px-4 sm:px-8 relative flex flex-col items-center gap-3 sm:gap-4"
    >
      <motion.h1 
        variants={itemVariants as Variants}
        className="font-semibold text-4xl sm:text-6xl text-center max-w-4xl mx-auto tracking-[-0.02em] leading-[1.1] transition-transform duration-500 ease-out text-balance order-2"
      >
        <LayoutGroup>
          <span>
            <motion.span 
              layout="position"
              transition={layoutTransition as Transition}
              className="inline-block"
            >
              Sell more
            </motion.span>
            {" "}
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={currentWordIndex}
                layout
                transition={layoutTransition as Transition}
                className="inline-block relative"
              >
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  className="inline-block"
                  startOnView={false}
                >
                  {words[currentWordIndex]}
                </TextAnimate>
              </motion.span>
            </AnimatePresence>{" "}
            <motion.span 
              layout="position"
              transition={layoutTransition as Transition}
              className="inline-block"
            >
              faster
            </motion.span>
          </span>
        </LayoutGroup>
        {" "} & smarter than humans
      </motion.h1>
        <motion.p 
          variants={itemVariants as Variants}
          className="text-center text-muted-foreground max-w-lg mx-auto text-balance text-lg order-3 leading-snug"
        >
          <span>Join 1500+ Leading Shopify</span>
          <span className="mx-1.5 -translate-y-0.5 inline-block">
            <svg className="inline" width="22" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8717 4.7133C19.8552 4.5933 19.75 4.52689 19.6632 4.51958C19.5765 4.51234 17.7413 4.37632 17.7413 4.37632C17.7413 4.37632 16.4667 3.11097 16.3268 2.97092C16.1869 2.83095 15.9135 2.87352 15.8074 2.90475C15.7918 2.90936 15.5289 2.99048 15.0941 3.12503C14.6684 1.89988 13.917 0.774015 12.5951 0.774015C12.5586 0.774015 12.521 0.775494 12.4835 0.777631C12.1075 0.280453 11.6418 0.0644531 11.2396 0.0644531C8.16026 0.0644531 6.68911 3.91391 6.22785 5.87007C5.0313 6.24084 4.18127 6.50443 4.0727 6.53854C3.40481 6.74804 3.38368 6.76908 3.29598 7.39843C3.22998 7.87489 1.48242 21.3896 1.48242 21.3896L15.0998 23.941L22.4781 22.3448C22.4781 22.3448 19.888 4.8333 19.8717 4.7133ZM14.3415 3.3578L13.1892 3.71443C13.1897 3.63322 13.1901 3.55333 13.1901 3.46596C13.1901 2.70454 13.0844 2.09147 12.9148 1.60547C13.5959 1.69095 14.0495 2.46593 14.3415 3.3578ZM12.0699 1.75645C12.2592 2.23095 12.3824 2.91191 12.3824 3.83081C12.3824 3.87782 12.382 3.92081 12.3815 3.96429C11.6322 4.1964 10.8179 4.4484 10.0018 4.70122C10.4601 2.93278 11.319 2.07864 12.0699 1.75645ZM11.155 0.890398C11.2879 0.890398 11.4218 0.935522 11.5499 1.02371C10.5631 1.4881 9.50524 2.65769 9.05853 4.99333L7.17749 5.57591C7.70072 3.7944 8.94322 0.890398 11.155 0.890398Z" fill="#95BF46"/>
              <path d="M19.6643 4.51985C19.5776 4.51261 17.7424 4.37659 17.7424 4.37659C17.7424 4.37659 16.4678 3.11124 16.3279 2.97119C16.2756 2.91908 16.205 2.89237 16.1312 2.88086L15.1016 23.9411L22.4793 22.3451C22.4793 22.3451 19.8891 4.83357 19.8728 4.71357C19.8563 4.59357 19.7512 4.52716 19.6643 4.51985Z" fill="#5E8E3E"/>
              <path d="M12.5953 8.59678L11.6855 11.303C11.6855 11.303 10.8884 10.8776 9.91129 10.8776C8.47885 10.8776 8.40677 11.7765 8.40677 12.0031C8.40677 13.2391 11.6287 13.7126 11.6287 16.6078C11.6287 18.8856 10.184 20.3523 8.23606 20.3523C5.89852 20.3523 4.70312 18.8975 4.70312 18.8975L5.32902 16.8295C5.32902 16.8295 6.55778 17.8845 7.59463 17.8845C8.27214 17.8845 8.54773 17.351 8.54773 16.9613C8.54773 15.349 5.90444 15.2771 5.90444 12.6278C5.90444 10.398 7.50488 8.24023 10.7355 8.24023C11.9803 8.24023 12.5953 8.59678 12.5953 8.59678Z" fill="white"/>
            </svg>
          </span>
          <span>brands growing with AI today.</span>
        </motion.p>
        <motion.div 
          variants={itemVariants as Variants}
          className="flex items-center gap-2 pt-2 order-4"
        >
          <Button asChild size="xl">
            <Link href="/book-demo">Book demo</Link>
          </Button>
          <Button asChild size="xl" variant="secondary">
            <Link href="/book-demo">Get started</Link>
          </Button>
        </motion.div>
      <motion.div 
        variants={itemVariants as Variants}
        className="hidden sm:flex flex-col items-center gap-2 order-1 mb-3"
      >
        <Link href="/manta">
          <motion.div 
            animate={{ width: targetWidth }}
            transition={layoutTransition as Transition}
            className="dark manta-dark bg-background text-foreground rounded-full shadow-manta overflow-hidden"
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
      </motion.div>
    </motion.div>
  );
}

