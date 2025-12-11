"use client";

import { Header } from "@/components/sections/header";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Plan = "growth" | "pro" | "performance";

const plans = {
  growth: {
    name: "Growth",
    price: "99",
    image: "/img/brand-01.png",
  },
  pro: {
    name: "Pro",
    price: "199",
    image: "/img/brand-02.png",
  },
  performance: {
    name: "Performance",
    price: "399",
    image: "/img/brand-03.png",
  },
};

export default function Home() {
  const [activePlan, setActivePlan] = useState<Plan>("growth");

  return (
    <div>
      <main className="dark bg-background text-foreground">
        <Header />
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Image with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan}
              initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut", scale: { type: "spring", bounce: 0 } }}
              className="absolute inset-0"
            >
              <Image
                className="w-full h-full object-cover opacity-50"
                src={plans[activePlan].image}
                alt={`${plans[activePlan].name} Plan`}
                quality={90}
                width={1920}
                height={1280}
                priority
              />
            </motion.div>
          </AnimatePresence>

          <ProgressiveBlur position="top" className="absolute top-0 left-0 right-0 w-full h-64 z-10" />
          
          {/* Content */}
          <div className="relative z-20 flex flex-col items-center pt-24 pb-8 min-h-screen">
            <div className="w-full h-full max-w-7xl p-8 bg-card/60 backdrop-blur-xs mx-auto flex flex-col items-center rounded-3xl flex-grow">
              {/* Tab Menu */}
              <div className="inline-flex p-1 bg-card/40 rounded-full mb-16 relative">
                {(Object.keys(plans) as Plan[]).map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setActivePlan(plan)}
                    className={cn(
                      "px-8 py-2 rounded-full font-medium transition-colors duration-300 cursor-pointer relative z-10",
                      activePlan === plan ? "text-black" : "text-white/70 hover:text-white"
                    )}
                  >
                    {activePlan === plan && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                    <span className="relative z-10">{plans[plan].name}</span>
                  </button>
                ))}
              </div>

              {/* Price Display with Animation */}
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-white/60 text-2xl font-light">Starting at</span>
                </div>
                <div className="flex items-start justify-center">
                  <span className="text-white text-4xl font-light mt-3 mr-1">$</span>
                  <AnimatePresence mode="wait">
                    <TextAnimate
                      key={`price-${activePlan}`}
                      animation="blurInUp"
                      by="character"
                      duration={0.4}
                      startOnView={false}
                      className="text-white text-8xl md:text-9xl font-bold"
                    >
                      {plans[activePlan].price}
                    </TextAnimate>
                  </AnimatePresence>
                  <span className="text-white/60 text-2xl font-light mt-3 ml-2">/mo</span>
                </div>
                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`plan-name-${activePlan}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white/80 text-xl font-medium">
                        {plans[activePlan].name} Plan
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
