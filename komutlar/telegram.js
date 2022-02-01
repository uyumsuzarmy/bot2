const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const request = require("request");
const cheerio = require("cheerio");
const { Client } = require("discord.js");
const client = new Client()

module.exports.run = async (client, message, params, perms) => {

const embed = new discord.RichEmbed()
	.setColor('RANDOM')
	.setTitle('Telegram Adresimiz')
	.setURL('https://t.me/azginpenguenler')
	.setAuthor('Türbanlı Bot')
	.setDescription('t.me/azginpenguenler')	
	.setTimestamp() //zaman
	.setFooter(`${message.author.username} tarafından kullanıldı.`);
message.channel.send(embed);
    
    
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['telegram'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'telegram',
  description: 'Telegram adresini atar.',
  usage: 'telegram',

};
