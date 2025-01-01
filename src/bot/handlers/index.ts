import { Bot } from "grammy";
import { MyContext } from "../types";
import { setupFileId } from "./file-id";
import { setupStart } from "./start";
import { setupHelp } from "./help";
import { setupPromptName } from "./prompt-name";
import { setupQuiz } from "./quiz";
import { setupWishes } from "./send-wishes";

export function setupHandlers(bot: Bot<MyContext>) {
  setupStart(bot);
  setupHelp(bot);
  setupWishes(bot);
  setupFileId(bot);
  setupPromptName(bot);
  setupQuiz(bot);
}
