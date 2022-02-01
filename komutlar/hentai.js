const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  
  const nsfwuyari = new Discord.RichEmbed()
    .setTitle('Bu kanal NSFW kategorisine uygun değildir.')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setDescription('ENG: This channel is not NSFW compliant.')
    .setTimestamp()
    .setFooter(`${msg.author.username} tarafından kullanıldı.`)

  
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send(nsfwuyari).then(msg => {
    msg.delete(5000)
  })
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['porno','4k'],
  permLevel: 0
};

exports.help = {
  name: 'hentai',
  description: 'NSFW Resimleri Gösterir',
  usage: 'hentai'
};