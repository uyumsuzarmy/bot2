const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.channel.send("https://t.me/azginpenguenler");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tttttttttttttelegram"],
  permLevel: 0
};

exports.help = {
  name: "tttttttttttttelegram",
  description: "Telegram kanalını gönderir.",
  usage: "tttttttelegram"
};
