"use client";

import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import ProgramCard from "@/components/ProgramCard";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Flame, Heart, Target, ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";

const programCategories = [
  {
    name: "Strength Training",
    icon: Dumbbell,
    description: "Build raw power and lean muscle with our expert-led strength programs",
    programs: [
      {
        title: "Powerlifting",
        description: "Master the squat, bench, and deadlift with progressive programming and expert technique coaching. Perfect for competitive lifters or those looking to build serious strength.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
        duration: "60 min",
        capacity: "8 per session",
      },
      {
        title: "Olympic Lifting",
        description: "Learn the snatch and clean & jerk from certified USA Weightlifting coaches. Develop explosive power, mobility, and coordination.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
        duration: "75 min",
        capacity: "6 per session",
      },
      {
        title: "Bodybuilding",
        description: "Sculpt your physique with targeted hypertrophy training. Learn advanced techniques, proper form, and nutrition strategies for muscle growth.",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
        duration: "60-90 min",
        capacity: "Open gym",
      },
      {
        title: "Personal Training",
        description: "One-on-one coaching tailored to your specific goals. Work with a dedicated coach who designs custom programming just for you.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
        duration: "60 min",
        capacity: "1-on-1",
      },
    ],
  },
  {
    name: "Conditioning",
    icon: Flame,
    description: "Boost your endurance, burn fat, and improve cardiovascular health",
    programs: [
      {
        title: "HIIT",
        description: "High-intensity interval training that maximizes calorie burn in minimal time. Alternating periods of intense effort with active recovery.",
        image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80",
        duration: "45 min",
        capacity: "15 per class",
      },
      {
        title: "Bootcamp",
        description: "Military-inspired group workouts that combine strength, cardio, and functional movements. Build mental toughness while getting fit.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
        duration: "60 min",
        capacity: "20 per class",
      },
      {
        title: "Kettlebell Training",
        description: "Dynamic full-body workouts using kettlebells to build strength, endurance, and mobility. Great for functional fitness.",
        image: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&q=80",
        duration: "45 min",
        capacity: "12 per class",
      },
      {
        title: "Rowing Workouts",
        description: "Low-impact, high-intensity cardio using Concept2 rowers. Build endurance and full-body strength without joint stress.",
        image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80",
        duration: "45 min",
        capacity: "10 per class",
      },
    ],
  },
  {
    name: "Recovery",
    icon: Heart,
    description: "Restore your body, prevent injury, and optimize performance",
    programs: [
      {
        title: "Yoga",
        description: "Vinyasa and restorative yoga classes designed for athletes. Improve flexibility, balance, and mental clarity.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
        duration: "60 min",
        capacity: "15 per class",
      },
      {
        title: "Stretch Lab",
        description: "Assisted stretching sessions with trained flexibility coaches. Improve range of motion and reduce muscle tension.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
        duration: "30-60 min",
        capacity: "1-on-1",
      },
      {
        title: "Sauna",
        description: "Post-workout recovery in our infrared sauna. Promote muscle recovery, detoxification, and relaxation.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
        duration: "15-30 min",
        capacity: "4 people",
      },
      {
        title: "Massage Therapy",
        description: "Licensed massage therapists offering sports massage, deep tissue, and recovery-focused treatments.",
        image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
        duration: "60-90 min",
        capacity: "1-on-1",
      },
    ],
  },
  {
    name: "Specialty",
    icon: Target,
    description: "Specialized programs for specific goals and populations",
    programs: [
      {
        title: "Nutrition Coaching",
        description: "Work with our registered dietitian to develop a sustainable nutrition plan that supports your fitness goals.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
        duration: "Monthly",
        capacity: "1-on-1",
      },
      {
        title: "Transformation Challenges",
        description: "12-week comprehensive programs combining training, nutrition, and accountability for dramatic results.",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
        duration: "12 weeks",
        capacity: "Group",
      },
      {
        title: "Corporate Wellness",
        description: "Bring fitness to your workplace with custom corporate programs, team-building events, and group rates.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
        duration: "Custom",
        capacity: "Teams",
      },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Training Programs"
        title="Programs Built for<br />Every Goal"
        description="From strength training to recovery, our expert coaches guide you through programs designed for real results."
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
        size="large"
      />

      {/* Program Categories */}
      {programCategories.map((category, catIndex) => (
        <Section key={catIndex} dark={catIndex % 2 === 0}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <category.icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {category.name}
              </h2>
              <p className="text-gray-400">{category.description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.programs.map((program, progIndex) => (
              <ProgramCard
                key={progIndex}
                title={program.title}
                description={program.description}
                image={program.image}
                duration={program.duration}
                capacity={program.capacity}
                category={category.name}
              />
            ))}
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with one of our coaches. We&apos;ll help you find the perfect program for your goals and fitness level.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-primary/25 transition-all"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              View Membership Options
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
