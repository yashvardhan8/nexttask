"use client";

import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SignOutPage() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut(() => {
      window.location.href = "/";
    });
  }, [signOut]);

  return <p className="p-8">Signing out...</p>;
}