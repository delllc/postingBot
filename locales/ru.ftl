start_command = 
    .description = Start the bot
language_command = 
    .description = Change language
ladmin_command =
    .description = Make user an administrator
stats_command =
    .description = Stats
setcommands_command =
    .description = Set bot commands
createPost = Выберите в каком канале хотите создать пост

publish = Пост будет создан в  {$title}
          Введите текст который хотите опубликовать

settings = 
  .description = В этом разделе вы можете:
      • настроить автоприём и приветствие
      • задать персональные настройки под каждый канал
      • добавить новый канал в этого бота
  .addChannel = 1. Сделайте бота для постинга администратором вашего канала и дайте ему права публиковать, удалять и редактировать записи.
      2. Когда дадите боту права администратора, напишите сюда линк (ссылку) канала или просто перешлите любое сообщение из вашего канала прямо в этот диалог.
      Если не получается, то прочитайте подробную инструкциюили обратитесь в нашу поддержку.

      .successful = 
      Канал {$name} успешно добавлен в вашего бота! Вы можете начать создавать посты и пользоваться другими функциями.
      Просто отправьте им ссылку на этого бота.
 
welcome = 👋🏻  Welcome!
language = 
    .select = Please, select your language
    .changed = Language successfully changed!
admin =
    .user-not-found = User not found

    .select-user = Please, select a user to change role
    .select-user-btn = Select user
    .your-role-changed = You're {$role ->
        *[USER] a regular user
        [ADMIN] an administrator
    } now.
    .user-role-changed = User with ID {$id} is now {$role ->
        *[USER] a regular user
        [ADMIN] an administrator
    }.
    
    .commands-updated = Commands updated.
unhandled = Unrecognized command. Try /start
