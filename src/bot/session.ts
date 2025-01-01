import { freeStorage } from "@grammyjs/storage-free";
import { Bot, Context, session, SessionFlavor } from "grammy";
import { BotState, SessionData } from "./types";

function initial(): SessionData {
  return {
    state: BotState.Initial,
    userName: undefined,
    quiz: { priorities: [], emotions: [], goals: [] },
    wishesIds: [],
    userInfo: { firstName: "", lastName: "", id: "" },
  };
}

export const setupSession = (
  bot: Bot<Context & SessionFlavor<SessionData>>,
  token: string
) => {
  bot.use(session({ initial, storage: freeStorage<SessionData>(token) }));
};
