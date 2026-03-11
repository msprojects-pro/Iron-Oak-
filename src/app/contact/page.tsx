"use client";

import Hero from "@/components/Hero";
import Section, { SectionHeader } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 478-2156",
    href: "tel:+15554782156",
  },
  {
    icon: Mail,
    label: "General Inquiries",
    value: "train@ironandoak.fit",
    href: "mailto:train@ironandoak.fit",
  },
  {
    icon: Mail,
    label: "Membership",
    value: "join@ironandoak.fit",
    href: "mailto:join@ironandoak.fit",
  },
  {
    icon: Mail,
    label: "Personal Training",
    value: "pt@ironandoak.fit",
    href: "mailto:pt@ironandoak.fit",
  },
];

const businessHours = [
  { days: "Monday – Thursday", hours: "5:00 AM – 11:00 PM" },
  { days: "Friday", hours: "5:00 AM – 10:00 PM" },
  { days: "Saturday – Sunday", hours: "7:00 AM – 8:00 PM" },
  { days: "Holidays", hours: "8:00 AM – 4:00 PM" },
];

const socialLinks = [
  {
    name: "Instagram",
    handle: "@IronAndOakFit",
    href: "https://instagram.com/IronAndOakFit",
    icon: Instagram,
  },
  {
    name: "Facebook",
    handle: "/IronAndOakFitness",
    href: "https://facebook.com/IronAndOakFitness",
    icon: Facebook,
  },
  {
    name: "YouTube",
    handle: "/IronAndOakTV",
    href: "https://youtube.com/IronAndOakTV",
    icon: Youtube,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Get in Touch"
        title="We'd Love to<br />Hear From You"
        description="Have questions? Want to schedule a tour? Reach out and our team will get back to you within 24 hours."
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
        size="medium"
      />

      {/* Contact Content */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-400">
                      2200 Summit Ridge Plaza<br />
                      Downtown Core<br />
                      Denver, CO 80205
                    </p>
                    <a
                      href="https://maps.google.com/?q=2200+Summit+Ridge+Plaza+Denver+CO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary text-sm mt-2 hover:underline"
                    >
                      Get Directions
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      {businessHours.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-400">{item.days}</span>
                          <span className="text-white">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                      <div>
                        <p className="text-white">{social.name}</p>
                        <p className="text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section dark>
        <SectionHeader
          subtitle="Location"
          title="Find Us in Denver"
        />
        <div className="rounded-2xl overflow-hidden border border-white/10">
          {/* Google Maps Embed - Replace with actual location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.0763763764944!2d-104.9846!3d39.7392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzIxLjEiTiAxMDTCsDU5JzA0LjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Iron & Oak Fitness Location"
          />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a tour of our facility and meet our team. We&apos;re excited to welcome you to the Iron & Oak family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15554782156"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-primary/25 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (555) 478-2156
            </a>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              View Membership Options
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
