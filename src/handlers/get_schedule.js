const tree_structure_grade = require("../constants/tree_structure");
const schedule_structure = require("../constants/shedule");
const ScheduleManager = require('../utils/managerSchedule');

module.exports = (bot) => {
  bot.on("callback_query", async (query) => {
    const chatId = query.message.chat.id;
    const queryArr = query.data.split("_");

    if (queryArr?.[0] === "grade") {
      const inlineKeyboardGroupes = ScheduleManager.createInlineKeyboardGroups(
          tree_structure_grade[query.data],
      );
      await bot.sendMessage(
          chatId,
          `Вот меню групп:` + "\n\n" + "Выберите интересующий раздел:",
          { reply_markup: inlineKeyboardGroupes },
      );

      return;
    }

    await bot.answerCallbackQuery({
      callback_query_id: query.id,
      text: ScheduleManager.scheduleText(schedule_structure[query.data]),
      show_alert: true,
    });
  });
};
