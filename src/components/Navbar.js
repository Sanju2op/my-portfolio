// src/components/Navbar.js
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Flame, Gamepad, Github } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 border-b">
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        <Flame className="text-orange-500" />
        <span>Sanjay</span>
        <Gamepad className="text-indigo-500 w-5 h-5 animate-pulse" />
      </Link>

      <div className="flex gap-4 items-center">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-muted-foreground hover:text-foreground transition">
            {label}
          </Link>
        ))}
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/Sanju2op" target="_blank">
            <Github className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </nav>
  );
}
  