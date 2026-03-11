"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, CreditCard } from "lucide-react";
import Link from "next/link";

interface MembershipCardProps {
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
  ctaText?: string;
}

const tierIcons: Record<string, React.ReactNode> = {
  Basic: <CreditCard className="w-6 h-6" />,
  Unlimited: <Zap className="w-6 h-6" />,
  Elite: <Crown className="w-6 h-6" />,
  "Day Pass": <Star className="w-6 h-6" />,
};

export default function MembershipCard({
  tier,
  price,
  period = "/month",
  description,
  features,
  highlighted = false,
  popular = false,
  ctaText = "Join Now",
}: MembershipCardProps) {
  return (
    <Card
      className={`relative bg-card border-border overflow-hidden card-hover h-full flex flex-col ${
        highlighted
          ? "border-primary/50 shadow-lg shadow-primary/10"
          : ""
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-white font-semibold">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="p-6 pb-0">
        {/* Tier Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            highlighted ? "bg-primary text-white" : "bg-muted text-gray-400"
          }`}
        >
          {tierIcons[tier] || <Star className="w-6 h-6" />}
        </div>

        {/* Tier Name */}
        <h3 className="text-2xl font-bold text-white">{tier}</h3>

        {/* Price */}
        <div className="mt-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && (
            <span className="text-gray-400 text-sm ml-1">{period}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </CardHeader>

      <CardContent className="p-6 flex-1">
        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  highlighted ? "bg-primary/20 text-primary" : "bg-muted text-gray-400"
                }`}
              >
                <Check className="w-3 h-3" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          className={`w-full font-semibold ${
            highlighted
              ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
              : "bg-muted hover:bg-muted/80 text-white"
          }`}
        >
          <Link href="/contact">{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
