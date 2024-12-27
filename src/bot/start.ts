import { bot } from "./bot";

const WEBAPP_URL = ""; // URL to your production main site(eg. https://my-secrete-webapp.tld)

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
  const webhookUrl = ``;

  const webhookInfo = await bot.api.getWebhookInfo();

  if (webhookInfo.url !== webhookUrl) {
    await bot.api.deleteWebhook();
    await bot.api.setWebhook(webhookUrl);
  }
};
