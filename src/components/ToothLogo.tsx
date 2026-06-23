/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ToothLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function ToothLogo({ width = 50, height = 44, className = "" }: ToothLogoProps) {
  return (
    <img
      src="https://lh3.googleusercontent.com/d/1FuHR--diTfksWwziAdg5yc94GV9n3SZC"
      alt="KHAYR Geometric Tooth Logo"
      width={width}
      height={height}
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}

interface WordmarkProps {
  theme?: 'light' | 'dark';
  height?: number;
  className?: string;
}

export function KHAYRWordmark({ theme = 'light', height = 24, className = "" }: WordmarkProps) {
  return (
    <img
      src="https://lh3.googleusercontent.com/d/1lB-UGRBVXdGhJBLNfpCoWc-oog-ReXoo"
      alt="KHAYR Wordmark"
      height={height}
      className={`object-contain ${className}`}
      referrerPolicy="no-referrer"
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
}

