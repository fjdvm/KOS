"use client";

import { Shell } from "@/components/Shell";

interface ProjectsProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Projects({ user }: ProjectsProps) {
  return (
    <Shell user={user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Projects</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">Organize your learning roadmaps and outcomes.</p>
    </Shell>
  );
}
