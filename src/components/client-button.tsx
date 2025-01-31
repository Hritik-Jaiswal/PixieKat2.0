"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ClientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "default" | "sm" | "lg";
  showArrow?: boolean;
}

export default function ClientButton({
  children,
  href,
  onClick,
  size = "default",
  showArrow = false,
}: ClientButtonProps) {
  const content = (
    <>
      {children}
      {showArrow && <ChevronRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Button asChild size={size}>
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button onClick={onClick} size={size}>
      {content}
    </Button>
  );
}
