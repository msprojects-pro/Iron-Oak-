"use client";

import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import CoachCard from "@/components/CoachCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, ArrowRight, Users, Trophy, Star } from "lucide-react";

const coaches = [
  {
    name: 'Marcus "Oak" Williams',
    role: "Founder / Head Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    bio: "With over 15 years of coaching experience, Marcus founded Iron & Oak to create a community-focused gym where everyone can pursue strength. A former competitive powerlifter with a 600lb squat, he brings both expertise and passion to every session.",
    certifications: ["CSCS", "USA Weightlifting Level 2", "NASM-CPT", "Precision Nutrition"],
    specialties: ["Powerlifting", "Olympic Lifting", "Athletic Performance"],
    social: {
      instagram: "https://instagram.com/coachoak",
      linkedin: "https://linkedin.com/in/marcuswilliams",
    },
  },
  {
    name: "Dana Kowalski",
    role: "Strength Director",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    bio: "Dana oversees all strength programming at Iron & Oak. With a Master's in Exercise Science and experience training professional athletes, she brings evidence-based programming and meticulous attention to technique.",
    certifications: ["CSCS", "MS Exercise Science", "USAW Level 1", "FMS Certified"],
    specialties: ["Athletic Performance", "Mobility", "Injury Prevention"],
    social: {
      instagram: "https://instagram.com/danakowalski",
      twitter: "https://twitter.com/danakowalski",
    },
  },
  {
    name: "Dr. Aisha Patel",
    role: "Nutrition Coach",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
    bio: "Dr. Patel brings a scientific approach to nutrition coaching. As a registered dietitian with a PhD in Sports Nutrition, she helps members optimize their diet for performance, body composition, and overall health.",
    certifications: ["PhD Sports Nutrition", "RD", "CISSN", "Precision Nutrition Level 2"],
    specialties: ["Sports Nutrition", "Body Composition", "Performance Optimization"],
    social: {
      instagram: "https://instagram.com/draishapatel",
      linkedin: "https://linkedin.com/in/aishapatel",
    },
  },
  {
    name: "Ryan Cho",
    role: "Mobility Specialist",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    bio: "Ryan specializes in helping members move better and recover faster. With certifications in multiple modalities and a background in physical therapy, he's our go-to expert for mobility, stretching, and injury prevention.",
    certifications: ["DPT", "FRCms", "FMS Level 2", "Stick Mobility Certified"],
    specialties: ["Mobility", "Recovery", "Injury Prevention", "Stretch Therapy"],
    social: {
      instagram: "https://instagram.com/ryanchomobility",
    },
  },
  {
    name: "Zoe Martinez",
    role: "Group Fitness Lead",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    bio: "Zoe brings infectious energy to every class she leads. Specializing in HIIT and group conditioning, she creates challenging, fun workouts that push you to your limits while building a supportive team atmosphere.",
    certifications: ["ACE Group Fitness", "CrossFit Level 2", "TRX Certified", "Les Mills"],
    specialties: ["HIIT", "Bootcamp", "Group Fitness", "Functional Training"],
    social: {
      instagram: "https://instagram.com/zoemartinezfit",
      twitter: "https://twitter.com/zoemartinezfit",
    },
  },
];

const teamStats = [
  { value: "15+", label: "Years Combined Experience", icon: Star },
  { value: "20+", label: "Certifications", icon: Award },
  { value: "500+", label: "Clients Trained", icon: Users },
  { value: "100%", label: "Certified Coaches", icon: Trophy },
];

export default function CoachesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Our Team"
        title="Meet Your Coaches"
        description="World-class coaching from certified professionals who are invested in your success."
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
        size="large"
      />

      {/* Team Stats */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
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

      {/* Coaches Grid */}
      <Section>
        <SectionHeader
          subtitle="Expert Guidance"
          title="The Team Behind Your Transformation"
          description="Every coach at Iron & Oak is certified, experienced, and passionate about helping you reach your goals."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard key={index} {...coach} />
          ))}
        </div>
      </Section>

      {/* Why Our Coaches */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Why Our Coaches
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Expertise That Makes <span className="text-gradient">the Difference</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At Iron & Oak, we believe that great coaching is the foundation of great results.
              That&apos;s why every coach on our team is not only certified, but also brings
              years of practical experience and a genuine passion for helping others succeed.
            </p>
            <ul className="space-y-4">
              {[
                "All coaches hold nationally recognized certifications",
                "Continuous education and training updates",
                "Experience with all fitness levels and goals",
                "Personalized attention and programming",
                "Supportive, motivational coaching style",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* Replace this placeholder image with real coaching photo */}
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="Coach with client"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation and meet the coach who&apos;ll help you achieve your fitness goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25"
          >
            <Link href="/contact">
              Book Your Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
