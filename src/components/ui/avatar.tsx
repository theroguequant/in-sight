"use client";
import React, { ReactNode } from "react";

type AvatarProps = { children?: ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>;

export function Avatar({ children, className = "", ...props }: AvatarProps) {
  return (
    <div className={`inline-flex items-center justify-center rounded-full w-10 h-10 bg-[#111111] ${className}`} {...props}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt = "avatar", className = "" }: { src?: string; alt?: string; className?: string }) {
  if (!src) return null;
  return <img src={src} alt={alt} className={`w-full h-full rounded-full object-cover ${className}`} />;
}

export function AvatarFallback({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return <div className={`text-sm font-semibold text-slate-200 ${className}`}>{children}</div>;
}