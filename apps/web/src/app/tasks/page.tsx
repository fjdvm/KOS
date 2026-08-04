import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Tasks } from "@/components/Tasks";

export default async function TasksPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return <Tasks user={session.user} />;
}
