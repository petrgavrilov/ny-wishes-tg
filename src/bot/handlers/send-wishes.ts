import { Bot } from "grammy";
import { bot } from "../bot";
import { MyContext } from "../types";
import { wishes } from "@/data/wishes";
import { WEBAPP_URL } from "../start";
import { InputMediaDocument } from "grammy/types";
import { sendAnalyticsEvent } from "../analytics";

const MAX_PHOTOS = 10;

function createChunks<T>(array: T[], size: number): T[][] {
  return array.reduce<T[][]>((acc: T[][], _, index) => {
    if (index % size === 0) {
      acc.push(array.slice(index, index + size));
    }
    return acc;
  }, []);
}

async function sendCards(chatId: string, wishesIds: string[]) {
  const userWishes = wishes.filter((wish) => wishesIds.includes(wish.id));
  const wishesText = userWishes
    .map((wish) => `${wish.emoji} ${wish.descriptionRus}`)
    .join("\n");
  const imagesUrls = userWishes.map(
    (wish) => `${WEBAPP_URL}/social-cards/${wish.id}.png`
  );
  const imagesUrlsChunks = createChunks(imagesUrls, MAX_PHOTOS);

  await bot.api.sendMessage(chatId, `Список желаний:\n\n${wishesText}`);

  const promises: Promise<any>[] = [];

  for (const imagesUrlsChunk of imagesUrlsChunks) {
    // const media = imagesUrlsChunk.map<InputMediaPhoto>((url) => ({
    //   type: "photo",
    //   media: url,
    // }));
    const media = imagesUrlsChunk.map<InputMediaDocument>((url) => ({
      type: "document",
      media: url,
    }));
    promises.push(bot.api.sendMediaGroup(chatId, media));
  }

  await Promise.all(promises);

  await bot.api.sendMessage(
    chatId,
    `Удачи в новом году, и пусть все твои желания исполнятся! 🎉✨`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "✨ Повыбирать ещё желаний",
              web_app: {
                url: `${WEBAPP_URL}?chat_id=${chatId}`,
              },
            },
          ],
          [
            {
              text: "📲 Заходи в мой Telegram-канал",
              url: "https://t.me/petya_projects",
            },
          ],
        ],
      },
    }
  );
}

export async function sendWishes(chatId: string, wishesIds: string[]) {
  await sendAnalyticsEvent({
    distinctId: String(chatId),
    event: "user selected wishes in mini app",
    properties: { wishesIds },
  });

  await sendCards(chatId, wishesIds);
}

export function setupWishes(bot: Bot<MyContext>) {
  bot.command("wishes", async (ctx) => {
    await sendAnalyticsEvent({
      distinctId: String(ctx.chat?.id || ctx.from?.id),
      event: "user asked bot to send wishes",
      properties: ctx.session,
    });

    const wishesIds = ctx.session.wishesIds;
    await sendCards(ctx.chat.id.toString(), wishesIds);
  });
}
