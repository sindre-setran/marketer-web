import { ComponentPropsWithoutRef, useState, useEffect, useRef, CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
  /**
   * Link marquee movement to page scroll
   * @default false
   */
  scrollLink?: boolean
  /**
   * Transition duration in seconds for ease-out effect (scroll-linked and hover)
   * Lower values = snappier, Higher values = smoother
   * @default 1
   */
  transitionDuration?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  scrollLink = false,
  transitionDuration = 1,
  ...props
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const animationRef = useRef<number | null>(null)
  const progressRef = useRef(0)
  const targetProgressRef = useRef(0)
  const currentSpeedRef = useRef(1)
  const targetSpeedRef = useRef(1)
  const lastTimeRef = useRef<number>(Date.now())
  const containerRef = useRef<HTMLDivElement | null>(null)
  const lastScrollRef = useRef(0)
  const scrollAnimationRef = useRef<number | null>(null)

  // Initialize progress based on direction
  useEffect(() => {
    const initialProgress = reverse ? -100 : 0
    progressRef.current = initialProgress
    targetProgressRef.current = initialProgress
  }, [reverse])

  // Handle scroll linking with ease-out animation
  useEffect(() => {
    if (!scrollLink) return

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const scrollDelta = currentScroll - lastScrollRef.current
      lastScrollRef.current = currentScroll

      // Update target progress based on scroll
      // Scale factor: adjust this to control sensitivity
      const scrollScale = 0.02
      const scrollProgress = scrollDelta * scrollScale

      if (reverse) {
        targetProgressRef.current += scrollProgress
        // Normalize target progress
        while (targetProgressRef.current >= 0) {
          targetProgressRef.current -= 100
        }
        while (targetProgressRef.current < -100) {
          targetProgressRef.current += 100
        }
      } else {
        targetProgressRef.current -= scrollProgress
        // Normalize target progress
        while (targetProgressRef.current <= -100) {
          targetProgressRef.current += 100
        }
        while (targetProgressRef.current > 0) {
          targetProgressRef.current -= 100
        }
      }
    }

    // Smooth animation loop for scroll-linked marquee
    const animateScroll = () => {
      const current = progressRef.current
      const target = targetProgressRef.current

      // Calculate shortest distance considering wrapping
      let diff = target - current
      
      // Handle wrapping for shortest path
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          diff = diff - 100
        } else {
          diff = diff + 100
        }
      }

      // Ease-out interpolation
      // Convert duration to easing factor: shorter duration = higher factor (faster)
      const easingFactor = 1 / (transitionDuration * 12)
      const step = diff * easingFactor
      const newProgress = Math.abs(diff) < 0.01 ? target : current + step
      progressRef.current = newProgress

      // Normalize progress
      if (reverse) {
        while (progressRef.current >= 0) {
          progressRef.current -= 100
        }
        while (progressRef.current < -100) {
          progressRef.current += 100
        }
      } else {
        while (progressRef.current <= -100) {
          progressRef.current += 100
        }
        while (progressRef.current > 0) {
          progressRef.current -= 100
        }
      }

      // Apply transform
      itemRefs.current.forEach((item) => {
        if (item) {
          const transform = vertical
            ? `translateY(${progressRef.current}%)`
            : `translateX(${progressRef.current}%)`
          item.style.transform = transform
        }
      })

      scrollAnimationRef.current = requestAnimationFrame(animateScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    lastScrollRef.current = window.scrollY
    scrollAnimationRef.current = requestAnimationFrame(animateScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current)
      }
    }
  }, [scrollLink, reverse, vertical, transitionDuration])

  useEffect(() => {
    // If scrollLink is enabled, don't auto-animate at all
    if (scrollLink) return

    // Determine target speed based on state
    let target = 1
    if (pauseOnHover && isHovered) {
      target = 0.05 // Slow down on hover
    }
    
    targetSpeedRef.current = target
    lastTimeRef.current = Date.now()

    const animate = () => {
      const now = Date.now()
      const deltaTime = (now - lastTimeRef.current) / 1000 // Convert to seconds
      lastTimeRef.current = now

      const current = currentSpeedRef.current
      const target = targetSpeedRef.current
      const diff = target - current

      // Smooth interpolation for ease-out effect
      const easingFactor = 1 / (transitionDuration * 12)
      const step = diff * easingFactor
      const newSpeed = Math.abs(diff) < 0.001 ? target : current + step
      currentSpeedRef.current = newSpeed

      // Update progress based on current speed
      // Base speed: moves 100% in 40 seconds, so speed per second = 100/40 = 2.5% per second
      const baseSpeedPerSecond = 100 / 40
      const progressDelta = baseSpeedPerSecond * newSpeed * deltaTime
      
      if (reverse) {
        // Move right (reverse direction): -100 -> 0 -> -100
        progressRef.current += progressDelta
        while (progressRef.current >= 0) {
          progressRef.current -= 100
        }
      } else {
        // Move left (normal direction): 0 -> -100 -> 0
        progressRef.current -= progressDelta
        while (progressRef.current <= -100) {
          progressRef.current += 100
        }
      }

      // Apply transform to all items
      itemRefs.current.forEach((item) => {
        if (item) {
          const transform = vertical
            ? `translateY(${progressRef.current}%)`
            : `translateX(${progressRef.current}%)`
          item.style.transform = transform
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered, pauseOnHover, vertical, reverse, scrollLink, transitionDuration])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovered(false)
    }
  }

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-1 [--gap:0.5rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "flex-row": !vertical,
              "flex-col": vertical,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
