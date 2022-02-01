const Discord = require("discord.js")
const request = require("request")
const cheerio = require("cheerio")
//$adista aiit
module.exports.run = async (bot, message, args) => {

  const nsfwuyari = new Discord.RichEmbed()
    .setTitle('Bu kanal NSFW kategorisine uygun değildir.')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setDescription('ENG: This channel is not NSFW compliant.')
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından kullanıldı.`)

  if(!message.channel.nsfw)
  return message.channel.send(nsfwuyari);
  let replies = [
      "https://cdn.discordapp.com/attachments/809196962930884668/892538189691125770/telegramturkturbanliifsa-20210929-0002.jpg",
      "https://media.discordapp.net/attachments/852545563806793739/896461812852203581/Ew3y_ONXMAYlnWP.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118242624868362/sZ5FWq1xJRNf26uMMxqdOmTXXyaukrtdAuFFxjaM5ZA.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118230973091890/vp6373zeerz71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118224631304192/-WOnI17UPtbuzh2b43vi8_b3reJOc8jdTD6KCIUGDRc.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118210999832596/vydj3hejrxz71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118201348735016/xru03w1xfoz71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118194482675712/71r0yzj2tsz71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118186836439150/x50pwgl85sz71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/910118175390203914/daob8yyc7vz71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/902948864858939432/scufadnphgu71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/896464820323364864/EbOzYJEXQAA7i4B.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/896462838133051432/DbXZPxxX0AE0gi_.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/896462238758625280/FBDA4QvVIAMRHH-.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/896462212540022864/FAuSqGvXsAkgzXY.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/896462076099305502/FAkMhozWEAAY4tc.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/895698002063278180/CIFI21UWIAAIYYi.png",
      "https://cdn.discordapp.com/attachments/510327290731954179/889437969969205298/25538496.webp",
      "https://cdn.discordapp.com/attachments/852545563806793739/890123703952740392/1632290428930.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/887799597454467112/-1863149716.jpeg",
      "https://cdn.discordapp.com/attachments/852545563806793739/887799597265731624/291632111.jpeg",
      "https://cdn.discordapp.com/attachments/852545563806793739/887799596963754004/-1627580834.jpeg",
      "https://cdn.discordapp.com/attachments/852545563806793739/885550508650156042/terbiyesizbirnesil-20210908-0001.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/883077515541884938/29e4f7ca89068c3b8dd025bab7c633b5.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/882589844608536616/i0ow1kwyiqk71.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/881877781414289448/nnnl2t7k05g61.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/881877696089567252/gtgfnbm004g61.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/879461841066143794/vipexactly-20210823-0008.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/878605953535189032/1629389829249.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/877269454625583204/spghub_239226953_275610567281749_7803813501381213607_n.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/877145574279897108/IMG_20210625_022917_145.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875695252416110602/664234fecc1944c17576a61c0853855b.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875695240206508072/d7095bd7c9299ec4331e911970afa2f41156c37e.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875695221965467698/9dbed89b1049d7a2cb7b158358a3a074fd91959b.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875695120832417792/f2cd2b9c4d657cfc766a09a4dd7f96f4.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875694924778049556/ffd9eb96eba1510a565e936382a4a3a9.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875694885267714048/tumblr_ojir9lsufv1uiuo93o1_500.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875694483054936074/body-bones-girl-grunge-Favim.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/875500207788392468/image2.jpeg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874931267689394186/IMG_20210710_020707_838.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874931267433553980/IMG_20210710_020512_858.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874931267223846932/IMG_20210710_020514_971.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874931267223846932/IMG_20210710_020514_971.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874931266951192576/IMG_20210710_020522_939.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874411742518739014/1628545514873.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874411741939916810/1628545452201.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/874400604678684752/1628537173634.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/871452832635686963/s-CDOeDH_400x400.png",
      "https://cdn.discordapp.com/attachments/852905415700250672/871443483632758844/SPOILER_image0.png",
      "https://cdn.discordapp.com/attachments/852545563806793739/869893129094987796/photo_2021-06-22_20-55-45.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/869893128830734336/photo_2021-06-22_20-57-06.jpg",
      "https://cdn.discordapp.com/attachments/852545563806793739/869893058953617428/photo_2021-06-22_20-59-13.jpg"
    ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('NSFW Resim')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['rrrrrrrrrrrresim'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'rrrrrrrrrrrresim',
  description: 'Rastgele fotoğraf atar.',
  usage: 'rrrrrrrrrrrresim',

};