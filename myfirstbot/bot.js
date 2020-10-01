const Telegraf = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.MYFIRSTBOTCREDENTIAL);

//      /start 
/*bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + " have entered the start command and it is a " + ctx.updateSubTypes[0]);
})

bot.help((ctx) => {
    ctx.reply("You have entered the help command");
})

bot.settings((ctx) => {
    ctx.reply("You have entered the settings command");
})

bot.command(["test", "Test", "test1"], (ctx) => {
    ctx.reply("Hello World");
})

bot.hears("cat", (ctx) => {
    ctx.reply("Meow");
})

bot.on("sticker", (ctx) => {
    ctx.reply("This a sticker message");
})*/

// handles username eg. botfather
bot.mention("botfather", (ctx) => {
    ctx.reply("mention method");
})

// handles phone numbers eg. +91 7745638291
bot.phone("+91 7745638291", (ctx) => {
    ctx.reply("Phone method");
})

// handles hashtags eg: #hash
bot.hashtag("hash", (ctx) => {
    ctx.reply("hastag method");
})

bot.launch();
