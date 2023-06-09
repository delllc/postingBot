import { InlineKeyboard } from "grammy";
import _ from "lodash";
import type { Context } from "~/bot/context";
import { settingsData } from "../callback-data";

export const createSettingKeyboard = async (ctx: Context) => {
const chats = _.chunk(
  ctx.session.chatInfo.map(
    ({ title, chatId }) => ({
      text: String(title),
      callback_data: settingsData.pack({
        chatId
      }),
    })
  ),
  2
)

const addChannel = [
  {
    text: "Добавить канал",
    callback_data: "add-channel"
  },
]

const subscribe = [
    {
      text: "Подписка",
      callback_data: "subscribe"
    }
  ]

return new InlineKeyboard([
    subscribe,
    ...chats,
    addChannel
])
};
