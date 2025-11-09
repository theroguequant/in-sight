"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

const buttonVariants = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-2",
  secondary:
    "bg-gray-700 text-gray-100 hover:bg-gray-600 focus:ring-gray-500 focus:ring-2",
  ghost:
    "bg-transparent hover:bg-gray-800 text-gray-300 border border-gray-700 focus:ring-gray-600 focus:ring-2",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 focus:ring-2",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-6 py-3 text-lg rounded-xl",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
