"use client";
import React, { ReactNode } from "react";

type CardProps = { children?: ReactNode; className?: string };
export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl shadow-sm border border-[#2b2b2b] bg-[#0b0b0c] text-slate-100 p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`mb-3 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <div className={`text-lg font-semibold tracking-tight ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`text-sm text-slate-200 ${className}`}>{children}</div>;
}