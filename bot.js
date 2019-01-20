const Discord = require('discord.js');
const bot = new Discord.Client ();


bot.on('ready', () => {
  bot.user.setGame('Can sıkıntısı...') })

bot.on('guildMemberAdd', member => {
   member.send(' Benim için sunucuya gelir misin ? Mod olmaya çalışıyorum :relaxed:  https://discord.gg/Gc9BGwF');
});



bot.login(process.env.BOT_TOKEN);
