import { Keyboard } from "grammy";
import _ from "lodash";
import type { Context } from "~/bot/context";

export const createMainKeyboard = async (ctx: Context) => {
  return new Keyboard(
    _.chunk([
      {
        text: "Создать пост",
      },
      {
        text: "Контент план",
      },
      {
        text: "Изменить пост",
      },
      {
        text: "Настройки",
      },
    ])
  );
};
