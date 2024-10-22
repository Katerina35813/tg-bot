module.exports = class ScheduleManager {

 static createInlineKeyboardGroups(groups) {
    const inlineKeyboard = {
      inline_keyboard: [],
    };

    for (let i = 0; i <= groups.length - 1; i++) {
      inlineKeyboard.inline_keyboard.push([
        { text: `${groups[i]} группа`, callback_data: groups[i] },
      ]);
    }

    return inlineKeyboard;
  }

  static createInlineKeyboard(countGrade) {
    const inlineKeyboard = {
      inline_keyboard: [],
    };

    for (let i = 1; i <= countGrade; i++) {
      inlineKeyboard.inline_keyboard.push([
        { text: `${i} курс`, callback_data: `grade_${i}` },
      ]);
    }

    return inlineKeyboard;
  }

 static scheduleText(scheduleInfo) {
    let string = "";

    scheduleInfo.forEach((item) => {
      string =
        string +
        `Предмет: ${item.subject}. Преподаватель: ${item.teacher}. Время: ${item.time}\n\n`;
    });

    return string;
  }
};
