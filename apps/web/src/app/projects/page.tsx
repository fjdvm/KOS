import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Projects } from "@/components/Projects";

export default async function ProjectsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return <Projects user={session.user} />;
}
