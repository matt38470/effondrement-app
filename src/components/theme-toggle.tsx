"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Changer le thème"
        className="rounded-full border border-white/10 px-3 py-2 text-sm text-gray-300"
      >
        Thème
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Changer le thème"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-white/10 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
    >
      {isDark ? "Mode clair" : "Mode sombre"}
    </button>
  );
}