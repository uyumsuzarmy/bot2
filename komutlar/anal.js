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
  "https://realbooru.com//images/730/3452c10352aecc0d97a649cac3648ad8.gif",
  
  

  
  ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('Anal')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['anal'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'anal',
  description: 'Rastgele fotoğraf atar.',
  usage: 'anal',

};