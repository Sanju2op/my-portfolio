// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanjay Lagariya | Portfolio",
  description: "Developer. Gamer. Dreamer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="px-4 md:px-16 lg:px-24 py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
