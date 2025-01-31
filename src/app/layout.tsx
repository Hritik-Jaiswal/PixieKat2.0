import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import RootProvider from "@/components/providers/root-provider";
import AuthProvider from "@/components/providers/auth-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamers Arena - Game Services & Digital Products",
  description:
    "Your one-stop shop for gaming services, gift cards, and digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <RootProvider>
            <div
              className={cn(
                "min-h-screen bg-background antialiased"
              )}
              style={{
                backgroundImage: 'url("/images/body.jpg")',
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              <Header />
              <div className="pt-16">{children}</div>
              <Footer />
            </div>
          </RootProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
