import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Shell } from "@/components/Shell";

export default async function TasksPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return (
    <Shell user={session.user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Tasks</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">Track your pending study items and assignments.</p>
    </Shell>
  );
}
