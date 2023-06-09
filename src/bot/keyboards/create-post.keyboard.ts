import { InlineKeyboard } from "grammy";
import _ from "lodash";
import { createPostData } from "~/bot/callback-data";
import type { Context } from "~/bot/context";

export const createPostKeyboard = (ctx: Context) => {
  return new InlineKeyboard(
    _.chunk(
      ctx.session.chatInfo.map(({ title, chatId }) => ({
        text: String(title),
        callback_data: createPostData.pack({
          chatId,
        }),
      }))
    )
  );
};
