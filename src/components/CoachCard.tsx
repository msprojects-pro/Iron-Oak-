"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin, Twitter } from "lucide-react";

interface CoachCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  certifications?: string[];
  specialties?: string[];
  social?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export default function CoachCard({
  name,
  role,
  image,
  bio,
  certifications,
  specialties,
  social,
}: CoachCardProps) {
  return (
    <Card className="group bg-card border-border overflow-hidden card-hover h-full">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        {/* Replace this placeholder image with real coach photo */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Social Links Overlay */}
        {social && (
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{role}</p>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{bio}</p>

        {/* Specialties */}
        {specialties && specialties.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {specialties.slice(0, 3).map((specialty) => (
              <Badge
                key={specialty}
                variant="secondary"
                className="bg-muted text-gray-300 text-xs"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Certifications
            </p>
            <p className="text-sm text-gray-400">
              {certifications.join(" • ")}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
