const Discord = require('discord.js');

exports.run = (client, message, args) => {

  const uyari = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setDescription('Bu komutu kullanmak için **gerekli yetkiye** sahip değilsiniz.')	
	.setTimestamp() //zaman
	.setFooter(`${message.author.username} tarafından kullanıldı.`);

  const kanaletiketleyiniz = new Discord.RichEmbed()
  
  .setColor('RANDOM')
  .setDescription('Lütfen bir **kanal** etiketleyiniz.')	
	.setTimestamp() //zaman
	.setFooter(`${message.author.username} tarafından kullanıldı.`);

  const mesajyaziniz = new Discord.RichEmbed()
  
  .setColor('RANDOM')
  .setDescription('Yazmam için **geçerli bir mesaj** yazmalısınız.')	
	.setTimestamp() //zaman
	.setFooter(`${message.author.username} tarafından kullanıldı.`);

  const mesaj = args.splice(1, args.length-1).join(" ")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(uyari)
  const channel = message.mentions.channels.first();
      if(!channel) return message.channel.send(kanaletiketleyiniz);
if (mesaj.length < 1) return message.channel.send(mesajyaziniz);
  
  const mesajembed = new Discord.RichEmbed()
  
  .setColor('RANDOM')
  .setDescription(mesaj)	
  
  channel.send(mesajembed);

  const yollandi = new Discord.RichEmbed()
  
  .setColor('RANDOM')
  .setDescription('**Mesajınız başarıyla gönderildi.**')	
	.setTimestamp() //zaman
	.setFooter(`${message.author.username} tarafından kullanıldı.`);
  message.channel.send(yollandi)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazembed'],
  permLevel: 0
};

exports.help = {
  name: 'yazembed',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yazembed [yazdırmak istediğiniz şey]'
};