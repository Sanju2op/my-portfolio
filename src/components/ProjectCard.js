// src/components/ProjectCard.js
"use client";

import { Github as GitHub, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ title, description, github, liveLink }) {
  return (
    <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm transition hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="flex flex-wrap gap-3">
        {github && (
          <Button variant="outline" size="sm" asChild className="gap-1">
            <a href={github} target="_blank">
              <GitHub className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        )}

        {liveLink && (
          <Button variant="default" size="sm" asChild className="gap-1">
            <a href={liveLink} target="_blank">
              <Link className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
