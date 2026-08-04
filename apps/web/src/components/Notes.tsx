"use client";

import { Shell } from "@/components/Shell";

interface NotesProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Notes({ user }: NotesProps) {
  return (
    <Shell user={user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Notes</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">View and edit your personal notes.</p>
    </Shell>
  );
}
