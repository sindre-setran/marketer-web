"use client";

import { Section } from "@/components/section";
import { Marquee } from "@/components/ui/marquee";
import { TestimonialCard } from "@/components/testimonial-card";

export function Testimonials() {
  return (
    <Section 
      className="py-24 bg-muted"
      title="Trusted by growth teams worldwide"
      description="See what our customers are saying about us"
      containerClassName="space-y-12 max-w-none"
    >
      <Marquee pauseOnHover className="[--duration:60s]">
        <TestimonialCard
          quote="I think AI is going to be the most important marketing decision. Any company can make and picking a company is essential... I like these guys a lot. It's going to be a really good mood for us."
          author="Len"
          company="Jing Soda"
        />
        <TestimonialCard
          quote="We've cut our agency costs by 80% and tripled our creative output. The AI understands our brand better than most humans."
          author="Sarah"
          company="Peak Apparel"
        />
        <TestimonialCard
          quote="Game changer for our team. We went from spending 20 hours a week on ad creative to just 2 hours. The ROI is incredible."
          author="Mike"
          company="Outdoor Gear Co"
        />
        <TestimonialCard
          quote="Finally, a platform that actually delivers on the AI promise. Our ROAS increased by 35% in the first month alone."
          author="Jessica"
          company="Beauty Brands Inc"
        />
      </Marquee>
    </Section>
  );
}

