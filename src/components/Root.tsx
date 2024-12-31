"use client";

import { PropsWithChildren } from "react";
import { useClientOnce } from "../hooks/useClientOnce";
import {
  $debug,
  backButton,
  hapticFeedback,
  init as initSDK,
  miniApp,
  swipeBehavior,
  viewport,
} from "@telegram-apps/sdk";
import { useDidMount } from "@/hooks/useDidMount";
import { TelegramSdkProvider } from "@/providers/telegram-sdk";
import Snowfall from "./snowfall/Snowfall";
import { WishesProvider } from "@/providers/wishes";
import { wishes } from "@/data/wishes";

function initApp(isDev: boolean): void {
  $debug.set(isDev);

  initSDK();

  if (swipeBehavior.mount.isAvailable()) {
    swipeBehavior.mount();

    if (swipeBehavior.disableVertical.isAvailable()) {
      swipeBehavior.disableVertical();
    }
  }

  if (viewport.mount.isAvailable()) {
    viewport.mount();

    if (viewport.bindCssVars.isAvailable()) {
      viewport.bindCssVars();
    }

    if (viewport.expand.isAvailable()) {
      viewport.expand();
    }
  }

  miniApp.mount();
  backButton.mount();
}

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === "development";

  useClientOnce(() => {
    try {
      initApp(isDev);
    } catch {
      // console.warn("Error initializing the telegram sdk", error);
    }
  });

  const searchParams = new URLSearchParams(window.location.search);
  const chatId = searchParams.get("chat_id") || "";

  return (
    <TelegramSdkProvider
      value={{
        backButton,
        miniApp,
        launchParams: null,
        chatId,
        hapticFeedback: () => {
          if (hapticFeedback.impactOccurred.isAvailable()) {
            hapticFeedback.impactOccurred("medium");
          }
        },
      }}
    >
      <WishesProvider data={wishes}>{children}</WishesProvider>
    </TelegramSdkProvider>
  );
}

export function Root({ children }: PropsWithChildren) {
  const didMount = useDidMount();

  if (!didMount) {
    return null;
  }

  return (
    <div className="root">
      <Snowfall />
      <RootInner>{children}</RootInner>
    </div>
  );
}
