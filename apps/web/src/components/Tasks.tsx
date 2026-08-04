"use client";

import { Shell } from "@/components/Shell";

interface TasksProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Tasks({ user }: TasksProps) {
  return (
    <Shell user={user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Tasks</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">Track your pending study items and assignments.</p>
    </Shell>
  );
}
