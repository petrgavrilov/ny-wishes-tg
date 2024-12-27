import { SessionData } from "@/bot/types";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useEffect } from "react";
import { useState } from "react";

const fetchSessionData = async (chatId: string) => {
  const res = await fetch(`/api/session?chat_id=${chatId}`);
  return res.json();
};

export function useSessionData() {
  const [data, setData] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { chatId } = useTelegramSdk();

  useEffect(() => {
    if (!chatId) {
      setIsLoading(false);
      return;
    }

    fetchSessionData(chatId)
      .then(setData)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [chatId]);

  return { data, isLoading };
}
