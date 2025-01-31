"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NotificationPanel } from "@/components/notification-panel";
import { UserDropdown } from "@/components/user-dropdown";

export default function Header() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { theme, setTheme } = useTheme();

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Gamers Arena"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-64 pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {searchResults.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-background border rounded-md shadow-lg">
                <ul className="py-2">
                  {searchResults.map((result: any) => (
                    <li key={result.id} className="px-4 py-2 hover:bg-accent">
                      <Link href={result.url}>{result.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {session ? (
            <div className="flex items-center gap-4">
              <NotificationPanel />
              <UserDropdown user={session.user} />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="sr-only">Toggle theme</span>
            {theme === "dark" ? (
              <span className="h-5 w-5">🌞</span>
            ) : (
              <span className="h-5 w-5">🌙</span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
