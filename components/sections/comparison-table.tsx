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
        "flex items-center gap-3 p-4 h-full",
        isMarketer && "bg-positive/30 dark:bg-positive/10",
        isHeader && "font-medium"
      )}
    >
      {!isHeader && (
        <div className={cn("shrink-0 mt-0.5")}>
          {positive ? (
            <Check className="size-4 text-positive-foreground" />
          ) : (
            <X className="size-4 text-muted-foreground/40" />
          )}
        </div>
      )}
      <span className={cn("text-sm", isHeader ? "text-foreground" : "text-muted-foreground")}>
        {text}
      </span>
    </div>
  );
}

const headerColumns = [
  { label: "What You Get", isFirst: true },
  { label: "Marketer.com", isMarketer: true },
  { label: "Agency" },
  { label: "In-House Team" },
  { label: "Freelancers" },
  { label: "DIY Tech Stack", isLast: true },
];

export function ComparisonTable() {
  return (
    <Section className="py-24" eyebrow="Why choose Marketer.com" title="The Modern Alternative to Agencies and Hiring" description="See why companies like yours choose Marketer.com over traditional marketing solutions">
      <div className="overflow-x-auto -mx-4 px-4">
        <div className="min-w-[1000px] border border-border rounded-xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-6 border-b border-border bg-muted/30">
            {headerColumns.map((column) => (
              <div
                key={column.label}
                className={cn(
                  "p-4",
                  !column.isLast && "border-r border-border",
                  column.isMarketer && "bg-positive/20 dark:bg-positive/5"
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-sm",
                      column.isFirst
                        ? "font-medium text-muted-foreground"
                        : column.isMarketer
                        ? "font-semibold"
                        : "font-medium"
                    )}
                  >
                    {column.label}
                  </span>
                </div>
              </div>
            ))}
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

