"use client";

import { Shell } from "@/components/Shell";

interface ResourcesProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Resources({ user }: ResourcesProps) {
  return (
    <Shell user={user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Resources</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">Access bookmarked links, videos, and articles.</p>
    </Shell>
  );
}
