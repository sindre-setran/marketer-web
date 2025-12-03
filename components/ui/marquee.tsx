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
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const animationRef = useRef<number | null>(null)
  const progressRef = useRef(0)
  const currentSpeedRef = useRef(1)
  const targetSpeedRef = useRef(1)
  const lastTimeRef = useRef<number>(Date.now())
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!pauseOnHover) return

    targetSpeedRef.current = isHovered ? 0.05 : 1
    lastTimeRef.current = Date.now()

    const animate = () => {
      const now = Date.now()
      const deltaTime = (now - lastTimeRef.current) / 1000 // Convert to seconds
      lastTimeRef.current = now

      const current = currentSpeedRef.current
      const target = targetSpeedRef.current
      const diff = target - current

      // Smooth interpolation for ease-out effect
      const step = diff * 0.08
      const newSpeed = Math.abs(diff) < 0.001 ? target : current + step
      currentSpeedRef.current = newSpeed

      // Update progress based on current speed
      // Base speed: moves 100% in 40 seconds, so speed per second = 100/40 = 2.5% per second
      const baseSpeedPerSecond = 100 / 40
      const progressDelta = baseSpeedPerSecond * newSpeed * deltaTime * (reverse ? 1 : -1)
      progressRef.current = (progressRef.current + progressDelta) % 100

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
  }, [isHovered, pauseOnHover, vertical, reverse])

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
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:0.5rem]",
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
