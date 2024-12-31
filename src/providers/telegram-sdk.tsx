import { backButton, LaunchParams, miniApp } from "@telegram-apps/sdk";
import { useContext } from "react";
import { createContext } from "react";
import { PropsWithChildren } from "react";

interface TelegramSdkContext {
  backButton: typeof backButton;
  miniApp: typeof miniApp;
  launchParams: LaunchParams | null;
  chatId: string | null;

  hapticFeedback: () => void;
}

const TelegramSdkContext = createContext<TelegramSdkContext | null>(null);
TelegramSdkContext.displayName = "TelegramSdkContext";

export const TelegramSdkProvider = ({
  value,
  children,
}: PropsWithChildren<{ value: TelegramSdkContext }>) => {
  return (
    <TelegramSdkContext.Provider value={value}>
      {children}
    </TelegramSdkContext.Provider>
  );
};

export const useTelegramSdk = () => {
  const context = useContext(TelegramSdkContext);
  if (!context) {
    throw new Error("useTelegramSdk must be used within a TelegramSdkProvider");
  }

  return context;
};
