const TelegramBot = require("node-telegram-bot-api");
const start = require('./src/handlers/start');
const help = require('./src/handlers/help');
const class_schedule = require("./src/handlers/class_schedule");
const set_commands = require("./src/handlers/set_commands");
const get_schedule = require("./src/handlers/get_schedule");
require("dotenv").config();

const bot = new TelegramBot(process.env.API_KEY_BOT, {
  polling: { autoStart: true, interval: 1000 },
});

set_commands(bot);
start(bot);
help(bot);
class_schedule(bot);
get_schedule(bot);