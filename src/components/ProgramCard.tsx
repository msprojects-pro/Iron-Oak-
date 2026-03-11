"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  duration?: string;
  capacity?: string;
  href?: string;
  category?: string;
}

export default function ProgramCard({
  title,
  description,
  image,
  duration,
  capacity,
  href = "/programs",
  category,
}: ProgramCardProps) {
  return (
    <Link href={href}>
      <Card className="group bg-card border-border overflow-hidden card-hover cursor-pointer h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {/* Replace this placeholder image with real program photo */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          {category && (
            <span className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            )}
            {capacity && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{capacity}</span>
              </div>
            )}
          </div>

          {/* Learn More */}
          <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
