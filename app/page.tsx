"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FlyingElements } from "@/components/sections/flying-elements";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Results } from "@/components/sections/results";
import { Creatives } from "@/components/sections/creatives";
import { Section } from "@/components/section";
import { Placeholder } from "@/components/placeholder";
import { FeatureShuffle } from "@/components/feature-shuffle";
import { TabsSection } from "@/components/sections/tabs-section";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <main>
        {/*<div className="bg-highlight text-highlight-foreground text-sm w-full p-2 mb-4 flex items-center justify-center">
          <p>Announcing our 8M Series A with Magnus Carlsen and others</p>
        </div>*/}
        <Header />
        <Hero />
        <LogoMarquee />
        <TabsSection />
        <FeatureGrid />
        <Section>
          <Placeholder className="min-h-[600px]">Why e-commerce brands are switching to Marketer.com</Placeholder>
        </Section>
        <Section>
          <Placeholder className="min-h-[600px]">It is quick and easy to get started</Placeholder>
        </Section>
        <Creatives />
        <Section>
          <Placeholder className="min-h-[600px]">Ideal Customer Profile ♻️</Placeholder>
        </Section>
        <Stats />
        <FeatureShuffle />
        <Testimonials />
        <Results />
        <Section>
          <Placeholder className="min-h-[600px]">Our Partners ♻️</Placeholder>
        </Section>
        <FlyingElements />
        <Section>
          <Placeholder className="min-h-[600px]">FAQ ♻️</Placeholder>
        </Section>
        <Section>
          <Placeholder className="min-h-[600px]">Footer + Newsletter</Placeholder>
        </Section>
        <AnimatePresence>
          {showVideo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ ease: "easeOut", duration: 0.3, y: { type: "spring", stiffness: 600, damping: 55 } }}
              className="p-4 sticky bottom-0 left-0 right-0 flex justify-end pointer-events-none dark z-50"
            >
              <div className="relative rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Button asChild size="xl" variant="ghost">
                    <span className="text-foreground"><Play className="size-4" />How it works</span>
                  </Button>
                </div>
                <video src="https://cdn.marketer.com/v4/Marketer_Main_Video_Preview_16x9_MASTER.mp4" autoPlay loop muted playsInline className="max-w-[200px] pointer-events-auto" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
