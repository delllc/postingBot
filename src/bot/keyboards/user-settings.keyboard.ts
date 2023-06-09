import { InlineKeyboard } from "grammy";
import _ from "lodash";
import type { Context } from "~/bot/context";
import { settingsData } from "../callback-data";

export const createUserSettingsKeyboard = async (ctx: Context) => {
  const chatsButtons = ctx.session.chatInfo.map((chat) => {
    return {
      text: chat.title,
      callback_data: settingsData.pack({ chatId: chat.chatId }),
    };
  });

  return new InlineKeyboard(
    _.chunk(
      [
        {
          text: "Подписка",
          callback_data: "subscribe",
        },
        {
          text: "Добавить канал",
          callback_data: "add-channel",
        },
        ...chatsButtons,
      ],
      2
    )
  );
};
