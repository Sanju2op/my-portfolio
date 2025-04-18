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
        I’m an MCA student passionate about web development, backend systems,
        and gaming. I build apps, solve problems, and dream of joining tech
        giants like Google, Amazon, or game studios like PUBG & COD.
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
