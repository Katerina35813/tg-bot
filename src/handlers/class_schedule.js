const tree_structure_grade = require("../constants/tree_structure");
const ScheduleManager = require("../utils/managerSchedule");

module.exports = (bot) => {
  bot.onText(/\/class_schedule/, async (msg) => {
    const userName = msg.chat.first_name;
    // Создаем инлайн-клавиатуру
    const inlineKeyboard = ScheduleManager.createInlineKeyboard(
      tree_structure_grade.grade,
    );

    await bot.sendMessage(
      msg.chat.id,
      `Привет, ${userName}! Вот меню классов:` +
        "\n\n" +
        "Выберите интересующий раздел:",
      { reply_markup: inlineKeyboard },
    );
  });
};
