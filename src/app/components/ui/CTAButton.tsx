"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandSecondary";

const sizeStyles: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-md",
  md: "px-7 py-3 text-md md:text-base",
  lg: "px-9 py-4 text-md md:text-lg",
};

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-brandSecondary text-white hover:bg-brandDark shadow-md hover:shadow-lg",
  outline:
    "border border-brandSecondary text-brandSecondary hover:bg-brandSecondary hover:text-white",
  ghost: "text-brandSecondary hover:text-brandDark",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
}: CTAButtonProps) {
  const classes = [baseStyles, sizeStyles[size], variantStyles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      className={classes}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
