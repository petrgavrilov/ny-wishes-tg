import { bot } from "./bot";

export const WEBAPP_URL = process.env.WEBAPP_URL || "https://localhost:3000";

const handleGracefulShutdown = async () => {
  await bot.stop();
  process.exit();
};

if (process.env.NODE_ENV === "development") {
  // Graceful shutdown handlers
  process.once("SIGTERM", handleGracefulShutdown);
  process.once("SIGINT", handleGracefulShutdown);
}

export const startTelegramBotInDev = async () => {
  console.log(`Starting bot in ${process.env.NODE_ENV} mode`);
  if (!bot.isInited()) {
    await bot.start();
    console.log(`started`);
  }
};

export const startTelegramBotInProduction = async () => {
  try {
    const webhookUrl = `${WEBAPP_URL}/api/telegram-webhook?token=${process.env.TELEGRAM_BOT_TOKEN}`;
    const webhookInfo = await bot.api.getWebhookInfo();

    if (webhookInfo.url !== webhookUrl) {
      await bot.api.deleteWebhook();
      await bot.api.setWebhook(webhookUrl);
    }
  } catch (err) {
    console.error(err);
  }
};
