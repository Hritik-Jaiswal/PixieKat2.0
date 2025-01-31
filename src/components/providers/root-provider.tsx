"use client";

import ThemeProvider from "./theme-provider";
import { useEffect } from "react";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Handle preloader
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* Preloader */}
      <div id="preloader" className="fixed inset-0 z-50 bg-background flex items-center justify-center">
        <img src="/images/giphy.gif" alt="Loading..." className="w-32 h-32" />
      </div>

      {children}
    </ThemeProvider>
  );
}
