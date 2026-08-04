"use client";

import { Shell } from "@/components/Shell";

interface SettingsProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Settings({ user }: SettingsProps) {
  return (
    <Shell user={user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Settings</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">Configure your personal workspace settings.</p>
    </Shell>
  );
}
