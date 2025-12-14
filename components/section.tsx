import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  description?: string;
  eyebrow?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  title,
  description,
  eyebrow,
}: SectionProps) {
  const hasHeader = title || description || eyebrow;

  return (
    <section className={cn("py-16", className)}>
      <div className={cn("max-w-7xl mx-auto px-4", containerClassName)}>
        {hasHeader && (
          <div className="mb-12 flex flex-col items-center w-full gap-3 text-center text-balance">
            {eyebrow && (
              <p className="text-muted-foreground max-w-lg">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-semibold text-4xl leading-tight max-w-lg">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground max-w-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

