"use client";

import { Shell } from "@/components/Shell";

interface CoursesProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Courses({ user }: CoursesProps) {
  return (
    <Shell user={user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Courses</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">Manage and track your learning courses here.</p>
    </Shell>
  );
}
