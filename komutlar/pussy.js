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
  let replies = ["https://cdn.discordapp.com/attachments/906292932477321246/909819267598389288/images_58.jpeg",
  "https://cdn.discordapp.com/attachments/906292932477321246/909819254331826246/images_59.jpeg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867179129045012/ass_bbpuss_beach_met-nude_outdoor_shaved_solo_sunerotica_teen_6.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849866999864623115/05.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/848130732622479360/20210506_134017.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/917079873334411284/received_208326318148252.jpeg",
  "https://cdn.discordapp.com/attachments/906292932477321246/917000774586888202/A0A3614D-DCF3-40DF-9847-0D5683A02709.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/917000751862128660/IMG_20200924_235705.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906314151809417297/IMG-20210810-WA0013.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906314151343820830/IMG-20210810-WA0011.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906314151809417297/IMG-20210810-WA0013.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906314152404983868/IMG-20210810-WA0017.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906314152736337960/IMG-20210810-WA0023.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906314153239662612/IMG-20201127-WA0071.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906314153453576313/IMG-20210810-WA0030.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/893427763543945246/IMG_20211001_121948_142.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/893446827205091338/FAkVpptVcCEkZVZ.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/893233337731268618/RDT_20210929_2102167038197781060099076.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/893263283254091776/766z5f4rcol61.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/893263282847240262/pussy-hope-u-like-my-wings-ahYSQW.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906406605132800040/RDT_20211002_1122477442448055998674406.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/906406746283728906/IMG_20211001_222806_269.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/892284137615007784/E5J23WzXIAUhgxc.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/892349662818893874/FAW1Y8uVkAAApcr.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/892402443135094824/FAS9B67VkAcN_An.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/892506695815811112/uavwas2e08p51.jpg",
  "https://cdn.discordapp.com/attachments/800248614772539443/892507469987852308/RDT_20210927_1724454249307507035239528.jpg",
  "https://media.discordapp.net/attachments/839494088311046144/887428412212383795/wdw0mldyygn71.jpg",
  "https://media.discordapp.net/attachments/814832701541449758/890207961102843954/mb87uvbpioo71.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/908107118748524584/IMG_20211111_003017_835.jpg",
  "https://realbooru.com//images/721/d93240738e84375ba9eb8860170489ff.gif",
  "https://realbooru.com//images/730/a9d77e190cc458137586fa50f7c8190e.gif",
  "https://realbooru.com//images/730/d2baf93391e2c9de5dff4e2150460d86.gif",
  "https://realbooru.com//images/730/f6aa36aef5cf7ef3d2d27a1665cfe166.gif",
  "https://realbooru.com//images/730/652b53f9b24f362af9ce60997ebc698d.gif",
  "https://realbooru.com//images/730/6eca4c829ac4ac8cfb52f228e9c1f4c4.gif",
  "https://realbooru.com//images/730/530ce43055f37cb776ceb3976856599d.gif",
  "https://realbooru.com//images/730/a8058f92ce70dbd3c4b8a205ed6218bc.gif",
  "https://realbooru.com//images/730/55fa6cfb757cd1576311235c8bac1216.gif",
  "https://realbooru.com//images/730/c4c719a5d22eec605d8617641d8d7809.gif",
  "https://realbooru.com//images/730/5bceb9e8fb5ee27d6354c4c46b81f807.gif",
  
  
  
  
  
  
  
    ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('Pussy')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['pussy'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'pussy',
  description: 'Rastgele fotoğraf atar.',
  usage: 'pussy',

};