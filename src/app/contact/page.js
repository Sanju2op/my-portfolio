// app/contact/page.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">Get in Touch</h1>
      <p className="text-muted-foreground text-center">
        Let’s connect and build something cool together — whether it's code or
        games!
      </p>

      <form
        action="https://formsubmit.co/sanjay.lagariya.dev@gmail.com"
        method="POST"
        className="space-y-4">
        <Input name="name" placeholder="Your Name" required />
        <Input name="email" type="email" placeholder="Your Email" required />
        <Textarea name="message" rows={5} placeholder="Your Message" required />

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>

      <div className="flex justify-center gap-6 pt-4">
        <a
          href="https://github.com/Sanju2op"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition">
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-lagariya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition">
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:sanjay.lagariya.dev@gmail.com"
          className="text-muted-foreground hover:text-foreground transition">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
}
