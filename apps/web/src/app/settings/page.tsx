import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Settings } from "@/components/Settings";

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return <Settings user={session.user} />;
}
