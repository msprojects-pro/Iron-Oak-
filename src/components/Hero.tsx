"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  overlay?: boolean;
  size?: "full" | "large" | "medium";
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = true,
  size = "large",
}: HeroProps) {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[600px] lg:min-h-[700px]",
    medium: "min-h-[400px] lg:min-h-[500px]",
  };

  return (
    <section
      className={`relative ${heightClasses[size]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Replace this placeholder image with real gym photo */}
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 animate-fade-in-up">
            {subtitle}
          </p>
        )}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up stagger-1"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group"
              >
                <Link href={primaryCta.href}>
                  {primaryCta.text}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg transition-all group"
              >
                <Link href={secondaryCta.href}>
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryCta.text}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
