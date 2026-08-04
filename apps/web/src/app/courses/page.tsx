import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Courses } from "@/components/Courses";

export default async function CoursesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return <Courses user={session.user} />;
}
