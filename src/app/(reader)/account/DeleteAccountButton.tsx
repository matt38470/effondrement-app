"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteAccountButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible."
    );

    if (!confirmed) return;

    setLoading(true);

    const res = await fetch("/api/delete-account", {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Erreur lors de la suppression du compte.");
      setLoading(false);
      return;
    }

    router.push("/account?message=Compte supprimé.");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-600 hover:bg-red-500/15 disabled:opacity-50 dark:text-red-300"
    >
      {loading ? "Suppression..." : "Supprimer mon compte"}
    </button>
  );
}