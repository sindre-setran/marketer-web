"use client";

import { Section } from "@/components/section";
import { ResultCard } from "@/components/result-card";

export function Results() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ResultCard
          preheading="Investment Watches"
          heading="5x Revenue in 3 months"
          description="Identified winning campaigns in under 2 weeks, then scaled with precision to 5x their revenue in 3 months."
          image="/img/ad/ad_01.jpg"
          colSpan={1}
        />
        <ResultCard
          preheading="Aarja Health"
          heading="Aarja Health's ROAS revival"
          description="Revitalized their advertising strategy and achieved remarkable return on ad spend."
          image="/img/brand-02.png"
          colSpan={2}
        />
        <ResultCard
          preheading="Used in 100+ industries"
          heading="Trusted across sectors"
          description="Retail, Electronics, Well-being, Fashion, Beauty, Apparel, Food, Books, Fitness, Furniture, Appliances, Supplements, and more."
          colSpan={1}
          className="dark"
        />
        <ResultCard
          heading="72%"
          description="of brands cut creative production time with Marketer.com powered ads and Asset Library"
          className="bg-primary text-foreground"
          colSpan={1}
        />
        <ResultCard
          heading="3x time saved"
          description="Customers experience an average 3x efficiency increase and times saved on campaign management."
          colSpan={1}
          className="dark"
        />
        <ResultCard
          preheading="Karen Kane"
          heading="Karen Kane's AI-powered turnaround"
          description="Transformed their marketing approach with AI-driven insights and automation, leading to significant growth."
          image="/img/brand-01.png"
          colSpan={3}
        />
      </div>
    </Section>
  );
}

