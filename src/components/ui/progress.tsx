"use client";
import React from "react";

export function Progress({ value = 0, className = "" }: { value?: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className={`w-full bg-[#0a0a0a] rounded-full h-2 overflow-hidden ${className}`}>
      <div style={{ width: `${pct}%` }} className="h-2 rounded-full transition-all" />
    </div>
  );
}