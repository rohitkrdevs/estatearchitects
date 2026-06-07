"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  loading = false,
  className = "",
  disabled = false,
  type = "button",
  onClick,
  id,
  ...props
}: ButtonProps) {
  // Base classes with professional tracking, spacing, transitions
  const baseClasses =
    "font-sans text-xs tracking-widest font-semibold flex items-center justify-center gap-2 border transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-secondary";

  // Size variants
  const sizeClasses = {
    sm: "py-2.5 px-5 text-[10px]",
    md: "py-3.5 px-8 text-xs",
    lg: "py-4.5 px-10 text-xs",
  };

  // Color & outline variants
  const variantClasses = {
    primary:
      "bg-brand-primary text-white border-transparent hover:bg-brand-secondary",
    secondary:
      "bg-brand-secondary text-white border-transparent hover:bg-brand-primary",
    outline:
      "border-brand-primary/45 text-brand-primary bg-transparent hover:border-brand-primary hover:bg-brand-primary/5",
    ghost:
      "border-transparent text-brand-primary bg-transparent hover:bg-bg-primary/80",
    white: "bg-white text-brand-primary border-transparent hover:bg-brand-secondary hover:text-white",
  };

  const isDisabled = disabled || loading;

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;
  const currentVariantClass = variantClasses[variant] || variantClasses.primary;

  return (
    <motion.button
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      id={id}
      className={`
        ${baseClasses}
        ${currentSizeClass}
        ${currentVariantClass}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {!loading && Icon && iconPosition === "left" && (
        <Icon size={14} className="flex-shrink-0" />
      )}

      <span>{children}</span>

      {!loading && Icon && iconPosition === "right" && (
        <Icon size={14} className="flex-shrink-0" />
      )}
    </motion.button>
  );
}
