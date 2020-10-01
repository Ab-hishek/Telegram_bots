const Telegraf = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.ECHOBOTCREDENTIAL);

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
`;

bot.use((ctx, next) => {
    if(ctx.updateSubTypes[0] == "text"){
        console.log(ctx.from.username + " said: " + ctx.message.text);
    } else {
        console.log(ctx.from.username + " sent " + ctx.updateSubTypes[0]);
    }
    next();
})

bot.start((ctx) => {
    ctx.reply("Hi I am Echo Bot");
    ctx.reply(helpMessage);
})

bot.help((ctx) => {
    ctx.reply(helpMessage);
})

bot.command("echo", (ctx) => {
    let input = ctx.message.text; // get input from user
    let inputArray = input.split(" "); // split input by spaces

    let message = ""; // create a variable for message to output to user

    if(inputArray.length == 1) { // check if array just contains "/echo"
        message = "You said echo";
    } else {
        inputArray.shift(); // remove first element in array - "/echo"
        message = inputArray.join(" "); // join all elements into string separated by spaces 
    }

    ctx.reply(message); // reply message to user
})

bot.launch();
