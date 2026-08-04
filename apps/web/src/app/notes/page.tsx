import { auth } from "auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Notes } from "@/components/Notes";

export default async function NotesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return <Notes user={session.user} />;
}
