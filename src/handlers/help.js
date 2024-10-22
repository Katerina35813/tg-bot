const messages = require("../constants/messages");

module.exports = (bot) => {
  bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, messages.help_message);
  });
};
