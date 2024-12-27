import { SessionData } from "@/bot/types";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useEffect } from "react";
import { useState } from "react";

const fetchSessionData = async (chatId: string, abort: AbortController) => {
  const res = await fetch(`/api/session?chat_id=${chatId}`, {
    signal: abort.signal,
  });
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

    const abortController = new AbortController();

    fetchSessionData(chatId, abortController)
      .then(setData)
      .catch(console.error)
      .finally(() => setIsLoading(false));

    return abortController.abort();
  }, [chatId]);

  return { data, isLoading };
}
