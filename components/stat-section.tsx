import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import NumberTicker from "@/components/ui/number-ticker";
import { Section } from "@/components/section";

interface StatSectionProps {
  title: string;
  subheadline?: string;
  children: ReactNode;
  className?: string;
}

export function StatSection({ title, subheadline, children, className }: StatSectionProps) {
  return (
    <Section className={cn("py-24 px-4", className)} title={title} description={subheadline}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
        {children}
      </div>
    </Section>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  children?: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2 | 3;
  col?: 1 | 2 | 3;
  row?: number;
}

export function StatCard({ 
  value, 
  label, 
  prefix,
  suffix,
  decimalPlaces = 0,
  children, 
  className,
  colSpan = 1,
  rowSpan = 1,
  col,
  row
}: StatCardProps) {
  const gridClasses = cn(
    colSpan === 2 && "md:col-span-2",
    rowSpan === 2 && "md:row-span-2",
    rowSpan === 3 && "md:row-span-3",
    col === 1 && "md:col-start-1",
    col === 2 && "md:col-start-2",
    col === 3 && "md:col-start-3"
  );

  const gridStyle = row ? {
    gridRowStart: row
  } as React.CSSProperties : undefined;

  return (
    <div 
      className={cn(
        "relative bg-positive rounded-3xl p-8 flex flex-col justify-between min-h-[220px] overflow-hidden group",
        gridClasses,
        className
      )}
      style={gridStyle}
    >
      <div className="relative z-10">
        <div className="font-semibold text-positive-foreground text-5xl mb-1 flex items-baseline">
          {prefix && <span>{prefix}</span>}
          <NumberTicker 
            value={value} 
            decimalPlaces={decimalPlaces}
            className="inline-block"
          />
          {suffix && <span className="text-3xl ml-1.5">{suffix}</span>}
        </div>
        <div className="text-muted-foreground text-base">
          {label}
        </div>
      </div>
      {children && (
        <div className="flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

