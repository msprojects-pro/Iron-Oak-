"use client";

import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Clock,
  Users,
  Flame,
  Dumbbell,
  Calendar,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

const classCategories = [
  {
    name: "HIIT",
    description: "High-intensity interval training for maximum calorie burn",
    duration: "45 min",
    capacity: 15,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80",
    schedule: [
      { day: "Monday", times: ["6:00 AM", "9:30 AM", "5:30 PM"] },
      { day: "Wednesday", times: ["6:00 AM", "9:30 AM", "6:30 PM"] },
      { day: "Friday", times: ["6:00 AM", "9:30 AM", "5:30 PM"] },
      { day: "Saturday", times: ["8:00 AM", "10:00 AM"] },
    ],
    coach: "Zoe Martinez",
    level: "All Levels",
  },
  {
    name: "Bootcamp",
    description: "Military-inspired full-body workouts that build strength and endurance",
    duration: "60 min",
    capacity: 20,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    schedule: [
      { day: "Tuesday", times: ["5:30 AM", "6:00 PM"] },
      { day: "Thursday", times: ["5:30 AM", "6:00 PM"] },
      { day: "Saturday", times: ["9:00 AM"] },
    ],
    coach: "Zoe Martinez",
    level: "Intermediate",
  },
  {
    name: "Kettlebell",
    description: "Dynamic full-body training for functional strength and power",
    duration: "45 min",
    capacity: 12,
    image: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&q=80",
    schedule: [
      { day: "Monday", times: ["7:00 AM", "5:00 PM"] },
      { day: "Wednesday", times: ["7:00 AM", "5:00 PM"] },
      { day: "Friday", times: ["7:00 AM"] },
    ],
    coach: "Marcus Williams",
    level: "All Levels",
  },
  {
    name: "Strength Circuits",
    description: "Build muscle and burn fat with resistance training circuits",
    duration: "50 min",
    capacity: 15,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    schedule: [
      { day: "Tuesday", times: ["9:30 AM", "5:30 PM"] },
      { day: "Thursday", times: ["9:30 AM", "5:30 PM"] },
      { day: "Saturday", times: ["11:00 AM"] },
    ],
    coach: "Dana Kowalski",
    level: "All Levels",
  },
  {
    name: "Rowing",
    description: "Low-impact cardio that builds full-body endurance",
    duration: "45 min",
    capacity: 10,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80",
    schedule: [
      { day: "Monday", times: ["6:00 PM"] },
      { day: "Wednesday", times: ["6:00 PM"] },
      { day: "Friday", times: ["6:00 PM"] },
    ],
    coach: "Dana Kowalski",
    level: "All Levels",
  },
  {
    name: "Yoga",
    description: "Recovery-focused yoga for flexibility and mindfulness",
    duration: "60 min",
    capacity: 15,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    schedule: [
      { day: "Tuesday", times: ["7:00 PM"] },
      { day: "Thursday", times: ["7:00 PM"] },
      { day: "Sunday", times: ["10:00 AM"] },
    ],
    coach: "Ryan Cho",
    level: "All Levels",
  },
];

const weeklySchedule = [
  { day: "Monday", hours: "5:00 AM - 11:00 PM", classes: 8 },
  { day: "Tuesday", hours: "5:00 AM - 11:00 PM", classes: 7 },
  { day: "Wednesday", hours: "5:00 AM - 11:00 PM", classes: 8 },
  { day: "Thursday", hours: "5:00 AM - 11:00 PM", classes: 7 },
  { day: "Friday", hours: "5:00 AM - 10:00 PM", classes: 6 },
  { day: "Saturday", hours: "7:00 AM - 8:00 PM", classes: 5 },
  { day: "Sunday", hours: "7:00 AM - 8:00 PM", classes: 2 },
];

export default function ClassesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Group Classes"
        title="Train Together,<br />Grow Together"
        description="40+ weekly classes designed to push your limits and build lasting results. All levels welcome."
        backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
        size="large"
      />

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">40+</p>
              <p className="text-white/80 text-sm">Weekly Classes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">15</p>
              <p className="text-white/80 text-sm">Max Per Class</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">6</p>
              <p className="text-white/80 text-sm">Class Types</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Types */}
      <Section>
        <SectionHeader
          subtitle="Our Classes"
          title="Find Your Workout Style"
          description="From high-intensity conditioning to restorative recovery, we have classes for every goal."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classCategories.map((classItem, index) => (
            <div
              key={index}
              className="group bg-card border border-white/10 rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {/* Replace this placeholder image with real class photo */}
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {classItem.level}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {classItem.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {classItem.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Max {classItem.capacity}</span>
                  </div>
                </div>

                {/* Coach */}
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">Coach {classItem.coach}</span>
                </div>

                {/* Schedule Preview */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    This Week
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {classItem.schedule.slice(0, 3).map((s, i) => (
                      <span
                        key={i}
                        className="text-xs bg-muted px-2 py-1 rounded text-gray-400"
                      >
                        {s.day.slice(0, 3)}
                      </span>
                    ))}
                    {classItem.schedule.length > 3 && (
                      <span className="text-xs text-primary">
                        +{classItem.schedule.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Weekly Schedule */}
      <Section dark>
        <SectionHeader
          subtitle="Schedule"
          title="Weekly Class Schedule"
          description="Plan your week with our comprehensive class schedule."
        />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">
                  Day
                </th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">
                  Hours
                </th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">
                  Classes
                </th>
              </tr>
            </thead>
            <tbody>
              {weeklySchedule.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 text-white font-medium">{row.day}</td>
                  <td className="py-4 px-4 text-gray-400">{row.hours}</td>
                  <td className="py-4 px-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      {row.classes} classes
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Booking Info */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Book Your Spot
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Reserve Your Class in <span className="text-gradient">Seconds</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              With our member app, booking classes is quick and easy. Reserve your
              spot up to 7 days in advance and never miss your favorite workout.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Book classes up to 7 days in advance",
                "Get reminders before class starts",
                "Cancel with 2 hours notice",
                "Track your attendance history",
                "Earn rewards for consistent attendance",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/membership">
                Become a Member
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            {/* Replace this placeholder image with real class photo */}
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
              alt="Group fitness class"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Replace this placeholder image with real gym photo */}
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
          alt="Join a class"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your First Class is <span className="text-gradient">Free</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Try any class on us. No commitment required. Just bring your energy
            and we&apos;ll take care of the rest.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25"
          >
            <Link href="/contact">
              Book Your Free Class
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
