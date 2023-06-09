import { Composer, InlineKeyboard } from "grammy";
import type { Context } from "~/bot/context";
import { logHandle } from "~/bot/helpers/logging";
import { createPostData } from "../callback-data/create-post.data.ts";
import { createPostKeyboard } from "../keyboards/create-post.keyboard.ts";
import { createSettingsKeyboard } from "../keyboards/settings.keyboard.ts";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.hears("Создать пост", logHandle("create post"), async (ctx) => {
  ctx.reply(ctx.t("createPost"), {
    reply_markup: await createPostKeyboard(ctx),
  });
});

feature.callbackQuery(
  createPostData.filter(),
  logHandle("create-post"),
  async (ctx) => {
    const { chatId } = createPostData.unpack(ctx.callbackQuery.data);

    const title = ctx.session.chatInfo.filter((obj) => {
      return obj.chatId == chatId;
    });

    feature.on(":text", logHandle("get text to send"), async (ctx) => {
      const { text }  = ctx?.msg;
      ctx.reply(String(text), {
        reply_markup:  await createSettingsKeyboard(ctx)
      });



    feature.callbackQuery(
      "editMessage",
      logHandle("editMessage"),
      async (ctx) => {
        ctx.reply("Отправь боту исправленный текст", {
          reply_markup: new InlineKeyboard().text("Назад", "change-channel")
        })
      }
    )




      feature.callbackQuery("publish", logHandle("publish"), async (ctx) => {
        ctx.api.sendMessage(chatId, text);

        ctx.reply("Пост был успешно создан");

        ctx.answerCallbackQuery();
      });
    });



    ctx.editMessageText(
      ctx.t("publish", {
        title: title[0].title,
      }),
      {
        reply_markup: new InlineKeyboard().text(
          "Выбрать другой канал",
          "change-channel"
        ),
      }
    );

    ctx.answerCallbackQuery();
  }
);

feature.callbackQuery(
  "change-channel",
  logHandle("change-channel"),
  async (ctx) => {
    ctx.editMessageText(ctx.t("createPost"), {
      reply_markup: await createPostKeyboard(ctx),
    });
  }
);

export { composer as createPostFeature };
