import { Bot } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";

export async function promptMiniApp(_bot: Bot<MyContext>, ctx: MyContext) {
  if (isStatePassed(ctx.session, BotState.PromptMiniApp)) {
    await ctx.answerCallbackQuery({
      text: `👋`,
    });
    return;
  }

  ctx.session.state = BotState.PromptMiniApp;

  await ctx.reply(
    `Теперь открывай мини приложение чтобы выбрать себе прикольные желания на новый год 🎄`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Открыть мини приложение",
              web_app: {
                url: "https://127.0.0.1:3000",
              },
            },
          ],
        ],
      },
    }
  );
}

export function setupMiniApp(bot: Bot<MyContext>) {}
