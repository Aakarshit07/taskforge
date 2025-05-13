"use client";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  const navigate = useRouter();
  return (
    <header className="flex justify-between items-center p-4 h-16 border-b border-accent">
      {/* Left side: Logo */}
      {/* //TODO: Add logo Image With proper colors */}
      <div className="relative text-accent font-black font-mono">
        Tast Forge
      </div>
      {/* Right side: Authentication buttons or User button */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <SignedOut>
          <Button
            variant={"outline"}
            onClick={() => navigate.replace("/sign-in")}
          >
            Sign In
          </Button>
          <Button onClick={() => navigate.replace("/sign-up")}>Sign Up</Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
