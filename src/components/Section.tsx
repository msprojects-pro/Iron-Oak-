"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({
  children,
  className,
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-charcoal" : "bg-steel",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center max-w-3xl mx-auto"
      )}
    >
      {subtitle && (
        <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          light ? "text-white" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-lg", light ? "text-gray-400" : "text-gray-400")}>
          {description}
        </p>
      )}
    </div>
  );
}
