import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account?message=Connecte-toi pour accéder à cet espace.");
  }

  return <>{children}</>;
}