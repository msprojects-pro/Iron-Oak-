"use client";

import Link from "next/link";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Heart
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Coaches", href: "/coaches" },
];

const supportLinks = [
  { name: "Membership", href: "/membership" },
  { name: "Classes", href: "/classes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/IronAndOakFit",
    icon: Instagram,
    handle: "@IronAndOakFit"
  },
  {
    name: "Facebook",
    href: "https://facebook.com/IronAndOakFitness",
    icon: Facebook,
    handle: "/IronAndOakFitness"
  },
  {
    name: "YouTube",
    href: "https://youtube.com/IronAndOakTV",
    icon: Youtube,
    handle: "/IronAndOakTV"
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Dumbbell className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  IRON <span className="text-primary">&</span> OAK
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Fitness
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Denver&apos;s premier boutique strength and conditioning studio.
              Building stronger bodies and communities since 2019.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  2200 Summit Ridge Plaza<br />
                  Downtown Core, Denver, CO 80205
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+15554782156"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  (555) 478-2156
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:train@ironandoak.fit"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  train@ironandoak.fit
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Mon-Thu: 5AM - 11PM<br />
                  Fri: 5AM - 10PM<br />
                  Sat-Sun: 7AM - 8PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Iron & Oak Fitness. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Denver, CO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
