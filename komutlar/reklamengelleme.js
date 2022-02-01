const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
  const yetkinizyok = new Discord.RichEmbed()
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setDescription(`${message.author} bu komudu kullanmanız için **yetkiniz** bulunmamaktadır.`)
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`)

  const ackapat = new Discord.RichEmbed()
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setDescription('Reklam engelleyiciyi açmak için `!reklam aç`\nReklam engelleyiciyi kapatmak için `!reklam kapat` yazabilirsiniz.')
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`) 

  const acildi = new Discord.RichEmbed()
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setDescription(':white_check_mark: Reklam engelleyici başarıyla aktif edildi.')
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`)

  const kapatildi = new Discord.RichEmbed()
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setDescription(':x: Reklam engelleyici kapatıldı.')
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`)

  const kapali = new Discord.RichEmbed()
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setDescription(':man_detective: Reklam engelleyici zaten kapalı.')
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`) 
  

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(yetkinizyok).then(msg => msg.delete(5000));
  if (!args[0]) return message.channel.send(ackapat)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(ackapat)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(acildi)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(kapali)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(kapatildi)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam', 'reklam-filtresi', 'reklamfiltresi', 'reklam-filtre', 'reklamfiltre'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engelleme',
 description: 'reklamm',
 usage: 's$$kanal'
};