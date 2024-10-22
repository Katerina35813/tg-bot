const messages = require("../constants/messages");

module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const userName = msg.chat.first_name;

    bot.sendMessage(msg.chat.id, `Привет, ${userName}!` + messages.start_message);
  });
};
