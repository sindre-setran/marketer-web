"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Transition } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
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

  return (
    <header className="sticky top-4 left-0 right-0 flex justify-center z-50">
      <motion.div
        layout
        transition={headerTransition as Transition}
        className={cn("flex w-full mx-auto p-1 items-center justify-between bg-card/80 backdrop-blur-sm rounded-full transition-shadow duration-1000 ease-out",
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
              <Link href="/solution">Solution</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/resources">Company</Link>
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
  );
}

