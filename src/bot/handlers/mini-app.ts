import { Bot } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";
import { WEBAPP_URL } from "../start";

export async function promptMiniApp(_bot: Bot<MyContext>, ctx: MyContext) {
  if (isStatePassed(ctx.session, BotState.PromptMiniApp)) {
    await ctx.answerCallbackQuery({
      text: `👋`,
    });
    return;
  }

  await ctx.replyWithPhoto(
    `AgACAgIAAxkBAAICNGd03fViSl-zcMgzKs1Uppee4Aj-AAIv7DEbD3WhS1AiKv8qPwEXAQADAgADcwADNgQ`
  );

  ctx.session.state = BotState.PromptMiniApp;

  await ctx.reply(
    `Теперь открывай мини-приложение, чтобы выбрать прикольные желания на Новый год! 🎄`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "✨ Запустить подбор желаний",
              web_app: {
                url: `${WEBAPP_URL}?chat_id=${ctx.chat?.id}`,
              },
            },
          ],
        ],
      },
    }
  );
}
