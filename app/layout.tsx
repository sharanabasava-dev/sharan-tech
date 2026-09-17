import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharan-Tech | AI, DevOps & Cloud Solutions",
  description:
    "Modern websites, applications, AI automation and DevOps & Cloud solutions for businesses, startups, freelancers and students.",
  keywords: [
    "Sharan-Tech",
    "website development",
    "AI chatbot",
    "AI agents",
    "DevOps consulting",
    "Cloud consulting",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}