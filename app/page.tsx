"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Transition, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { FlyingElement } from "@/components/flying-element";
import { SearchWrapper } from "@/components/search-wrapper";
import { Marquee } from "@/components/ui/marquee"
import LogoContainer from "@/components/logoContainer";
import { LightRays } from "@/components/ui/light-rays"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerTransition = {
    type: "spring",
    stiffness: 600,
    damping: 55,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);

  return (
    <div>
      <main>
        <header className="fixed top-4 left-0 right-0 flex justify-center z-50">
          <motion.div
            layout
            transition={headerTransition as Transition}
            className={cn("flex w-full mx-auto p-1 items-center justify-between bg-white/80 backdrop-blur-sm rounded-full transition-shadow duration-1000 ease-out",
            isScrolled ? "max-w-2xl shadow-lg" : "max-w-screen-lg shadow-none")}
          >
            <motion.div 
            transition={headerTransition as Transition} layout className="py-1 px-2.5">
              <Link href="/">
                <Logo />
              </Link>
            </motion.div>
            <motion.nav layout className="font-medium text-[15px]">
              <ul className="flex items-center gap-6">
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/resources">Resources</Link>
                </li>
              </ul>
            </motion.nav>
            <motion.div transition={headerTransition as Transition} layout className="flex items-center gap-1">
              <Button asChild size="lg" variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/book-demo">Book demo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </header>
        <div className="pt-56 pb-64 space-y-5 relative">
          <h1 className="font-semibold text-6xl text-center max-w-4xl mx-auto tracking-[-0.02em] leading-[1.1] transition-transform duration-500 ease-out">
            AI Native Growth Operating System for E-commerce
          </h1>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mt-4 font-[500]">
            Replace costly agencies and scattered tools with one AI-powered system built to help your brand scale profitably.
          </p>
        </div>
        <div className="mb-40">
          <Marquee>
            <LogoContainer logo="db" />
            <LogoContainer logo="moniker" />
            <LogoContainer logo="sweetProtection" />
          </Marquee>
        </div>
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
        <div className="min-h-screen bg-gray-100"></div>
      </main>
    </div>
  );
}
