import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/section-header";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  description?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  title,
  description,
}: SectionProps) {
  const hasHeader = title || description;

  return (
    <section className={cn("py-16", className)}>
      <div className={cn("max-w-7xl mx-auto px-4", containerClassName)}>
        {hasHeader && (
          <div className="mb-12">
            <SectionHeader title={title!} description={description} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

