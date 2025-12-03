"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Transition, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { FlyingElement } from "@/components/flying-element";
import { SearchWrapper } from "@/components/search-wrapper";
import { Marquee } from "@/components/ui/marquee"
import LogoContainer from "@/components/logoContainer";
import { Play } from "lucide-react";
import { FeatureShuffle } from "@/components/feature-shuffle";
import { StatSection, StatCard } from "@/components/stat-section";
import { TestimonialCard } from "@/components/testimonial-card";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerTransition = {
    type: "spring",
    stiffness: 600,
    damping: 55,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);

  return (
    <div>
      <main>
        {/*<div className="bg-highlight text-highlight-foreground text-sm w-full p-2 mb-4 flex items-center justify-center">
          <p>Announcing our 8M Series A with Magnus Carlsen and others</p>
        </div>*/}
        <header className="sticky top-4 left-0 right-0 flex justify-center z-50">
          <motion.div
            layout
            transition={headerTransition as Transition}
            className={cn("flex w-full mx-auto p-1 items-center justify-between bg-white/80 backdrop-blur-sm rounded-full transition-shadow duration-1000 ease-out",
            isScrolled ? "max-w-2xl shadow-lg" : "max-w-screen-lg shadow-none")}
          >
            <motion.div 
            transition={headerTransition as Transition} layout className="py-1 px-2.5">
              <Link href="/">
                <Logo />
              </Link>
            </motion.div>
            <motion.nav layout className="font-medium text-[15px]">
              <ul className="flex items-center gap-6">
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/resources">Company</Link>
                </li>
              </ul>
            </motion.nav>
            <motion.div transition={headerTransition as Transition} layout className="flex items-center gap-1">
              <Button asChild size="lg" variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/book-demo">Book demo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </header>
        <div className="pt-32 pb-36 relative flex flex-col items-center gap-8">
          <div className="mx-auto inline-flex flex-col items-center gap-1.5">
            <h2 className="text-xs font-[500] text-muted-foreground">Official partners</h2>
            <ul className="flex items-center gap-1.5">
              <li className="border rounded-lg">
                <svg className="scale-60" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.6 20.4167C37.6 19.1167 37.4833 17.8667 37.2667 16.6667H20V23.7667H29.8667C29.4333 26.05 28.1333 27.9834 26.1833 29.2834V33.9H32.1333C35.6 30.7 37.6 26 37.6 20.4167Z" fill="#4285F4"/>
                <path d="M19.9995 38.3327C24.9495 38.3327 29.0995 36.6993 32.1328 33.8993L26.1828 29.2827C24.5495 30.3827 22.4661 31.0493 19.9995 31.0493C15.2328 31.0493 11.1828 27.8327 9.73281 23.4993H3.63281V28.2327C6.64948 34.216 12.8328 38.3327 19.9995 38.3327Z" fill="#34A853"/>
                <path d="M9.73317 23.4839C9.3665 22.3839 9.14984 21.2172 9.14984 20.0005C9.14984 18.7839 9.3665 17.6172 9.73317 16.5172V11.7839H3.63317C2.38317 14.2505 1.6665 17.0339 1.6665 20.0005C1.6665 22.9672 2.38317 25.7505 3.63317 28.2172L8.38317 24.5172L9.73317 23.4839Z" fill="#FBBC05"/>
                <path d="M19.9995 8.96669C22.6995 8.96669 25.0995 9.90002 27.0161 11.7L32.2661 6.45002C29.0828 3.48335 24.9495 1.66669 19.9995 1.66669C12.8328 1.66669 6.64948 5.78335 3.63281 11.7834L9.73281 16.5167C11.1828 12.1834 15.2328 8.96669 19.9995 8.96669Z" fill="#EA4335"/>
                </svg>
              </li>
              <li className="border rounded-lg">
                <svg className="scale-60" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.1668 24.4667L37.3393 25.8525L35.5168 24.5834C35.5168 24.45 35.5168 24.3084 35.5085 24.1667C35.5085 24.0334 35.5085 23.8917 35.5002 23.75C35.3835 20.4667 34.5502 16.95 32.8835 14.375C31.6002 12.4 29.9585 11.4584 28.1252 11.4584C26.2002 11.4584 24.6335 12.6084 22.9002 15.1084C22.8502 15.1834 22.7918 15.2584 22.7418 15.3417C22.7085 15.3834 22.6835 15.425 22.6502 15.475C22.5668 15.6 22.4835 15.725 22.4002 15.8584C21.6502 17.025 20.8668 18.3834 20.0168 19.8834C19.9418 20.025 19.8585 20.1667 19.7835 20.3084C19.7585 20.3417 19.7335 20.3834 19.7168 20.4167L19.5418 20.725L18.5085 22.55C16.0835 26.8417 15.4668 27.825 14.2585 29.4334C12.1335 32.2584 10.3168 33.3334 7.92516 33.3334C5.09183 33.3334 3.29183 32.1084 2.1835 30.2584C1.27516 28.7584 0.833496 26.7834 0.833496 24.5334L4.97516 24.675C4.97516 26.1417 5.29183 27.2584 5.71683 27.9417C6.26683 28.825 7.07516 29.1667 7.91683 29.1667C8.99183 29.1667 9.99183 28.9417 11.8918 26.3084C13.4168 24.2 15.2168 21.25 16.4252 19.3917L17.5668 17.65L17.8085 17.2667L18.0585 16.8917L18.4752 16.25C19.1085 15.2834 19.7918 14.2584 20.5252 13.275C20.6085 13.1584 20.6918 13.0417 20.7835 12.925C20.8668 12.8084 20.9585 12.6917 21.0418 12.5834C21.7918 11.625 22.5835 10.7334 23.4335 10C24.9752 8.65835 26.6335 7.91669 28.3085 7.91669C31.1168 7.91669 33.7918 9.54169 35.8418 12.5917C37.9335 15.7084 39.0252 19.5917 39.1502 23.6334C39.1585 23.7667 39.1585 23.9084 39.1585 24.05C39.1668 24.1917 39.1668 24.325 39.1668 24.4667Z" fill="#0081FB"/>
                  <path d="M4.09814 12.88C5.99564 9.95919 8.73564 7.91669 11.8773 7.91669C13.6973 7.91669 15.5056 8.45419 17.3948 9.99419C19.4606 11.6775 21.6631 14.4492 24.4106 19.0175L25.3956 20.6567C27.774 24.6117 29.1265 26.6459 29.919 27.6059C30.9373 28.8384 31.5731 29.1667 32.4998 29.1667C34.8498 29.1667 35.514 27.05 35.514 24.5825L39.1665 24.4684C39.1665 27.0475 38.6573 28.9425 37.7906 30.4392C36.954 31.8867 35.3223 33.3334 32.5773 33.3334C30.8706 33.3334 29.359 32.9634 27.6873 31.3892C26.4023 30.1809 24.8998 28.0342 23.744 26.105L20.3056 20.3725C18.5806 17.4959 16.9981 15.35 16.0823 14.3792C15.0973 13.3342 13.8806 12.0842 11.8598 12.0842C10.224 12.0842 8.78564 13.2192 7.62314 14.9717L4.09814 12.88Z" fill="url(#paint0_linear_5621_1109)"/>
                  <path d="M11.8752 12.0834C10.2427 12.0834 8.806 13.2184 7.646 14.9709C6.00516 17.4475 5.00016 21.1359 5.00016 24.6784C5.00016 26.1392 4.99766 27.2384 5.41683 27.9167L2.21683 30.2609C1.31183 28.7559 0.833496 26.8334 0.833496 24.5834C0.833496 20.4917 1.96266 16.1742 4.0985 12.88C5.9935 9.95919 8.756 7.91669 11.8918 7.91669L11.8752 12.0834Z" fill="url(#paint1_linear_5621_1109)"/>
                  <path opacity="0.05" d="M18.0566 16.893L17.8066 17.268L17.5649 17.6513C18.1566 18.5097 18.8316 19.543 19.5399 20.7263L19.7149 20.418C19.7316 20.3847 19.7566 20.343 19.7816 20.3097C19.8566 20.168 19.9399 20.0263 20.0149 19.8847C19.3233 18.7513 18.6566 17.743 18.0566 16.893ZM20.7816 12.9263C20.6899 13.043 20.6066 13.1597 20.5233 13.2763C21.1316 14.0347 21.7483 14.893 22.3983 15.8597C22.4816 15.7263 22.5649 15.6013 22.6483 15.4763C22.6816 15.4263 22.7066 15.3847 22.7399 15.343C22.7899 15.2597 22.8483 15.1847 22.8983 15.1097C22.2649 14.1763 21.6483 13.3347 21.0399 12.5847C20.9566 12.693 20.8649 12.8097 20.7816 12.9263Z" fill="#171717"/>
                  <path opacity="0.07" d="M18.0591 16.8931L17.8091 17.2681C18.4007 18.1181 19.0674 19.1348 19.7841 20.3098C19.8591 20.1681 19.9424 20.0265 20.0174 19.8848C19.3257 18.7515 18.6591 17.7431 18.0591 16.8931ZM20.5257 13.2765C21.1341 14.0348 21.7507 14.8931 22.4007 15.8598C22.4841 15.7265 22.5674 15.6015 22.6507 15.4765C22.0091 14.5265 21.3841 13.6765 20.7841 12.9265C20.6924 13.0431 20.6091 13.1598 20.5257 13.2765Z" fill="#171717"/>
                  <defs>
                  <linearGradient id="paint0_linear_5621_1109" x1="35.2531" y1="20.625" x2="11.2773" y2="20.625" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0081FB"/>
                  <stop offset="0.995" stopColor="#0064E1"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_5621_1109" x1="6.36266" y1="27.3917" x2="6.36266" y2="10.8434" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0081FB"/>
                  <stop offset="0.995" stopColor="#0064E1"/>
                  </linearGradient>
                  </defs>
                </svg>
              </li>
              <li className="border rounded-lg">
                <svg className="scale-60" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.1195 7.8555C33.0919 7.6555 32.9167 7.54482 32.7719 7.53263C32.6274 7.52057 29.5688 7.29386 29.5688 7.29386C29.5688 7.29386 27.4445 5.18496 27.2114 4.95153C26.9781 4.71824 26.5225 4.7892 26.3456 4.84126C26.3196 4.84893 25.8815 4.98413 25.1569 5.20838C24.4473 3.16646 23.195 1.29002 20.9918 1.29002C20.931 1.29002 20.8684 1.29249 20.8058 1.29605C20.1792 0.467422 19.403 0.107422 18.7326 0.107422C13.6004 0.107422 11.1485 6.52318 10.3797 9.78345C8.3855 10.4014 6.96879 10.8407 6.78783 10.8976C5.67468 11.2467 5.63947 11.2818 5.49331 12.3307C5.38331 13.1248 2.4707 35.6493 2.4707 35.6493L25.1663 39.9017L37.4636 37.2414C37.4636 37.2414 33.1466 8.0555 33.1195 7.8555ZM23.9025 5.59633L21.9821 6.19071C21.9828 6.05537 21.9834 5.92222 21.9834 5.7766C21.9834 4.50756 21.8073 3.48578 21.5247 2.67578C22.6599 2.81824 23.4159 4.10989 23.9025 5.59633ZM20.1165 2.92742C20.4321 3.71824 20.6373 4.85318 20.6373 6.38468C20.6373 6.46304 20.6366 6.53468 20.6359 6.60715C19.387 6.994 18.0299 7.414 16.6697 7.83537C17.4334 4.88797 18.865 3.46441 20.1165 2.92742ZM18.5917 1.484C18.8132 1.484 19.0363 1.5592 19.2499 1.70619C17.6051 2.48016 15.8421 4.42948 15.0976 8.32222L11.9625 9.29318C12.8345 6.324 14.9054 1.484 18.5917 1.484Z" fill="#95BF46"/>
                  <path d="M32.774 7.5331C32.6294 7.52104 29.5708 7.29433 29.5708 7.29433C29.5708 7.29433 27.4466 5.18543 27.2134 4.952C27.1261 4.86515 27.0085 4.82063 26.8855 4.80145L25.1694 39.9019L37.4656 37.2419C37.4656 37.2419 33.1486 8.05597 33.1215 7.85597C33.094 7.65597 32.9187 7.54529 32.774 7.5331Z" fill="#5E8E3E"/>
                  <path d="M20.9919 14.3279L19.4756 18.8384C19.4756 18.8384 18.1471 18.1293 16.5187 18.1293C14.1313 18.1293 14.0111 19.6275 14.0111 20.0051C14.0111 22.0651 19.381 22.8544 19.381 27.6796C19.381 31.4759 16.9732 33.9204 13.7266 33.9204C9.83071 33.9204 7.83838 31.4958 7.83838 31.4958L8.88153 28.0492C8.88153 28.0492 10.9295 29.8074 12.6576 29.8074C13.7867 29.8074 14.2461 28.9184 14.2461 28.2688C14.2461 25.5817 9.84057 25.4618 9.84057 21.0463C9.84057 17.33 12.508 13.7337 17.8924 13.7337C19.967 13.7337 20.9919 14.3279 20.9919 14.3279Z" fill="white"/>
                </svg>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-6xl text-center max-w-4xl mx-auto tracking-[-0.02em] leading-[1.1] transition-transform duration-500 ease-out">
              AI Native Growth Operating System for E-commerce
            </h1>
            <p className="text-center text-muted-foreground max-w-lg mx-auto font-[500]">
              Replace costly agencies and scattered tools with one AI-powered system built to help your brand scale profitably.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Button asChild size="xl">
                <Link href="/book-demo">Get started</Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/book-demo"><Play className="size-4" />Watch demo</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-40 flex flex-col items-center gap-3 overflow-hidden">
          <Marquee>
            <LogoContainer logo="db" />
            <LogoContainer logo="moniker" />
            <LogoContainer logo="sweetProtection" />
          </Marquee>
          <ul className="flex items-center gap-4 text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8717 4.7133C19.8552 4.5933 19.75 4.52689 19.6632 4.51958C19.5765 4.51234 17.7413 4.37632 17.7413 4.37632C17.7413 4.37632 16.4667 3.11097 16.3268 2.97092C16.1869 2.83095 15.9135 2.87352 15.8074 2.90475C15.7918 2.90936 15.5289 2.99048 15.0941 3.12503C14.6684 1.89988 13.917 0.774015 12.5951 0.774015C12.5586 0.774015 12.521 0.775494 12.4835 0.777631C12.1075 0.280453 11.6418 0.0644531 11.2396 0.0644531C8.16026 0.0644531 6.68911 3.91391 6.22785 5.87007C5.0313 6.24084 4.18127 6.50443 4.0727 6.53854C3.40481 6.74804 3.38368 6.76908 3.29598 7.39843C3.22998 7.87489 1.48242 21.3896 1.48242 21.3896L15.0998 23.941L22.4781 22.3448C22.4781 22.3448 19.888 4.8333 19.8717 4.7133ZM14.3415 3.3578L13.1892 3.71443C13.1897 3.63322 13.1901 3.55333 13.1901 3.46596C13.1901 2.70454 13.0844 2.09147 12.9148 1.60547C13.5959 1.69095 14.0495 2.46593 14.3415 3.3578ZM12.0699 1.75645C12.2592 2.23095 12.3824 2.91191 12.3824 3.83081C12.3824 3.87782 12.382 3.92081 12.3815 3.96429C11.6322 4.1964 10.8179 4.4484 10.0018 4.70122C10.4601 2.93278 11.319 2.07864 12.0699 1.75645ZM11.155 0.890398C11.2879 0.890398 11.4218 0.935522 11.5499 1.02371C10.5631 1.4881 9.50524 2.65769 9.05853 4.99333L7.17749 5.57591C7.70072 3.7944 8.94322 0.890398 11.155 0.890398Z" fill="#95BF46"/>
                <path d="M19.6643 4.51985C19.5776 4.51261 17.7424 4.37659 17.7424 4.37659C17.7424 4.37659 16.4678 3.11124 16.3279 2.97119C16.2756 2.91908 16.205 2.89237 16.1312 2.88086L15.1016 23.9411L22.4793 22.3451C22.4793 22.3451 19.8891 4.83357 19.8728 4.71357C19.8563 4.59357 19.7512 4.52716 19.6643 4.51985Z" fill="#5E8E3E"/>
                <path d="M12.5953 8.59678L11.6855 11.303C11.6855 11.303 10.8884 10.8776 9.91129 10.8776C8.47885 10.8776 8.40677 11.7765 8.40677 12.0031C8.40677 13.2391 11.6287 13.7126 11.6287 16.6078C11.6287 18.8856 10.184 20.3523 8.23606 20.3523C5.89852 20.3523 4.70312 18.8975 4.70312 18.8975L5.32902 16.8295C5.32902 16.8295 6.55778 17.8845 7.59463 17.8845C8.27214 17.8845 8.54773 17.351 8.54773 16.9613C8.54773 15.349 5.90444 15.2771 5.90444 12.6278C5.90444 10.398 7.50488 8.24023 10.7355 8.24023C11.9803 8.24023 12.5953 8.59678 12.5953 8.59678Z" fill="white"/>
              </svg>
              <p className="font-medium">1500+ Shopify App Installs</p>
            </li>
            <li className="w-px h-3.5 bg-gray-300 rounded-full"></li>
            <li>
              <p className="font-medium">400+ marketing agencies replaced</p>
            </li>
          </ul>
        </div>
        <div ref={containerRef} className="min-h-[400vh]">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            <FlyingElement
              scrollYProgress={scrollYProgress}
              variant="shopify"
            />
            <FlyingElement
              scrollYProgress={scrollYProgress}
              variant="google"
              startX={-320}
              startY={-180}
              startRotate={-30}
            />
            <FlyingElement
              scrollYProgress={scrollYProgress}
              variant="snapchat"
              startX={-80}
              startY={-310}
              startRotate={15}
            />
            <FlyingElement
              scrollYProgress={scrollYProgress}
              variant="meta"
              startX={320}
              startY={-180}
              startRotate={25}
            />
            <motion.h2 
              style={{ scale }} 
              className="font-semibold text-8xl text-center max-w-4xl mx-auto tracking-[-0.02em] transition-transform duration-500 ease-out"
            >
              One AI that replaces the agency
            </motion.h2>
            <SearchWrapper scrollYProgress={scrollYProgress} />
          </div>
        </div>
        <FeatureShuffle />
        
        <StatSection 
          title="Consilidate your growth into one platform"
          subheadline="Save time, cut costs and increase output"
        >
          <StatCard value={445} suffix="%" label="Creative output increase" col={1} row={1}>

          </StatCard>
          
          <StatCard value={90} suffix="%" label="Cut in wasted adspend" col={2} row={1} rowSpan={3}>
            <div className="w-full p-4 flex items-center justify-center">
              <svg className="max-w-[440px]" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </svg>
            </div>
          </StatCard>
          
          <StatCard value={22} suffix="%" label="Average ROAS increase" col={1} row={2}>

          </StatCard>
          <StatCard value={18} suffix=" hours" label="Saved on average per week" col={1} row={3}>
            
          </StatCard>
        </StatSection>
        
        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-muted">
          <div className="max-w-7xl mx-auto mb-12 text-center">
            <h2 className="font-semibold text-4xl leading-tight mb-3">
              Trusted by growth teams worldwide
            </h2>
            <p className="text-muted-foreground">
              See what our customers are saying about us
            </p>
          </div>
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
        </section>
        <div className="min-h-screen"></div>
      </main>
    </div>
  );
}
