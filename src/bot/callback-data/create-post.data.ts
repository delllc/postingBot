import { createCallbackData } from "callback-data";

export const createPostData = createCallbackData("create-post", {
  chatId: Number,
});
