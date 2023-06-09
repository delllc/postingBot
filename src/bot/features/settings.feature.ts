import { Composer, InlineKeyboard } from "grammy";
import type { Context } from "~/bot/context";
import { logHandle } from "~/bot/helpers/logging";
import { addChannelData } from "../callback-data/add-channel.data.ts";
import { createSettingKeyboard } from "../keyboards/setting.keyboard.ts";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.hears("Настройки", logHandle("settings"), async (ctx: Context) =>
  ctx.reply(ctx.t("settings.description"), {
    reply_markup: await createSettingKeyboard(ctx),
  })
);

feature.callbackQuery(
  addChannelData.filter(),
  logHandle("add-channel"),
  async (ctx: Context) => {
    ctx.editMessageText(ctx.t("settings.addChannel"), {
      reply_markup: new InlineKeyboard().text("<< Назад", "back"),
    });

    feature.on(":text", async (ctx: Context) => {
      // @ts-ignore
      const { id, title } = ctx.msg?.forward_from_chat;

      ctx.session.chatInfo.push({ chatId: id, title });

      ctx.reply(
        ctx.t("settings.successful", {
          name: ctx.session.chatInfo[ctx.session.chatInfo.length - 1].title,
        }),
        {
          reply_markup: new InlineKeyboard()
            .text("Создать пост", "createPost")
            .text("Настроить", "parametrs"),
        }
      );
    });
  }
);

feature.callbackQuery("back", logHandle("back"), async (ctx: Context) =>
  ctx.editMessageText(ctx.t("settings.description"), {
    reply_markup: await createSettingKeyboard(ctx),
  })
);
export { composer as settingsFeature };
