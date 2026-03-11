"use client";

import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import ProgramCard from "@/components/ProgramCard";
import CoachCard from "@/components/CoachCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Users,
  Trophy,
  Heart,
  Star,
  Quote,
  ChevronRight,
  Clock,
  MapPin,
  Flame,
  Target,
} from "lucide-react";

// Featured programs for homepage
const featuredPrograms = [
  {
    title: "Powerlifting",
    description:
      "Master the big three lifts with expert coaching and progressive programming.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    category: "Strength",
    duration: "60 min",
  },
  {
    title: "HIIT Classes",
    description:
      "High-intensity interval training to burn fat and boost endurance.",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80",
    category: "Conditioning",
    duration: "45 min",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your specific goals and needs.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    category: "Training",
    duration: "60 min",
  },
];

// Featured coaches for homepage
const featuredCoaches = [
  {
    name: 'Marcus "Oak" Williams',
    role: "Founder / Head Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    bio: "15+ years of coaching experience. Former competitive powerlifter with a passion for building strong communities.",
    specialties: ["Powerlifting", "Strength Training", "Olympic Lifting"],
  },
  {
    name: "Dana Kowalski",
    role: "Strength Director",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    bio: "CSCS certified with expertise in athletic performance and injury prevention.",
    specialties: ["Athletic Performance", "Mobility", "Recovery"],
  },
  {
    name: "Zoe Martinez",
    role: "Group Fitness Lead",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    bio: "Energy-packed instructor specializing in HIIT and group conditioning classes.",
    specialties: ["HIIT", "Bootcamp", "Group Fitness"],
  },
];

// Testimonials
const testimonials = [
  {
    name: "Sarah M.",
    role: "Member since 2020",
    content:
      "Iron & Oak transformed my approach to fitness. The coaches genuinely care about your progress, and the community is incredibly supportive.",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Member since 2021",
    content:
      "Best gym I've ever been to. The programming is top-notch, and the facility is always clean and well-maintained. Worth every penny.",
    rating: 5,
  },
  {
    name: "Jessica L.",
    role: "Member since 2019",
    content:
      "From a complete beginner to competing in my first powerlifting meet - the coaches here made it possible. Can't recommend this place enough!",
    rating: 5,
  },
];

// Stats
const stats = [
  { value: "4.9★", label: "Google Rating", icon: Star },
  { value: "670+", label: "Member Reviews", icon: Users },
  { value: "100%", label: "Certified Coaches", icon: Trophy },
  { value: "89%", label: "Member Retention", icon: Heart },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Boutique Strength & Conditioning"
        title="Forge Your Strength.<br />Build Your Legacy."
        description="Denver's premier fitness destination where strength meets community. Expert coaching, world-class equipment, and a supportive environment to help you achieve your goals."
        primaryCta={{ text: "Join Now", href: "/membership" }}
        secondaryCta={{ text: "View Programs", href: "/programs" }}
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        size="full"
      />

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-white/80" />
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Welcome to Iron & Oak
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Where Strength Meets <span className="text-gradient">Community</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Established in 2019, Iron & Oak Fitness is Denver&apos;s premier boutique
              strength and conditioning studio. We&apos;re more than just a gym—we&apos;re a
              community of athletes, coaches, and fitness enthusiasts dedicated to
              helping each other grow stronger.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our 12,000 sq ft facility features state-of-the-art equipment, six
              dedicated training zones, and a team of certified coaches committed to
              your success. Whether you&apos;re a competitive athlete or just starting
              your fitness journey, you&apos;ll find your home here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/about">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <Link href="/contact">Book a Tour</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Replace this placeholder image with real gym photo */}
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
              alt="Iron & Oak gym interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12,000</p>
                  <p className="text-gray-400 text-sm">Sq Ft Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Programs */}
      <Section dark>
        <SectionHeader
          subtitle="Our Programs"
          title="Training Built for Results"
          description="From strength training to high-intensity conditioning, we offer programs designed to help you reach your fitness goals."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrograms.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5"
          >
            <Link href="/programs">
              View All Programs
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <SectionHeader
          subtitle="Why Iron & Oak"
          title="The Difference Is Clear"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Personalized Approach",
              description:
                "Every member receives a customized fitness plan tailored to their goals.",
            },
            {
              icon: Users,
              title: "Expert Coaching",
              description:
                "100% certified coaches with years of experience in strength and conditioning.",
            },
            {
              icon: Flame,
              title: "Premium Equipment",
              description:
                "Top-of-the-line Rogue and Eleiko equipment across 6 training zones.",
            },
            {
              icon: Heart,
              title: "Supportive Community",
              description:
                "Join a tribe of motivated individuals who lift each other up.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-white/10 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Coaches */}
      <Section dark>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Your Coaches"
          description="World-class coaching from certified professionals who are invested in your success."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCoaches.map((coach, index) => (
            <CoachCard key={index} {...coach} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5"
          >
            <Link href="/coaches">
              Meet the Full Team
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader
          subtitle="Member Stories"
          title="Hear From Our Community"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-white/10"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Replace this placeholder image with real gym photo */}
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
          alt="Join Iron & Oak"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-gradient">Fitness?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join Denver&apos;s strongest community. Get started today with a free
            consultation and gym tour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25"
            >
              <Link href="/membership">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-white">Denver, CO</p>
                <p className="text-gray-400 text-sm">2200 Summit Ridge Plaza</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-white">Open 24/7</p>
                <p className="text-gray-400 text-sm">For Elite Members</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-white">40+ Weekly Classes</p>
                <p className="text-gray-400 text-sm">Max 15 per class</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
