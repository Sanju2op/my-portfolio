// src/components/AboutSection.js
"use client";

import { Code, Gamepad2, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto py-16 space-y-6">
      <h2 className="text-3xl font-bold text-center">👨‍💻 About Me</h2>

      <p className="text-muted-foreground text-lg leading-relaxed text-center">
        I&apos;m Sanjay Lagariya, an MCA student with a strong interest in
        backend development and building real-world web applications. I have
        experience developing full-stack projects and solving data structures
        and algorithms problems using Java. I&apos;m passionate about technology
        and aspire to contribute to innovative teams at leading tech companies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-4 border rounded-xl text-center space-y-2">
          <Code className="mx-auto text-orange-500 w-8 h-8" />
          <h3 className="font-semibold">Web & Backend Dev</h3>
          <p className="text-sm text-muted-foreground">
            I build full-stack apps, e-commerce platforms & feature clones using
            React, Next.js, and Node.
          </p>
        </div>

        <div className="p-4 border rounded-xl text-center space-y-2">
          <Gamepad2 className="mx-auto text-purple-500 w-8 h-8" />
          <h3 className="font-semibold">Gaming Spirit</h3>
          <p className="text-sm text-muted-foreground">
            Gamer at heart. Learned persistence, strategy, and flow from
            mastering PUBG with bad ping & zero setup.
          </p>
        </div>

        <div className="p-4 border rounded-xl text-center space-y-2">
          <Brain className="mx-auto text-green-500 w-8 h-8" />
          <h3 className="font-semibold">Problem Solver</h3>
          <p className="text-sm text-muted-foreground">
            Obsessed with logic, I love solving DSA problems, learning new
            patterns, and writing clean backend logic.
          </p>
        </div>
      </div>

      <div className="text-center pt-6">
        <h4 className="font-semibold">Tech Stack I&apos;m Learning & Using:</h4>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {[
            "JavaScript",
            "Next.js",
            "Node.js",
            "Tailwind",
            "MongoDB",
            "Java",
            "DSA",
            "GitHub",
            "Framer Motion",
            "ShadCN",
          ].map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
