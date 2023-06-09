import { InlineKeyboard } from "grammy";
import _ from "lodash";
import { createPostData } from "~/bot/callback-data";
import type { Context } from "~/bot/context";

export const createSettingsKeyboard = async (ctx: Context) => {
  return new InlineKeyboard(
    _.chunk([
      {
        text: "Изменить текст", 
        callback_data: "editMessage"
      },
      {
        text: "Прикрепить медиа",
        callback_data: "setMedia"
      },






      {
        text: "Опубликовать",
        callback_data: "publish"
      }

])

  );
};
