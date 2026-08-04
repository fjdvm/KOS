import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Shell } from "@/components/Shell";

export default async function CoursesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return (
    <Shell user={session.user}>
      <h1 className="text-3xl font-bold tracking-tight text-[#e2e1ec]">Courses</h1>
      <p className="text-[#c4c5d6] text-sm mt-1">Manage and track your learning courses here.</p>
    </Shell>
  );
}
