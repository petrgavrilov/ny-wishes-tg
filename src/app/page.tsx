"use client";

import Link from "next/link";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useEffect } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

export default function Home() {
  const { backButton } = useTelegramSdk();

  useEffect(() => {
    console.log({
      backButtonMounted: backButton.isMounted(),
      // miniAppMounted: miniApp.isMounted(),
    });
  }, []);

  return (
    <main className="p-4">
      <Link href="/user-info">Show User Info</Link>
    </main>
  );
}
