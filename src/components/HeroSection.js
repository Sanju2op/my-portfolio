// src/components/HeroSection.js
"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-6 py-24 text-center items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
        Hi, I’m <span className="text-orange-500">Sanjay Lagariya</span> 👋
      </h1>
      <p className="max-w-xl text-muted-foreground text-lg">
        I&apos;m an MCA student with a strong interest in web development and backend
        engineering. I enjoy building practical applications and continuously
        improving my problem-solving skills. I&apos;m currently focused on learning,
        growing, and contributing meaningfully to a forward-thinking tech
        company 
      </p>
      <div className="flex gap-4">
        <Link href="/projects">
          <Button>
            View Projects
            <MoveRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact Me</Button>
        </Link>
      </div>
    </section>
  );
}
