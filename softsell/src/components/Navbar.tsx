'use client';

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4">
      {/* Site Title */}
      <Link href="/">
        <span className="text-lg font-bold">SoftSell</span>
      </Link>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          aria-label="Toggle dark and light mode"
          title="Toggle dark and light mode"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full border"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Example Select (if you ever add one) */}
        <select aria-label="Choose language" className="border p-1 rounded">
          <option>English</option>
          <option>Spanish</option>
        </select>

        {/* Example Button (Fixes "Get a Quote" button error) */}
        <Link href="/quote">
          <button
            aria-label="Get a quote"
            title="Get a quote"
            className="border px-3 py-1 rounded"
          >
            Get a Quote
          </button>
        </Link>
      </div>
    </nav>
  );
}
