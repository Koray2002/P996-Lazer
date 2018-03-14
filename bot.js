const Discord = require('discord.js'); 
const bot = new Discord.Client(); 

bot.on('message', (message) => { 
   
if(message.content == 'fire cannon') {
message.reply('shots have been fired');
}

}); 

bot.on('message', (message) => { 
   
    if(message.content == 'dogfight me') {
    message.reply('Im on your tail!');
    }
    
    }); 

    bot.on('message', (message) => { 
   
        if(message.content == 'where are you lazer?') {
        message.reply('I could tell you, but then I would have to kill you');
        }
        
        }); 
    
    bot.on('message', (message) => { 
   
         if(message.content == 'hey lazer') {
         message.reply('Hey beautiful :) ');
         }
            
            }); 
            bot.on('message', (message) => { 
   
                if(message.content == 'lazer who is the best pilot') {
                message.reply('we all know that it is Alaa');
                }
                   
                   }); 

bot.login('process.env.BOT_Token'); 
