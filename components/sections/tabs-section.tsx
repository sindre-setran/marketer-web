"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Section } from "@/components/section";
import { DotPattern } from "../ui/dot-pattern";
import { Administrative } from "./tab/administrative";
import Lottie from "lottie-react";
import administrativeAnimation from "@/public/lottie/administrative.json";

type Tab = "tab1" | "tab2" | "tab3";

const tabs = {
  tab1: {
    title: "Administrative",
    description: "Manage your growth from one workspace. Create campaigns, build audiences and track marketing costs in a single platform.",
    content: <Lottie animationData={administrativeAnimation} loop={true} />
  },
  tab2: {
    title: "Analytical",
    description: "All your KPIs in one place. Real time, correctly attributed data for clear performance decisions.",
    image: "/img/ui/analytics.svg",
    content:
    <div className="m-24 p-2 bg-positive/50 backdrop-blur-md rounded-3xl">
      <Image 
        src="/img/ui/analytics.svg"
        alt="Analytics"
        width={1150}
        height={562}
        className="w-full rounded-2xl shadow-lg"
    />
    </div>,
  },
  tab3: {
    title: "Creative",
    description: "Produce high quality visuals at scale. Create and manage hundreds of product ready assets for digital channels.",
    content: <video src="https://cdn.marketer.com/v4/Product%20to%20creative%20Desktop.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />,
  },
};

export function TabsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("tab1");

  return (
    <Section className="py-24">
      <div className="flex flex-col items-center">
        {/* Tab Menu */}
        <div className="inline-flex p-1 bg-secondary/50 rounded-full mb-6 relative">
          {(Object.keys(tabs) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-8 py-2 rounded-full font-medium transition-colors duration-300 cursor-pointer relative z-10",
                activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab-section"
                  className="absolute inset-0 bg-background rounded-full shadow-sm"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
              <span className="relative z-10">{tabs[tab].title}</span>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="w-full flex flex-col items-center gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full text-center"
            >
              <div className="flex flex-col items-center w-full gap-3 text-center text-balance">
                <p className="text-muted-foreground max-w-lg">
                  {tabs[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="w-full aspect-square md:aspect-video relative rounded-3xl overflow-hidden bg-muted flex flex-col items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut", y: { type: "spring", stiffness: 200, damping: 40, mass: 0.5 } }}
                className="relative z-10"
              >
                {tabs[activeTab].content}
              </motion.div>
            </AnimatePresence>
            <DotPattern className="z-0 text-foreground/10" />
          </div>
        </div>
      </div>
    </Section>
  );
}

