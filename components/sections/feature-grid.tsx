"use client";

import { Section } from "@/components/section";

export function FeatureGrid() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 bg-muted rounded-3xl min-h-[400px] flex flex-col justify-between">
          <div></div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-1">
              Single source of truth
            </h2>
            <p className="max-w-xl text-balance text-muted-foreground">
              View KPIs, metrics, and business health in a single dashboard.
            </p>
          </div>
        </div>
        <div className="col-span-1 bg-muted rounded-3xl min-h-[400px]"></div>
        <div className="col-span-1 bg-muted rounded-3xl min-h-[400px]"></div>
        <div className="col-span-2 bg-muted rounded-3xl min-h-[400px]"></div>
      </div>
    </Section>
  );
}

