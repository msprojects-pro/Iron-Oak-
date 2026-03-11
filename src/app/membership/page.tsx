"use client";

import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import MembershipCard from "@/components/MembershipCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Clock,
  Smartphone,
  Users,
  Star,
  Dumbbell,
  Shield,
} from "lucide-react";

const membershipTiers = [
  {
    tier: "Basic",
    price: "$79",
    period: "/month",
    description: "Perfect for those who want gym access and basic amenities",
    features: [
      "Full gym access during staffed hours",
      "Access to all equipment and training zones",
      "Locker room and shower access",
      "2 group fitness classes per month",
      "Basic fitness assessment",
      "Member app access",
    ],
    highlighted: false,
    popular: false,
  },
  {
    tier: "Unlimited",
    price: "$149",
    period: "/month",
    description: "Our most popular option for dedicated fitness enthusiasts",
    features: [
      "Everything in Basic, plus:",
      "Unlimited group fitness classes",
      "24/7 gym access",
      "Monthly body composition analysis",
      "10% discount on personal training",
      "Sauna access",
      "Guest pass (1 per month)",
      "Priority class booking",
    ],
    highlighted: true,
    popular: true,
  },
  {
    tier: "Elite",
    price: "$249",
    period: "/month",
    description: "The ultimate experience for serious athletes",
    features: [
      "Everything in Unlimited, plus:",
      "4 personal training sessions/month",
      "Custom programming",
      "Nutrition coaching check-ins",
      "Unlimited guest passes",
      "Exclusive member events",
      "Premium locker",
      "Free towel service",
      "Smoothie bar credits ($50/month)",
    ],
    highlighted: false,
    popular: false,
  },
  {
    tier: "Day Pass",
    price: "$25",
    period: "/day",
    description: "Try us out or drop in for a workout",
    features: [
      "Full gym access for one day",
      "All equipment and training zones",
      "Locker room access",
      "One group fitness class",
      "No commitment required",
    ],
    highlighted: false,
    popular: false,
  },
];

const memberPerks = [
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Elite and Unlimited members enjoy round-the-clock gym access",
  },
  {
    icon: Smartphone,
    title: "Member App",
    description: "Book classes, track workouts, and connect with coaches",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Monthly member socials, challenges, and workshops",
  },
  {
    icon: Star,
    title: "Member Rewards",
    description: "Earn points for attendance and referrals",
  },
];

const faqItems = [
  {
    question: "Is there a joining fee?",
    answer: "We waive the joining fee for annual memberships. Monthly memberships have a one-time $50 enrollment fee that covers your fitness assessment and orientation.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes! All memberships can be frozen for up to 3 months per year for travel, injury, or other reasons. Just give us 7 days notice.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "Monthly memberships require 30 days notice to cancel. Annual memberships can be cancelled with 60 days notice and a prorated refund.",
  },
  {
    question: "Do you offer corporate rates?",
    answer: "Absolutely! We partner with local businesses for corporate wellness programs. Contact us for group pricing.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Membership"
        title="Invest in Your <span class='text-gradient'>Strongest Self</span>"
        description="Flexible membership options designed to fit your goals, schedule, and budget."
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        size="large"
      />

      {/* Membership Tiers */}
      <Section>
        <SectionHeader
          subtitle="Choose Your Plan"
          title="Membership Options"
          description="Find the perfect membership for your fitness journey. All memberships include our core amenities."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipTiers.map((tier, index) => (
            <MembershipCard key={index} {...tier} />
          ))}
        </div>
      </Section>

      {/* Member Perks */}
      <Section dark>
        <SectionHeader
          subtitle="Member Benefits"
          title="More Than Just a Gym"
          description="Every membership comes with perks designed to support your fitness journey."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {memberPerks.map((perk, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-white/10 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <perk.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
              <p className="text-gray-400 text-sm">{perk.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              What's Included
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Every Membership Includes
            </h2>
            <p className="text-gray-400 mb-6">
              Regardless of which tier you choose, all Iron & Oak members enjoy these core benefits:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Full equipment access",
                "6 training zones",
                "Locker rooms & showers",
                "Fitness assessment",
                "Member app access",
                "Community support",
                "Clean, modern facility",
                "Expert staff on-site",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Replace this placeholder image with real gym photo */}
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
              alt="Iron & Oak amenities"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section dark>
        <SectionHeader
          subtitle="FAQ"
          title="Common Questions"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {item.question}
              </h3>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join Denver&apos;s strongest community. Schedule a tour and see the facility for yourself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25"
            >
              <Link href="/contact">
                Schedule a Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <a href="tel:+15554782156">Call (555) 478-2156</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
