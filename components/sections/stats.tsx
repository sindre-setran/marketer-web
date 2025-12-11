"use client";

import { StatSection, StatCard } from "@/components/stat-section";

export function Stats() {
  return (
    <StatSection 
      title="Consilidate your growth into one platform"
      subheadline="Save time, cut costs and increase output"
    >
      <StatCard value={445} suffix="%" label="Creative output increase" col={1} row={1}>
      </StatCard>
      <StatCard value={90} suffix="%" label="Cut in wasted adspend" col={1} row={2}>
      </StatCard>
      <StatCard value={22} suffix="%" label="Average ROAS increase" col={2} row={1} rowSpan={2}>
      </StatCard>
      <StatCard value={18} suffix=" hours" label="Saved on average per week" col={3} row={1} rowSpan={2}>
      <svg className="max-w-64 w-full" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5712_21680)">
          <g clipPath="url(#clip1_5712_21680)" className="animate-[spin_60s_linear_infinite_reverse] origin-center">
            <circle cx="224" cy="32" r="32" fill="#224E3E"/>
            <circle cx="224" cy="416" r="32" fill="#224E3E"/>
            <ellipse cx="416" cy="228" rx="32" ry="32" transform="rotate(90 416 228)" fill="#224E3E"/>
            <ellipse cx="32" cy="228" rx="32" ry="32" transform="rotate(90 32 228)" fill="#BFE8CF"/>
            <circle cx="320" cy="389.349" r="32" transform="rotate(150 320 389.349)" fill="#224E3E"/>
            <circle cx="128" cy="56.795" r="32" transform="rotate(150 128 56.795)" fill="#BFE8CF"/>
            <circle opacity="0.9" cx="128.249" cy="389.41" r="32" transform="rotate(-150 128.249 389.41)" fill="#224E3E"/>
            <circle cx="320.249" cy="56.8565" r="32" transform="rotate(-150 320.249 56.8565)" fill="#224E3E"/>
            <circle cx="57.7231" cy="320.536" r="32" transform="rotate(-120 57.7231 320.536)" fill="#224E3E"/>
            <circle cx="390.277" cy="128.536" r="32" transform="rotate(-120 390.277 128.536)" fill="#224E3E"/>
            <circle cx="57.7231" cy="128.536" r="32" transform="rotate(-60 57.7231 128.536)" fill="#BFE8CF"/>
            <circle cx="390.277" cy="320.536" r="32" transform="rotate(-60 390.277 320.536)" fill="#224E3E"/>
          </g>
          <g clipPath="url(#clip2_5712_21680)" className="animate-[spin_60s_linear_infinite] origin-center">
            <circle cx="224" cy="128" r="32" fill="#224E3E"/>
            <circle cx="224" cy="320" r="32" fill="#224E3E"/>
            <circle cx="307.138" cy="176" r="32" transform="rotate(60 307.138 176)" fill="#224E3E"/>
            <circle cx="140.861" cy="272" r="32" transform="rotate(60 140.861 272)" fill="#224E3E"/>
            <circle cx="307.138" cy="272" r="32" transform="rotate(120 307.138 272)" fill="#224E3E"/>
            <circle cx="140.861" cy="176" r="32" transform="rotate(120 140.861 176)" fill="#BFE8CF"/>
          </g>
          <g clipPath="url(#clip3_5712_21680)">
            <circle cx="224" cy="224" r="32" fill="#224E3E"/>
          </g>
        </g>
        <defs>
        <clipPath id="clip0_5712_21680">
        <rect width="448" height="448" fill="white"/>
        </clipPath>
        <clipPath id="clip1_5712_21680">
        <rect width="448" height="448" fill="white"/>
        </clipPath>
        <clipPath id="clip2_5712_21680">
        <rect width="253.703" height="256" fill="white" transform="translate(97.1484 96)"/>
        </clipPath>
        <clipPath id="clip3_5712_21680">
        <rect width="64" height="64" fill="white" transform="translate(192 192)"/>
        </clipPath>
        </defs>
      </svg>
      </StatCard>
    </StatSection>
  );
}

