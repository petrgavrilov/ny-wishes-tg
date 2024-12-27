import { Context, SessionFlavor } from "grammy";

export enum BotState {
  Initial = "Initial",
  Started = "Started",
  MemeSent = "MemeSent",

  PromptName = "PromptName",
  SkipNameInput = "SkipNameInput",
  WaitingForName = "WaitingForName",

  PreQuiz = "PreQuiz",
  QuizStage1 = "QuizStage1",
  QuizStage2 = "QuizStage2",
  QuizStage3 = "QuizStage3",
  QuizFinished = "QuizFinished",

  PromptMiniApp = "PromptMiniApp",
  MiniAppOpened = "MiniAppOpened",
  WishesSent = "WishesSent",
}

export function isStatePassed(
  session: SessionData,
  targetState: BotState
): boolean {
  const statesList: BotState[] = Object.values(BotState);
  const currentStateIndex = statesList.indexOf(session.state);
  const targetStateIndex = statesList.indexOf(targetState);
  return currentStateIndex >= targetStateIndex;
}

export interface SessionData {
  state: BotState;
  userName?: string;
  quiz: {
    priorities: string[];
    emotions: string[];
    goals: string[];
  };
}

export type MyContext = Context & SessionFlavor<SessionData>;

export interface QuizAnswer {
  text: string;
  emoji: string;
  value: string;
}
