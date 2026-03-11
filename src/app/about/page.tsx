"use client";

import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Star,
  Users,
  Trophy,
  Heart,
  Award,
  Clock,
  Dumbbell,
  Target,
  Flame,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const stats = [
  { value: "4.9★", label: "Google Rating", description: "Based on 670+ reviews", icon: Star },
  { value: "670+", label: "Member Reviews", description: "And counting", icon: Users },
  { value: "100%", label: "Certified Coaches", description: "All trainers certified", icon: Trophy },
  { value: "89%", label: "Member Retention", description: "Industry-leading rate", icon: Heart },
];

const facilityFeatures = [
  { icon: Dumbbell, name: "12,000 sq ft Facility", description: "Spacious training areas with room to move" },
  { icon: Target, name: "6 Equipment Zones", description: "Dedicated spaces for every workout style" },
  { icon: Flame, name: "Sauna & Recovery", description: "Post-workout recovery amenities" },
  { icon: Users, name: "Locker Rooms & Showers", description: "Clean, private changing facilities" },
  { icon: Heart, name: "Towel Service", description: "Fresh towels provided daily" },
  { icon: Award, name: "Protein Bar & Smoothies", description: "Fuel up before or after your workout" },
  { icon: Clock, name: "Outdoor Training Turf", description: "40-yard turf for functional training" },
  { icon: Star, name: "Kids Zone Childcare", description: "Safe space for your little ones" },
];

const values = [
  {
    title: "Strength in Community",
    description:
      "We believe that together, we achieve more. Our supportive community lifts each other up—literally and figuratively.",
  },
  {
    title: "Excellence in Coaching",
    description:
      "Every coach is certified, experienced, and committed to your success. No shortcuts, just results.",
  },
  {
    title: "Inclusive Environment",
    description:
      "Fitness is for everyone. We welcome all levels, backgrounds, and goals with open arms.",
  },
  {
    title: "Continuous Growth",
    description:
      "We never stop learning. Our coaches pursue ongoing education to bring you the latest training methods.",
  },
];

const timeline = [
  { year: "2019", event: "Iron & Oak founded in Denver's Downtown Core" },
  { year: "2020", event: "Expanded to 12,000 sq ft facility with 6 training zones" },
  { year: "2021", event: "Launched youth athletic development program" },
  { year: "2022", event: "Named 'Best Gym in Denver' by Denver Fitness Awards" },
  { year: "2023", event: "Opened outdoor training turf and recovery center" },
  { year: "2024", event: "Donated $50K+ to local youth sports programs" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Our Story"
        title="Building Stronger Bodies<br />& Communities Since 2019"
        description="Iron & Oak Fitness was born from a simple belief: everyone deserves access to world-class coaching in a supportive, community-driven environment."
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        size="large"
      />

      {/* Mission Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              More Than Just a Gym
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Iron & Oak Fitness is Denver&apos;s premier boutique strength and conditioning
              studio. Established in 2019, we&apos;ve built a community-driven environment
              where athletes of all levels come together to pursue their fitness goals.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our philosophy is simple: combine world-class coaching with a supportive
              community, and amazing things happen. Whether you&apos;re a competitive
              powerlifter, a weekend warrior, or just starting your fitness journey,
              you&apos;ll find your place here.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We&apos;re proud to be locally owned and operated, with deep roots in the
              Denver community. Through our youth sports partnerships and charitable
              initiatives, we&apos;re committed to making fitness accessible to all.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">
                Visit Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            {/* Replace this placeholder image with real gym photo */}
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
              alt="Iron & Oak community"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-white/10">
              <p className="text-3xl font-bold text-primary">$50K+</p>
              <p className="text-gray-400 text-sm">Donated to Youth Sports</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section dark>
        <SectionHeader
          subtitle="By The Numbers"
          title="Excellence You Can Count On"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card border border-white/10 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <SectionHeader
          subtitle="Our Values"
          title="What We Stand For"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-white/10 flex gap-6 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Facility */}
      <Section dark>
        <SectionHeader
          subtitle="Our Facility"
          title="World-Class Training Space"
          description="Our 12,000 sq ft facility is designed for serious training, with premium equipment and amenities to support your fitness journey."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-white/10 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-1">{feature.name}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader
          subtitle="Our Journey"
          title="Growing Stronger Together"
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[4.5rem] top-0 bottom-0 w-0.5 bg-white/10" />
            
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-primary font-bold">{item.year}</span>
                </div>
                <div className="pt-3">
                  <p className="text-white text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Replace this placeholder image with real gym photo */}
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=80"
          alt="Join Iron & Oak"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience Iron & Oak for Yourself
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a tour and see why our members call Iron & Oak their fitness home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg"
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
              <Link href="/membership">View Membership Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
