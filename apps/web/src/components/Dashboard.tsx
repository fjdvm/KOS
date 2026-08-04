"use client";

import { Shell } from "@/components/Shell";
import {
  Sparkles,
  BookOpen,
  FileText,
  CheckSquare,
  FolderGit2,
  Library,
  Calendar,
} from "lucide-react";

interface DashboardProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Dashboard({ user }: DashboardProps) {
  const stats = [
    { name: "Courses", value: 0, icon: BookOpen },
    { name: "Notes", value: 0, icon: FileText },
    { name: "Tasks", value: 0, icon: CheckSquare },
    { name: "Projects", value: 0, icon: FolderGit2 },
    { name: "Resources", value: 0, icon: Library },
  ];

  return (
    <Shell user={user}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">
            Welcome back, {user.name.split(" ")[0]}
          </h1>
          <p className="text-[#c4c5d6] text-sm mt-1">
            Here's an overview of your personal learning workspace.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2A313D] bg-[#171A21] text-xs font-semibold text-[#b7c4ff] w-fit">
          <Sparkles className="h-4 w-4" />
          <span>0 Day Streak</span>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="border border-[#2A313D] bg-[#171A21] p-4 rounded-xl flex flex-col justify-between h-28 hover:border-[#b7c4ff]/30 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8e90a0]">
                  {stat.name}
                </span>
                <Icon className="h-4 w-4 text-[#8e90a0]" />
              </div>
              <span className="text-3xl font-bold text-[#e2e1ec]">
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {/* Streak & Daily View */}
        <div className="border border-[#2A313D] bg-[#171A21] rounded-xl p-6 flex flex-col lg:col-span-1">
          <h2 className="text-sm font-bold text-[#e2e1ec] uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#b7c4ff]" />
            Study Streak
          </h2>
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <div className="h-12 w-12 rounded-full bg-[#2A313D] flex items-center justify-center text-[#8e90a0] mb-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-xs font-medium text-[#c4c5d6] max-w-[200px]">
              Complete a lesson or task today to start your learning streak!
            </p>
          </div>
        </div>

        {/* Action items */}
        <div className="border border-[#2A313D] bg-[#171A21] rounded-xl p-6 flex flex-col lg:col-span-2">
          <h2 className="text-sm font-bold text-[#e2e1ec] uppercase tracking-wider mb-4 flex items-center gap-2">
            <CheckSquare className="h-4 w-4 text-[#b7c4ff]" />
            Today's Learning Focus
          </h2>
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <p className="text-sm font-semibold text-[#e2e1ec]">
              No tasks due today
            </p>
            <p className="text-xs text-[#8e90a0] mt-1 max-w-sm">
              Use the sidebar to create new courses, take notes, or define projects to plan your learning journey.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
