"use client";

import { Section } from "@/components/section";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    category: "Setup costs",
    marketer: { text: "From $1,000/mo, no setup fee", positive: true },
    agency: { text: "High retainers + setup fees", positive: false },
    inHouse: { text: "Thousands in hiring costs", positive: false },
    freelancers: { text: "Variable hourly rates", positive: false },
    diy: { text: "Multiple subscriptions", positive: false },
  },
  {
    category: "Time to launch",
    marketer: { text: "Same day", positive: true },
    agency: { text: "2-4 weeks onboarding", positive: false },
    inHouse: { text: "Months to hire & train", positive: false },
    freelancers: { text: "Days to find & brief", positive: false },
    diy: { text: "Weeks of setup", positive: false },
  },
  {
    category: "Optimization speed",
    marketer: { text: "Real-time AI optimization", positive: true },
    agency: { text: "Weekly at best", positive: false },
    inHouse: { text: "Depends on capacity", positive: false },
    freelancers: { text: "Manual, when available", positive: false },
    diy: { text: "Manual across tools", positive: false },
  },
  {
    category: "Creative output",
    marketer: { text: "Unlimited AI-generated", positive: true },
    agency: { text: "Limited by retainer", positive: false },
    inHouse: { text: "Limited by team size", positive: false },
    freelancers: { text: "Per-project basis", positive: false },
    diy: { text: "DIY or separate tool", positive: false },
  },
  {
    category: "Channel coverage",
    marketer: { text: "Meta, Google, Snapchat unified", positive: true },
    agency: { text: "Varies by specialty", positive: false },
    inHouse: { text: "Need specialists per channel", positive: false },
    freelancers: { text: "Usually single channel", positive: false },
    diy: { text: "Fragmented dashboards", positive: false },
  },
  {
    category: "Data ownership",
    marketer: { text: "You own everything", positive: true },
    agency: { text: "Agency can hold accounts", positive: false },
    inHouse: { text: "You own everything", positive: true },
    freelancers: { text: "You own everything", positive: true },
    diy: { text: "Scattered across platforms", positive: false },
  },
  {
    category: "Scalability",
    marketer: { text: "Instant, AI-powered", positive: true },
    agency: { text: "Renegotiate contracts", positive: false },
    inHouse: { text: "Hire more people", positive: false },
    freelancers: { text: "Find more freelancers", positive: false },
    diy: { text: "Add more tools", positive: false },
  },
  {
    category: "Gets smarter over time",
    marketer: { text: "AI learns from your data daily", positive: true },
    agency: { text: "Same playbook for years", positive: false },
    inHouse: { text: "Only as good as your team", positive: false },
    freelancers: { text: "Individual skill level", positive: false },
    diy: { text: "No learning capability", positive: false },
  },
  {
    category: "Cost transparency",
    marketer: { text: "Fixed monthly, no surprises", positive: true },
    agency: { text: "Hidden fees common", positive: false },
    inHouse: { text: "Salaries + benefits + overhead", positive: false },
    freelancers: { text: "Hourly or project-based", positive: false },
    diy: { text: "Multiple unpredictable bills", positive: false },
  },
  {
    category: "Contract flexibility",
    marketer: { text: "Cancel anytime", positive: true },
    agency: { text: "3-12 month minimums", positive: false },
    inHouse: { text: "Severance obligations", positive: false },
    freelancers: { text: "Project-based flexibility", positive: false },
    diy: { text: "Multiple contracts", positive: false },
  },
];

interface ComparisonCellProps {
  text: string;
  positive: boolean;
  isHeader?: boolean;
  isMarketer?: boolean;
}

function ComparisonCell({ text, positive, isHeader, isMarketer }: ComparisonCellProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4",
        isMarketer && "bg-positive/30 dark:bg-positive/10",
        isHeader && "font-medium"
      )}
    >
      {!isHeader && (
        <div className={cn("shrink-0 mt-0.5")}>
          {positive ? (
            <div className="size-5 rounded-full bg-positive flex items-center justify-center">
              <Check className="size-3.5 text-positive-foreground" strokeWidth={3} />
            </div>
          ) : (
            <X className="size-5 text-muted-foreground/40" strokeWidth={2} />
          )}
        </div>
      )}
      <span className={cn("text-sm", isHeader ? "text-foreground" : "text-muted-foreground")}>
        {text}
      </span>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <Section className="py-24">
      <div className="text-center mb-16 space-y-4">
        <p className="text-sm text-positive-foreground font-medium uppercase tracking-wide">
          Why choose Marketer.com
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          The Modern Alternative{" "}
          <span className="italic text-muted-foreground">to Agencies and Hiring</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          See why companies like yours choose Marketer.com over traditional marketing solutions
        </p>
      </div>

      <div className="overflow-x-auto -mx-4 px-4">
        <div className="min-w-[1000px] border border-border rounded-xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-6 border-b border-border bg-muted/30">
            <div className="p-4 border-r border-border">
              <span className="text-sm font-medium text-muted-foreground">What You Get</span>
            </div>
            <div className="p-4 border-r border-border bg-positive/20 dark:bg-positive/5">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-positive flex items-center justify-center">
                  <svg
                    className="size-5 text-positive-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold">Marketer.com</span>
              </div>
            </div>
            <div className="p-4 border-r border-border">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center">
                  <svg
                    className="size-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Agency</span>
              </div>
            </div>
            <div className="p-4 border-r border-border">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center">
                  <svg
                    className="size-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">In-House Team</span>
              </div>
            </div>
            <div className="p-4 border-r border-border">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center">
                  <svg
                    className="size-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Freelancers</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-muted flex items-center justify-center">
                  <svg
                    className="size-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">DIY Tech Stack</span>
              </div>
            </div>
          </div>

          {/* Data Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={row.category}
              className={cn(
                "grid grid-cols-6",
                index !== comparisonData.length - 1 && "border-b border-border"
              )}
            >
              <div className="p-4 border-r border-border bg-muted/10 flex items-center">
                <span className="text-sm font-medium">{row.category}</span>
              </div>
              <div className="border-r border-border">
                <ComparisonCell {...row.marketer} isMarketer />
              </div>
              <div className="border-r border-border">
                <ComparisonCell {...row.agency} />
              </div>
              <div className="border-r border-border">
                <ComparisonCell {...row.inHouse} />
              </div>
              <div className="border-r border-border">
                <ComparisonCell {...row.freelancers} />
              </div>
              <div>
                <ComparisonCell {...row.diy} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

