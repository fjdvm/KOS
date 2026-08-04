import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Resources } from "@/components/Resources";

export default async function ResourcesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return <Resources user={session.user} />;
}
