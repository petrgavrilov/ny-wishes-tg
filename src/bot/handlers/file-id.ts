import { Bot } from "grammy";
import { MyContext } from "../types";

export function setupFileId(bot: Bot<MyContext>) {
  bot.on("message:media", async (ctx) => {
    let file_id: string | undefined;

    if (ctx.message.photo) {
      file_id = ctx.message.photo[0].file_id;
    }

    if (ctx.message.document) {
      file_id = ctx.message.document.file_id;
    }

    if (ctx.message.video) {
      file_id = ctx.message.video.file_id;
    }

    if (ctx.message.audio) {
      file_id = ctx.message.audio.file_id;
    }

    if (ctx.message.voice) {
      file_id = ctx.message.voice.file_id;
    }

    if (ctx.message.animation) {
      file_id = ctx.message.animation.file_id;
    }

    if (ctx.message.sticker) {
      file_id = ctx.message.sticker.file_id;
    }

    if (ctx.message.video_note) {
      file_id = ctx.message.video_note.file_id;
    }

    if (file_id !== undefined) {
      await ctx.reply("I received a media message!");
      await ctx.reply(`Media ID: \`${file_id}\``, { parse_mode: "Markdown" });
    } else {
      await ctx.reply(
        "I received a media message, but I couldn't get the file ID."
      );
    }
  });
}
