import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { useMeasure } from "@/hooks/use-measure";
import { ProgressiveBlur } from "./ui/progressive-blur";

interface ResultCardProps {
  preheading?: string;
  heading: string;
  description: string;
  image?: string;
  colSpan?: 1 | 2 | 3;
  className?: string;
}

export function ResultCard({
  preheading,
  heading,
  description,
  image,
  colSpan = 1,
  className
}: ResultCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, bounds } = useMeasure();
  const hasImage = !!image;
  
  return (
    <div 
      className={cn(
        "relative rounded-3xl p-6 flex flex-col justify-end overflow-hidden min-h-[400px] text-foreground",
        hasImage ? "dark" : "bg-positive text-positive-foreground",
        colSpan === 2 && "col-span-1 md:col-span-2",
        colSpan === 3 && "col-span-1 md:col-span-2 lg:col-span-3",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {hasImage && (
        <div className="absolute inset-0 z-10">
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}
      
      {/* Preheading at top */}
      {preheading && (
        <div className="relative z-10 grow-1">
          <div className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-500/10 backdrop-blur-sm">
            {preheading}
          </div>
        </div>
      )}
      
      {/* Heading and description at bottom */}
      <div className="relative z-10 flex flex-col">
        <h3 className="text-2xl font-semibold mb-1">
          {heading}
        </h3>
        
        {/* For image cards: show description only on hover. For color cards: always show */}
        {hasImage ? (
          <motion.div
            animate={{ height: isHovered ? bounds.height : 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          >
              <motion.div
                ref={ref}
                animate={{ opacity: isHovered ? 1 : 0, filter: isHovered ? "blur(0px)" : "blur(1px)" }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut",
               }}
              >
                <p className="max-w-xl text-balance text-foreground/70">
                  {description}
                </p>
              </motion.div>
          </motion.div>
          ) : (
            <p className="max-w-xl text-balance">
              {description}
            </p>
          )}
      </div>
      <ProgressiveBlur height="25%" position="bottom" className="-z-10" />
    </div>
  );
}

