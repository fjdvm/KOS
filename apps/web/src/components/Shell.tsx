"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "auth/client";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  CheckSquare,
  FolderGit2,
  Library,
  Settings,
  LogOut,
  Search,
  User as UserIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

interface ShellProps {
  children: React.ReactNode;
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Shell({ children, user }: ShellProps) {
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Notes", href: "/notes", icon: FileText },
    { name: "Tasks", href: "/tasks", icon: CheckSquare },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Resources", href: "/resources", icon: Library },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-[#0F1115] text-[#e2e1ec] font-sans">
        {/* Pinned left-docked Shadcn Sidebar */}
        <Sidebar className="border-r border-[#2A313D]">
          {/* Sidebar Header */}
          <SidebarHeader className="h-14 px-4 border-b border-[#2A313D] flex flex-row items-center gap-2">
            <img src="/kos-logo.png" alt="KnowledgeOS Logo" className="h-7 w-auto object-contain" />
            <span className="font-bold text-sm tracking-tight text-[#e2e1ec] group-data-[collapsible=icon]:hidden">
              KnowledgeOS
            </span>
          </SidebarHeader>

          {/* Sidebar Navigation Content */}
          <SidebarContent className="px-2 py-4">
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          isActive={isActive}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all outline-none",
                            isActive
                              ? "bg-[#171A21] text-[#b7c4ff] border border-[#2A313D]"
                              : "text-[#c4c5d6] hover:bg-[#171A21]/50 hover:text-[#e2e1ec]"
                          )}
                          tooltip={item.name}
                          render={<Link href={item.href} />}
                        >
                          <Icon className={cn("h-4.5 w-4.5 shrink-0", isActive ? "text-[#b7c4ff]" : "text-[#c4c5d6]")} />
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          {/* Sidebar Footer */}
          <SidebarFooter className="p-3 border-t border-[#2A313D] bg-[#171A21]/20 flex flex-col gap-2">
            <div className="flex items-center gap-3 px-2 py-1.5 group-data-[collapsible=icon]:hidden">
              <div className="h-8 w-8 rounded-full bg-[#2A313D] flex items-center justify-center border border-[#2A313D] overflow-hidden shrink-0">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <UserIcon className="h-4 w-4 text-[#8e90a0]" />
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-[#e2e1ec] truncate">{user.name}</span>
                <span className="text-[10px] text-[#8e90a0] truncate">{user.email}</span>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-all w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-red-400/50"
              title="Sign Out"
            >
              <LogOut className="h-4.5 w-4.5 shrink-0" />
              <span className="group-data-[collapsible=icon]:hidden">Sign Out</span>
            </button>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content Area using SidebarInset */}
        <SidebarInset className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#0F1115] border-0">
          {/* Top Header / Command Bar */}
          <header className="h-14 border-b border-[#2A313D] bg-[#0F1115] flex items-center justify-between px-6 shrink-0 z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center text-xs text-[#8e90a0] font-medium gap-2">
              <span>Workspace</span>
              <span className="text-[#2A313D] font-bold">/</span>
              <span className="text-[#e2e1ec] capitalize">
                {pathname === "/" ? "dashboard" : pathname.replace("/", "")}
              </span>
            </div>

            {/* Global Search Trigger */}
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-between w-64 px-3 py-1.5 border border-[#2A313D] rounded-lg bg-[#171A21] text-xs text-[#8e90a0] hover:border-[#b7c4ff]/50 hover:text-[#c4c5d6] transition-all outline-none">
                <div className="flex items-center gap-2">
                  <Search className="h-3.5 w-3.5" />
                  <span>Search...</span>
                </div>
                <kbd className="px-1.5 py-0.5 text-[9px] bg-[#2A313D] border border-[#2A313D] rounded text-[#e2e1ec]">
                  ⌘K
                </kbd>
              </button>
            </div>
          </header>

          {/* Content Canvas */}
          <main className="flex-1 overflow-y-auto px-6 py-8">
            <div className="max-w-[1200px] mx-auto w-full h-full flex flex-col">
              {children}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
