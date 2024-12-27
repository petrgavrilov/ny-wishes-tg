"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { useEffect } from "react";

import { useTelegramSdk } from "@/providers/telegram-sdk";

export default function UserInfo({
  back = true,
}: PropsWithChildren<{ back?: boolean }>) {
  const router = useRouter();

  const { backButton, launchParams } = useTelegramSdk();

  useEffect(() => {
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back]);

  useEffect(() => {
    return backButton.onClick(() => {
      router.back();
      backButton.hide();
    });
  }, [router]);

  return (
    <>
      <pre>{JSON.stringify(launchParams, null, 2)}</pre>
    </>
  );
}
