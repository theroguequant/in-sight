"use client";
import React from "react";

export function Separator({ className = "my-3" }: { className?: string }) {
  return <div className={`w-full h-px bg-[#1f1f1f] ${className}`} />;
}