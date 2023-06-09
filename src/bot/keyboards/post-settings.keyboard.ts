import { InlineKeyboard } from "grammy";
import _ from "lodash";
import type { Context } from "~/bot/context";

export const createPostSettingsKeyboard = async (ctx: Context) => {
  const previewEnabled = true;
  const pin = true;

  return new InlineKeyboard(
    _.chunk(
      [
        {
          text: "Изменить текст",
          callback_data: "editMessage",
        },
        {
          text: "Прикрепить медиа",
          callback_data: "setMedia",
        },
        {
          text: "Реакции",
          callback_data: "reactions",
        },
        {
          text: "URL - кнопки",
          callback_data: "urlButtons",
        },
        {
          text: "Скрытое продолжение",
          callback_data: "secretContent",
        },
        {
          text: ctx.t("preview", {
            enabled: previewEnabled.toString(),
          }),
          callback_data: "preview",
        },
        {
          text: ctx.t("pin", {
            enabled: pin.toString(),
          }),
          callback_data: "pin",
        },
        {
          text: "Копировать",
          callback_data: "copy",
        },
        {
          text: "Опубликовать",
          callback_data: "publish",
        },
      ],
      2
    )
  );
};
