const Discord = require('discord.js');

exports.run = (client, message, args) => {

  const komutlar = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setTitle('Türbanlı Bot Komutlar')
  .setDescription('**NSFW Komutları :underage: **\n!ass\n!boobs\n!pussy\n!porn\n!blowjob\n')	
	.setTimestamp() //zaman
	.setFooter(`${message.author.username} tarafından kullanıldı.`);

  message.channel.send(komutlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Botun komutlarını yazar.',
  usage: 'komutlar'
};