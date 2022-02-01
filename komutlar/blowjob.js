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
  "https://im2.ezgif.com/tmp/ezgif-2-d11b64abf531.gif",
  "https://realbooru.com/images/616/8598071f4528e066a760a7416307bfa1eac0e691.gif",
  "https://realbooru.com//images/730/01521ecf07958c85cc373105e9c2bc62.gif",
  "https://realbooru.com//images/730/54d15fa0854728a05df413021be361ac.gif",
  "https://realbooru.com//images/730/2ab9a9130d795c08cf6076a8a703b21a.gif",
  "https://realbooru.com//images/730/3a235c9a550f98a12d50c4e633c6e2a5.gif",
  "https://realbooru.com//images/727/f09e5fbc5f8ebddcb854376e45b3adf3.gif",
  "https://realbooru.com//images/727/a94ea72527b72793791deea3de6b77e3.gif",
  "https://realbooru.com//images/725/9cedf27ff35f98bbdb48614ea0c0427f.gif",
  "https://realbooru.com//images/728/fa7cf2b5fe97735d926a636a2b6ba024.gif",
  "https://realbooru.com//images/725/72a967b520d2cf7bf70624cfa15a08f2.gif",
  "https://realbooru.com//images/721/0113adf57e76272a3f647d3b73de4046.gif",
  "https://realbooru.com//images/722/bfcb4c88ba652b92011407e8dfc21a5c.gif",
  "https://realbooru.com//images/722/6091953b3e6983e44f9e3af7003a4cc8.gif",
  "https://realbooru.com//images/721/55ee0cb6655968acccf716fc2dfcd863.gif",
  "https://realbooru.com//images/721/92409a6c1c0c1dedbed57addd6f03820.gif",
  "https://realbooru.com//images/721/503facacfcf7e84415526a080202d202.gif",
  "https://realbooru.com//images/721/6572902ecf5fe5dabdfc139f61004acc.gif",
  "https://realbooru.com//images/721/e9ea8835c67affc59b691cc74c52090f.gif",
  "https://realbooru.com//images/702/9c7ada0b65a6f1230b885af27783bbe7.gif",
  "https://realbooru.com//images/702/ac64c4e886b31d46f72d93070a0f5f21.gif",
  "https://realbooru.com//images/702/963a5e98b840e6d7a64df7d87a79af9f.gif",
  "https://realbooru.com//images/719/1a732df6d059861dd4c2bf96a36173db.gif",
  "https://realbooru.com//images/721/4f6fa4267ab083ee76a90a24ba3a76f6.gif",
  "https://realbooru.com//images/668/5c9f80a6c719dd8f477335ca1644d717.gif",
  "https://realbooru.com//images/718/37b9b93fdef1a56b36e5fb6568a9fe7a.gif",
  "https://realbooru.com//images/621/400559f86e7fa8138b1bcb4cd623cc4c.gif",
  "https://realbooru.com//images/637/7db6f07dc3ad14e355f54c2585022ba8.gif",
  "https://realbooru.com//images/715/8e996d46ffb13274c29da7efbb6c2063.gif",
  "https://realbooru.com//images/715/5399d098e8173dcef5adf3190d808be6.gif",
  "https://realbooru.com//images/715/6266a08627d5c0f6bb964fdc75690206.gif",
  "https://realbooru.com//images/715/176ac36a7940c1ec47b3a9104643884e.gif",
  "https://realbooru.com//images/715/6f48671af2394c124bd9e5d71d1017c5.gif",
  "https://realbooru.com//images/715/ef5905fb57682d2024bc0ec122571322.gif",
  "https://realbooru.com//images/714/7366acea97a47e119ac000bc69bda1ad.gif",
  "https://realbooru.com//images/714/194abdcdbe2151429d0298ae8f26627e.gif",
  "https://realbooru.com//images/687/94b31a3438902a940258d9d414b5c48c.gif",
  "https://realbooru.com//images/713/ed167e8723813069439c9816cc889494.gif",
  "https://realbooru.com//images/713/1ec51f3f6d1a72f830757443433c7a39.gif",
  "https://realbooru.com//images/712/36c1416ce0c4d4f2e8da3f2311210c1d.gif",
  "https://realbooru.com//images/712/66d69cd6e20235691fccd9e25b10b823.gif",
  "https://realbooru.com//images/712/5ad2144e15d4a504a0313a127cfa85ab.gif",
  "https://realbooru.com//images/711/4ac6f4a29b83d2a4fd3a44450ec2327c.gif",
  "https://realbooru.com//images/711/771fe5ee0503a5081492b2218be52713.gif",
  "https://realbooru.com//images/711/1e6dfcad70cd21ccd759fff69c62526b.gif",
  "https://realbooru.com//images/711/d2afbf31faf499d4efbc34e34ea40394.gif",
  "https://realbooru.com//images/711/91e61e15aa0a02c34ebecf634db37970.gif",
  "https://realbooru.com//images/688/9b14c5972e24b151c606890987d40a7b.gif",
  "https://realbooru.com//images/676/3ba622ff5aeadc71e9c99b5e9ae4ad1a.gif",
  "https://realbooru.com//images/711/58a0d29e1882ab4c11a6f0fb8ca19ad5.gif",
  "https://realbooru.com//images/711/acdc0904904c5864bbf57b2710a4448f.gif",
  "https://realbooru.com//images/711/c605a68eae5705bb3a232bb9a91929f4.gif",
  "https://realbooru.com//images/710/86060fd1b5b9fd9878b4e951768d27fd.gif",
  "https://realbooru.com//images/710/e102ed4b7112f37c8221718d880dfd3b.gif",
  "https://realbooru.com//images/705/e16b30375628cab96c18726b7d34f747.gif",
  "https://realbooru.com//images/728/024901eca09ed7362b65bed822a497f9.gif",
  "https://realbooru.com//images/707/5d0632c3ae120f093542dd3d5d34fd9b.gif",
  "https://realbooru.com//images/730/8b52e96c8fd929b25263d84b5a12c4b9.gif",
  "https://realbooru.com//images/730/3255426104f54c325f54f131abfb52a8.gif",
  "https://realbooru.com//images/730/74f8010679b72cbebb43be2fc0b9e93d.gif",
  "https://realbooru.com//images/730/15eafbf3249bb4c7394b56aad4575c88.gif",
  "https://realbooru.com//images/730/f580b5e79a3e6ea0a37bfa5af65cdef3.gif",
  "https://realbooru.com//images/730/13510ce3138e5198ab8ee9566490d9d9.gif",
  "https://realbooru.com//images/730/f96cd3f1bb70feea8c8981f2f0c6559d.gif",
  "https://realbooru.com//images/730/167c4dba8d97eec7eff6a111f1b7e857.gif",
  "https://realbooru.com//images/730/302c29ae4516759d7c7dec5e99297b84.gif",
  "https://realbooru.com//images/730/e0b0baab65318bd887904f81fd4a87e7.gif",
  "https://realbooru.com//images/730/b4c115f2996d68b5991eb4182fc96755.gif",
  
  

  
  ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('Blowjob')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['blowjob'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'blowjob',
  description: 'Rastgele fotoğraf atar.',
  usage: 'blowjob',

};