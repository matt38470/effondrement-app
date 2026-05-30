import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";

export default async function PrivatePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account?message=Connecte-toi pour accéder à cette page.");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Page privée</h1>
      <p className="mt-4">Bienvenue {user.email}</p>
    </main>
  );
}