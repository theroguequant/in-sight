import * as React from "react";

export function Button({ children, className = "", variant = "default", ...props }) {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-600 text-gray-200 hover:bg-gray-700",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
