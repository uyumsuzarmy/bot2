const Discord = require("discord.js")
const request = require("request")
const cheerio = require("cheerio")
//$adista aiit
module.exports.run = async (bot, message, args) => {

  const nsfwuyari = new Discord.RichEmbed()
    .setTitle('Bu kanal NSFW kategorisine uygun değildir.')
    .setDescription('ENG: This channel is not NSFW compliant.')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`)

  if(!message.channel.nsfw)
  return message.channel.send(nsfwuyari);
  let replies = [
  "https://realbooru.com//images/730/b40f41da53e68867e1e53229104befb3.gif",
  "https://realbooru.com//images/730/ad1fad4ed79baed0ca4bfae0f1f0f183.gif",
  "https://realbooru.com//images/730/5460f13679998b77a0a1359ea409bd4c.gif",
  "https://realbooru.com//images/730/7490a8bf31715830f09fb18e6ee4063b.gif",
  "https://realbooru.com//images/730/40d15ceb03e9d796d005c647ff1a0051.gif",
  "https://realbooru.com//images/730/a8c58e88f9735231e003971ba0a51ae5.gif",
  "https://realbooru.com//images/730/1fef2512bebed843439b4e924d793dbb.gif",
  "https://realbooru.com//images/730/aaef3bea778e0f8464716a1443b1b344.gif",
  "https://realbooru.com//images/730/c0e505d4125512812044fcb14809df93.gif",
  


  
  ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('Cum')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['cum'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'cum',
  description: 'Rastgele fotoğraf atar.',
  usage: 'cum',

};