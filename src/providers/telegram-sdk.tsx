import { backButton, LaunchParams, miniApp } from "@telegram-apps/sdk";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useContext } from "react";
import { createContext } from "react";
import { PropsWithChildren } from "react";

interface TelegramSdkContext {
  backButton: typeof backButton;
  miniApp: typeof miniApp;
  launchParams: LaunchParams;
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
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
