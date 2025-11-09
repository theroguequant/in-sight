"use client";
import React, { ReactNode } from "react";

export function Table({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`w-full overflow-auto ${className}`}>
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
}

export function TableHeader({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return <thead className={`text-xs text-slate-400 uppercase ${className}`}>{children}</thead>;
}
export function TableRow({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return <tr className={`border-b border-[#1a1a1a] ${className}`}>{children}</tr>;
}
export function TableHead({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return <th className={`text-left py-3 px-2 ${className}`}>{children}</th>;
}
export function TableBody({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return <tbody className={className}>{children}</tbody>;
}
export function TableCell({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return <td className={`py-2 px-2 text-sm ${className}`}>{children}</td>;
}