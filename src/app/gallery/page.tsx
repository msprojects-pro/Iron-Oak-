"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Camera, ArrowRight, Filter } from "lucide-react";

// Gallery images with categories
const allImages = [
  // Workouts
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Weight training area", category: "Equipment" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80", alt: "Gym floor", category: "Facility" },
  { src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80", alt: "HIIT class in action", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", alt: "Group fitness class", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", alt: "Gym interior", category: "Facility" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", alt: "Personal training session", category: "Training" },
  { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80", alt: "Olympic lifting platform", category: "Equipment" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", alt: "Bodybuilding training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=800&q=80", alt: "Kettlebell training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&q=80", alt: "Rowing machines", category: "Equipment" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", alt: "Yoga class", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80", alt: "Boxing area", category: "Facility" },
  { src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80", alt: "Outdoor training turf", category: "Facility" },
  { src: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80", alt: "Strength training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80", alt: "Gym community", category: "Community" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80", alt: "Jump rope workout", category: "Training" },
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80", alt: "Weightlifting", category: "Training" },
  { src: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&q=80", alt: "Gym member working out", category: "Community" },
];

const categories = ["All", "Training", "Classes", "Facility", "Equipment", "Community"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Our Gallery"
        title="See Iron & Oak <span class='text-gradient'>In Action</span>"
        description="Take a visual tour of our facility, equipment, and community."
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        size="medium"
      />

      {/* Gallery Section */}
      <Section>
        <SectionHeader
          subtitle="Photo Gallery"
          title="Our Space, Our Community"
          description="Explore our state-of-the-art facility and see our members in action."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <Filter className="w-5 h-5 text-gray-400 mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-card border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={filteredImages} columns={3} />

        {/* Image Count */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Showing {filteredImages.length} of {allImages.length} photos
        </p>
      </Section>

      {/* Facility Highlights */}
      <Section dark>
        <SectionHeader
          subtitle="Facility Highlights"
          title="World-Class Training Space"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
              title: "Strength Zone",
              description: "Rogue squat racks, Eleiko barbells, and premium plates",
            },
            {
              image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
              title: "Main Training Floor",
              description: "12,000 sq ft of open training space",
            },
            {
              image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&q=80",
              title: "Outdoor Turf",
              description: "40-yard turf for functional training and sleds",
            },
            {
              image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80",
              title: "Cardio Zone",
              description: "Concept2 rowers, assault bikes, and ski ergs",
            },
            {
              image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
              title: "Recovery Area",
              description: "Yoga studio and stretching space",
            },
            {
              image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
              title: "Amenities",
              description: "Lockers, showers, and sauna",
            },
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              {/* Replace this placeholder image with real facility photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a tour and experience Iron & Oak in person. We&apos;d love to show you around.
          </p>
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
        </div>
      </Section>
    </>
  );
}
