'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Hook for observing when elements become visible (lazy loading)
 */
export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}

/**
 * Hook for debouncing values (reduces re-renders)
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

/**
 * Hook for throttling values (reduces event frequency)
 */
export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastRan = useRef(Date.now())

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= delay) {
        setThrottledValue(value)
        lastRan.current = Date.now()
      }
    }, delay - (Date.now() - lastRan.current))

    return () => clearTimeout(handler)
  }, [value, delay])

  return throttledValue
}

/**
 * Hook for tracking memory usage (development only)
 */
export function useMemoryMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const checkMemory = setInterval(() => {
      if (performance.memory) {
        const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(2)
        const limit = (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2)
        console.log(`[v0] Memory: ${used}MB / ${limit}MB`)
      }
    }, 30000)

    return () => clearInterval(checkMemory)
  }, [])
}
