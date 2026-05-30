import Link from "next/link";
import { createClient } from "@/src/lib/supabase/server";

export default async function HeaderAuth() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <>
          <Link
            href="/private"
            className="rounded-full border border-black/10 px-4 py-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
          >
            Continuer
          </Link>

          <Link
            href="/account"
            className="rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
          >
            Compte
          </Link>
        </>
      ) : (
        <Link
          href="/account"
          className="rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
        >
          Se connecter / Créer un compte
        </Link>
      )}
    </div>
  );
}