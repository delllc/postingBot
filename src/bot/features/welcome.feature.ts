import { Composer } from "grammy";
import type { Context } from "~/bot/context";
import { logHandle } from "~/bot/helpers/logging";
import { createMainKeyboard } from "../keyboards/main.keyboard.ts";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("command-start"), async (ctx) =>
  ctx.reply(ctx.t("welcome"), {
    reply_markup: await createMainKeyboard(ctx),
  })
);

export { composer as welcomeFeature };
