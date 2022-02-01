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
  return message.channel.send(nsfwuyari)
  let replies = ["https://im2.ezgif.com/tmp/ezgif-2-faf992b60fa1.gif",
  "https://realbooru.com//images/730/46facc339b21571f79a0c68516249d0d.gif",
  "https://realbooru.com//images/730/dd691231b9be06e030fd71dc4d100cd8.gif",
  "https://realbooru.com//images/730/9bf875c047e0ea8e466c4c7fce308de1.gif",
  "https://realbooru.com//images/730/4a61a4db4d88b1b107ce3dbab3d9a8f8.gif",
  "https://realbooru.com//images/730/2346f792b4919c59e99a861e987e99f3.gif",
  "https://realbooru.com//images/730/59885b04f109bb03cd138ef3fa1c49ee.gif",
  "https://realbooru.com//images/730/3169b9ee96e7e015d6f0624d0b1be7ea.gif",
  "https://realbooru.com//images/730/20d8aa1cfc22a62cc268a63ca3f7f224.gif",
  "https://realbooru.com//images/730/2deba3a53fa6944336320ad3355227f3.gif",
  "https://realbooru.com//images/716/b5842d7e7ba6c2699d299e020d6b4d44.gif",
  "https://realbooru.com//images/716/2b3980fe8fe4d65e1672c1764ea938ad.gif",
  "https://realbooru.com//images/713/61a2a5e815269d34dbfbaf8ca6e2bc72.gif",
  "https://realbooru.com//images/713/79a6c6bf5ced597fc7603a786952d94a.gif",
  "https://realbooru.com//images/713/49a0459747187efc17c9fb3dfc2147b3.gif",
  "https://realbooru.com//images/728/2b8126d9a7c00a98882ff4a64206d13e.gif",
  "https://realbooru.com//images/728/a5758eea26356b67e6b90cf706997190.gif",
  "https://realbooru.com//images/727/2f197aba152077307d21cb8eb49cd5c8.gif",
  "https://realbooru.com//images/727/f273ab072fdfb6f46803cb5adc1d403c.gif",
  "https://realbooru.com//images/708/66e180e2d3208d3a24553b52efa0780b.gif",
  "https://realbooru.com//images/708/bbf458010b0bded731de155b51df9e00.gif",
  "https://realbooru.com//images/708/75c2308e8c39cd60242ab6aeab47b0ef.gif",
  "https://realbooru.com//images/708/e1dadd71b2ed96a39e9538c6939de8b5.gif",
  "https://realbooru.com//images/707/26b2fa0899cafd055221d5035137d2e4.gif",
  "https://realbooru.com//images/707/71ef135e4b236fa17f5a92020618593c.gif",
  "https://realbooru.com//images/691/83bde53ea6d502897ec25f14c07aed1d5759029b.gif",
  "https://realbooru.com//images/691/327cdb6c4bde201dd6fe63f443e5c360923c2d2f.gif",
  "https://realbooru.com//images/718/92d9eb3bca9e0c0e793f2a99760fa4b1.gif",
  "https://realbooru.com//images/656/5a476c308dd73d17005623847c257495.gif",
  "https://realbooru.com//images/656/1290b69957b9218fd7031ce716836c47.gif",
  "https://realbooru.com//images/612/42a73b8364cf39a1cba68edab44a5314.gif",
  "https://realbooru.com//images/730/4099985558d16e58e763882f4571c374.gif",
  "https://realbooru.com//images/612/792afc7eaddba52b707c4414dd71215d.gif",
  "https://realbooru.com//images/648/82ecb51bf226b604d78abedd398ee798.gif",
  "https://realbooru.com//images/659/9dd4d9a8dda385dd6cfe3f3b4f32edca.gif",
  "https://realbooru.com//images/691/c93359127f49e7a88f37a15488bc1335.gif",
  "https://realbooru.com//images/730/d623003c868ccc74e660d33f35630beb.gif",
  "https://realbooru.com//images/730/9397ce0c7e25ee40447bf12aa7797dc1.gif",
  "https://realbooru.com//images/730/d6745ce1eb4e293be8fd4590270fb277.gif",
  "https://realbooru.com//images/730/b991654eaa02b800f2f39ee0c9d45097.gif",
  "https://realbooru.com//images/730/0a8d3febe14f1ae78a3628aaa5737628.gif",
  "https://realbooru.com//images/730/7bacee5b87a3761614aed41de2e65bbc.gif",
  "https://realbooru.com//images/730/9f16376296d4032ecf105de6b9173898.gif",
  "https://realbooru.com//images/730/049ebb3d8a5f3b8ff4b3c3a316013d13.gif",
  "https://realbooru.com//images/706/35f9e8950a66f11eb000db4fbe8fc950.gif",
  "https://realbooru.com//images/730/4dd272a29393823852de5a9aa6236129.gif",
  "https://realbooru.com//images/730/48013dbb1f954de136026a5eda7d91ee.gif",
  "https://realbooru.com//images/730/8b7134ecb28bca05ab69774a850af735.gif",
  "https://realbooru.com//images/730/5285c8f5d7d50a30ff564281069cb915.gif",
  "https://realbooru.com//images/730/eb3f7c659356852a8a8914207b631752.gif",
  "https://realbooru.com//images/730/16f5a97576beeb8dd0cb1cc2db8318be.gif",
  "https://realbooru.com//images/730/9bc60c17a009c5b1e91911c307e0451e.gif",
  "https://realbooru.com//images/730/d46f6e12d6f05a411dcc37fdbb400a06.gif",
  "https://realbooru.com//images/730/c77d81ef96398ba002d4ee02c3ff91f8.gif",
  "https://realbooru.com//images/730/6a62b10c55a0d67ac8e8bcd8643675b6.gif",
  "https://realbooru.com//images/730/46facc339b21571f79a0c68516249d0d.gif",
  "https://realbooru.com//images/730/9bf875c047e0ea8e466c4c7fce308de1.gif",
  
  ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('Porn')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['porn'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'porn',
  description: 'Rastgele fotoğraf atar.',
  usage: 'porn',

};