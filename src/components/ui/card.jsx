import * as React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border border-gray-700 bg-gray-800/50 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`px-6 py-4 border-b border-gray-700 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h2 className={`text-lg font-semibold text-white ${className}`}>{children}</h2>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}
