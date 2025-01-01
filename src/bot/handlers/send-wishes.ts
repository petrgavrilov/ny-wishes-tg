import { Bot } from "grammy";
import { bot } from "../bot";
import { MyContext } from "../types";
import { wishes } from "@/data/wishes";
import { WEBAPP_URL } from "../start";
import { InputMediaPhoto } from "grammy/types";

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

  await bot.api.sendMessage(chatId, `Твои желания:\n${wishesText}`);

  const promises: Promise<any>[] = [];

  for (const imagesUrlsChunk of imagesUrlsChunks) {
    const media = imagesUrlsChunk.map<InputMediaPhoto>((url) => ({
      type: "photo",
      media: url,
    }));
    promises.push(bot.api.sendMediaGroup(chatId, media));
  }

  await Promise.all(promises);
}

export async function sendWishes(chatId: string, wishesIds: string[]) {
  await sendCards(chatId, wishesIds);
}

export function setupWishes(bot: Bot<MyContext>) {
  bot.command("wishes", async (ctx) => {
    const wishesIds = ctx.session.wishesIds;
    await sendCards(ctx.chat.id.toString(), wishesIds);
  });
}
