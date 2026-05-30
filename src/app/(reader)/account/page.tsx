import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";
import DeleteAccountButton from "./DeleteAccountButton";

async function signInWithGoogle() {
  "use server";

  const supabase = await createClient();

  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback?next=/account",
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}

async function signUp(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:3000/auth/callback?next=/account",
    },
  });

  if (error) {
    redirect(`/account?message=${encodeURIComponent(error.message)}`);
  }

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      email: data.user.email,
      updated_at: new Date().toISOString(),
    });
  }

  redirect(
    "/account?message=" +
      encodeURIComponent("Merci, vérifie ton adresse mail pour activer ton compte.")
  );
}

async function signIn(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/account?message=${encodeURIComponent(error.message)}`);
  }

  redirect("/account");
}

async function signOut() {
  "use server";

  const supabase = await createClient();
  await supabase.auth.signOut({ scope: "local" });
  redirect("/account?message=" + encodeURIComponent("Tu es déconnecté."));
}

async function updateProfile(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account?message=" + encodeURIComponent("Session expirée."));
  }

  const fullName = String(formData.get("full_name") ?? "").trim();
  const avatarUrl = String(formData.get("avatar_url") ?? "").trim();

  const { error } = await supabase.from("profiles").upsert({
    id: user.id,
    email: user.email,
    full_name: fullName || null,
    avatar_url: avatarUrl || null,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    redirect(`/account?message=${encodeURIComponent(error.message)}`);
  }

  redirect("/account?message=" + encodeURIComponent("Profil mis à jour."));
}

export default async function AccountPage({
  searchParams,
}: {
  searchParams?: Promise<{ message?: string }>;
}) {
  const params = await searchParams;
  const message = params?.message;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = user
    ? await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .maybeSingle()
    : null;

  const fullName = profile?.data?.full_name ?? "";
  const avatarUrl = profile?.data?.avatar_url ?? "";

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold">Compte</h1>

      {message ? (
        <p className="rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          {message}
        </p>
      ) : null}

      {user ? (
        <>
          <div className="space-y-4 rounded-2xl border border-black/10 bg-white/40 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="space-y-1">
              <p className="text-sm text-black/60 dark:text-white/60">Email</p>
              <p>{user.email}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-black/60 dark:text-white/60">Nom affiché</p>
              <p>{fullName || "Non renseigné"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-black/60 dark:text-white/60">Avatar URL</p>
              <p className="break-all">{avatarUrl || "Non renseigné"}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/private"
                className="rounded-full border border-black/10 px-4 py-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
              >
                Aller à la page privée
              </Link>

              <Link
                href="/private/settings"
                className="rounded-full border border-black/10 px-4 py-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
              >
                Réglages privés
              </Link>

              <form action={signOut}>
                <button
                  type="submit"
                  className="rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
                >
                  Se déconnecter
                    
                </button>
                
              </form>
              <DeleteAccountButton />
            </div>
          </div>

          <form
            action={updateProfile}
            className="space-y-3 rounded-2xl border border-black/10 bg-white/40 p-6 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <h2 className="text-xl font-medium">Mettre à jour le profil</h2>

            <input
              name="full_name"
              type="text"
              placeholder="Nom affiché"
              defaultValue={fullName}
              className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 dark:border-white/10"
            />

            <input
              name="avatar_url"
              type="url"
              placeholder="https://..."
              defaultValue={avatarUrl}
              className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 dark:border-white/10"
            />

            <button
              type="submit"
              className="rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
            >
              Enregistrer le profil
            </button>
          </form>
        </>
      ) : (
        <>
          <form action={signInWithGoogle}>
            <button
              type="submit"
              className="w-full rounded-full border border-black/10 px-5 py-3 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              Continuer avec Google
            </button>
          </form>

          <form
            action={signIn}
            className="space-y-3 rounded-2xl border border-black/10 bg-white/40 p-6 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <h2 className="text-xl font-medium">Connexion</h2>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 dark:border-white/10"
            />
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              required
              className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 dark:border-white/10"
            />
            <button
              type="submit"
              className="rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
            >
              Se connecter
            </button>
          </form>

          <form
            action={signUp}
            className="space-y-3 rounded-2xl border border-black/10 bg-white/40 p-6 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <h2 className="text-xl font-medium">Créer un compte</h2>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 dark:border-white/10"
            />
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              required
              className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 dark:border-white/10"
            />
            <button
              type="submit"
              className="rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
            >
              Créer un compte
            </button>
          </form>
        </>
      )}
    </main>
  );
}