/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  formatSeparator?: ',' | '.' | 'none';
  className?: string;
}

export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 1200,
  formatSeparator = 'none',
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const startVal = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration, prefersReducedMotion]);

  const formatNumber = (val: number) => {
    if (formatSeparator === ',') {
      return val.toLocaleString('en-US');
    }
    if (formatSeparator === '.') {
      return val.toLocaleString('id-ID');
    }
    return String(val);
  };

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
}

interface TiltShowcaseProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  float?: boolean;
  floatAmplitude?: number;
  floatDuration?: number;
  shimmer?: boolean;
}

export function TiltShowcase({
  children,
  className = '',
  maxTilt = 3.5,
  float = false,
  floatAmplitude = 6,
  floatDuration = 5.5,
  shimmer = true,
}: TiltShowcaseProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    const rotateY = (relX - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - relY) * (maxTilt * 2);

    setTilt({
      rotateX,
      rotateY,
      glareX: Math.round(relX * 100),
      glareY: Math.round(relY * 100),
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt(prev => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  };

  return (
    <motion.div
      animate={
        float && !prefersReducedMotion && !tilt.isHovered
          ? { y: [0, -floatAmplitude, 0] }
          : { y: 0 }
      }
      transition={
        float && !prefersReducedMotion && !tilt.isHovered
          ? { duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 0.3 }
      }
      style={{ perspective: 1100 }}
      className={className}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.isHovered ? 1.012 : 1})`,
          transition: tilt.isHovered
            ? 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {children}

        {shimmer && (
          <div
            aria-hidden="true"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.28) 0%, rgba(168,216,234,0.10) 38%, rgba(255,255,255,0) 70%)`,
              opacity: tilt.isHovered ? 1 : 0,
              transition: 'opacity 250ms ease',
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-20"
          />
        )}
      </div>
    </motion.div>
  );
}
