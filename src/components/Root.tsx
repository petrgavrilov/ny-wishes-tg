"use client";

import { PropsWithChildren } from "react";
import { useClientOnce } from "../hooks/useClientOnce";
import {
  $debug,
  backButton,
  init as initSDK,
  miniApp,
} from "@telegram-apps/sdk";
import { useDidMount } from "@/hooks/useDidMount";
import { TelegramSdkProvider } from "@/providers/telegram-sdk";

function initApp(isDev: boolean): void {
  $debug.set(isDev);

  initSDK();

  miniApp.mount();
  backButton.mount();
}

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === "development";

  useClientOnce(() => {
    try {
      initApp(isDev);
    } catch (error) {
      console.warn("Error initializing the telegram sdk", error);
    }
  });

  // const launchParams = useLaunchParams();

  const searchParams = new URLSearchParams(window.location.search);
  const chatId = searchParams.get("chat_id") || "";

  return (
    <TelegramSdkProvider
      value={{
        backButton,
        miniApp,
        launchParams: null,
        chatId,
      }}
    >
      {children}
    </TelegramSdkProvider>
  );
}

export function Root({ children }: PropsWithChildren) {
  const didMount = useDidMount();

  if (!didMount) {
    return null;
  }

  return <RootInner>{children}</RootInner>;
}
