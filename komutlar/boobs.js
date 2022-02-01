const Discord = require("discord.js")
const request = require("request")
const cheerio = require("cheerio")
//$adista aiit
module.exports.run = async (bot, message, args) => {

  const nsfwuyari = new Discord.RichEmbed()
    .setTitle('Bu kanal NSFW kategorisine uygun değildir.')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setFooter(`${message.author.username} tarafından kullanıldı.`)

  if(!message.channel.nsfw)
  return message.channel.send(nsfwuyari);
  let replies = ["https://cdn.discordapp.com/attachments/852545563806793739/890128066565783602/terbiyesizbirnesil-20210916-0001.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/890123703952740392/1632290428930.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/877145574279897108/IMG_20210625_022917_145.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/875500207788392468/image2.jpeg",
  "https://cdn.discordapp.com/attachments/852545563806793739/874411742518739014/1628545514873.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/874411741939916810/1628545452201.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/874400604678684752/1628537173634.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/871452944892047360/K_EHq0vA.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/869893129094987796/photo_2021-06-22_20-55-45.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/864198943780765726/elwerci_213128676_2674008086230785_4319350255464758277_n.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/859921143086579712/image0.png",
  "https://media.discordapp.net/attachments/852545563806793739/875694885267714048/tumblr_ojir9lsufv1uiuo93o1_500.png",
  "https://media.discordapp.net/attachments/852545563806793739/875514816796721152/IMG_20210813_013301_301.jpg?width=300&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/872807212731494451/picalemi_212126595_2943807489191203_3131004737150033534_n.jpg?width=461&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/872807209476702218/picalemi_217535317_170644908388233_2736102760480086625_n.jpg?width=455&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/854768512509018112/paikesetsikk.png",
  "https://media.discordapp.net/attachments/744244971481202689/841448365018578964/image0.jpg?width=392&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841448365312573440/image1.jpg?width=464&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841448365576552458/image2.png?width=363&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841448365929005066/image3.jpg?width=419&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135848485158932/image1.png?width=559&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135758650638366/image0.jpg?width=731&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135759096283156/image2.jpg",
  "https://media.discordapp.net/attachments/744244971481202689/841135759343484978/image3.jpg",
  "https://media.discordapp.net/attachments/744244971481202689/841135695308259349/image3.jpg?width=559&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/838228348580266034/image0.jpg?width=745&height=559",
  "https://images-ext-2.discordapp.net/external/ymE42CR26lfOgpkB8Tfawvo5iK51QkeKYubc4ANv64M/https/media.discordapp.net/attachments/836244460743950348/836258301863002172/melinin_anas.gif",
  "https://media.discordapp.net/attachments/744244971481202689/835625933422854154/image0-74.gif",
  "https://media.discordapp.net/attachments/744244971481202689/825685025319288852/FB_IMG_1556564098782.png",
  "https://media.discordapp.net/attachments/744244971481202689/821768679045857342/8a781790e2964c83854a399cfa8e993b.png",
  "https://media.discordapp.net/attachments/784898536491188224/802045577826271242/pj77jwg2yrc61.gif?width=264&height=558",
  "https://images-ext-2.discordapp.net/external/rBm2O_wmoG_0Fvv4cJayCQfE8HNBFtUe4gB9Uj1cWUI/https/cdn.boob.bot/Gifs/1669.gif",
  "https://media.discordapp.net/attachments/744244971481202689/802565147133476864/6894eaf4cb1eb1c952d9bc9f15fa5422.png",
  "https://media.discordapp.net/attachments/747471632859136091/776446391337615429/Screenshot_20201112_124113.png?width=419&height=559",
  "https://cdn.discordapp.com/attachments/839988150678978582/839990830571716608/TEMELHUB_PHOTO_33.jpg",
  "https://media.discordapp.net/attachments/545407347103760392/914018013030789210/2shdbc1so1281.png?width=885&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913898117303242802/RDT_20211126_2257302965090335912062420.jpg?width=419&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913737649968271400/16379224210865435337563078476212.jpg?width=336&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913712552108765184/RDT_20211126_1413066165780763017840327.jpg?width=429&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913712552305885264/RDT_20211125_0238377913425504319763134.jpg?width=745&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913712552528187432/RDT_20211125_0238337884968627398247444.jpg?width=593&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913712552733720596/RDT_20211125_0238314438779026018263719.jpg?width=420&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913712552956014612/RDT_20211125_0238399220578486689269136.jpg?width=419&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913712553169911808/RDT_20211125_0239522213404834224213838.jpg?width=528&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913712553379651614/RDT_20211125_0238285024315825233566762.jpg?width=461&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913541730362621952/20126594.gif",
  "https://media.discordapp.net/attachments/545407347103760392/913541731016925184/21604131.gif",
  "https://media.discordapp.net/attachments/545407347103760392/913541731528613928/23089172.gif",
  "https://media.discordapp.net/attachments/545407347103760392/913273315504844831/5M1uu9uC2hF4PYXqPaJgAPVPSTUvemk5KRo7O7mnjaQ.png?width=419&height=558",
  "https://media.discordapp.net/attachments/728287535008317520/913124783619719260/19309636.png?width=398&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913178589741068378/RDT_20211125_0238314438779026018263719.jpg?width=420&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/913094589060104222/Jiggle-jiggle-jiggle.gif?width=372&height=559",
  "https://images-ext-1.discordapp.net/external/xhBFKn9bt2CiLkAj2at7tTZ4BEn1xq_DEOKO3-B6yg8/https/i.imgur.com/t0hujLP.jpg?width=395&height=559",
  "https://images-ext-1.discordapp.net/external/XmnIfGml-EuTy3FlEnTfUE47yNhJlgWvzEMKgHsl79w/https/i.imgur.com/YNfUxY5.jpg?width=960&height=559",
  "https://media.discordapp.net/attachments/640212763884388362/912822029781184592/srzcv5xlze181.png?width=637&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912804424672489492/t9ftzws2bk.gif",
  "https://images-ext-2.discordapp.net/external/5sYm1Da6zZEuU761hRz_0k9MQictfpv5SA4gkGIiI1c/https/i.redd.it/gyaaixyocb181.jpg?width=447&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912729568526340166/ktnstbf0io.gif?width=314&height=558",
  "https://images-ext-1.discordapp.net/external/_MYs98HpZCbWCwfdTx0G6ne5cSGttSuHLGvxJrzn0sw/https/i.redd.it/m0yq4y7o59181.jpg?width=437&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912494802581454908/images_18.png?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912494768624402452/images_17.png?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912360410638844005/slight-bounce.gif",
  "https://media.discordapp.net/attachments/545407347103760392/912356291672965140/UJxu9wKACNFjijfrQiytaIl4RIW9UzVOTlG5sqyzP64.png?width=314&height=558",
  "https://media.discordapp.net/attachments/545407347103760392/912339939356725308/Screenshot_20211122-074822-307.png?width=377&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912339939620978688/Screenshot_20211122-074839-530.png?width=381&height=558",
  "https://media.discordapp.net/attachments/545407347103760392/912339939901976626/Screenshot_20211122-074746-401.png?width=378&height=559",
  "https://images-ext-2.discordapp.net/external/i7_R5-cyztbeRfGGbClSZhABtIYpeOCP6C3LFlEiuhU/https/i.imgur.com/zBiKMUF.mp4",
  "https://media.discordapp.net/attachments/545407347103760392/912208846716542986/ezgif.com-gif-maker_2.gif",
  "https://media.discordapp.net/attachments/545407347103760392/912198666004090880/l6a6pwoa8lb71.png?width=431&height=559",
  "https://images-ext-2.discordapp.net/external/qfIwFSttguqWMMAFh5gMHPb53FqXTmM4wJK5fCMupJ0/https/i.redd.it/xf26ae7coff71.jpg?width=411&height=559",
  "https://images-ext-2.discordapp.net/external/_9vgfK7MdcZ_RZLLGoWBOeSwMYstlCB1FtpWhOoOvtI/https/i.imgur.com/cvHdJvL.mp4",
  "https://images-ext-2.discordapp.net/external/2Q1eSYNOKm4H3A1M4OahmYTWk4r8CLhL7Ilz2m5JxuM/https/i.redd.it/o8hjsl4di2181.jpg?width=422&height=559",
  "https://images-ext-2.discordapp.net/external/NyHBXBazUwlWOjCysOSEzJd0GGGOm_wnO7oymuhnHiQ/https/i.redd.it/8voneno642181.jpg?width=419&height=559",
  "https://images-ext-2.discordapp.net/external/CzrcaqRkcv4uCyfm-iQlhDOYaWjjo6NeVswSUK35TvM/https/i.redd.it/n9qjuqr7r1181.gif",
  "https://media.discordapp.net/attachments/545407347103760392/912087953432543292/abP2cn_Mx4QnhJhpxDV0BprkrSlWavH0CWVp4f_zEaQ.png?width=448&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031186572947536/E2RQdVWXsAM4SxP.jpg?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031187109822484/dh3fcwihecy61.jpg?width=373&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031187323723806/d6kgpnr.jpg?width=315&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031189928390687/bdsmlr-909330-RmfvH5TDuu.gif",
  "https://media.discordapp.net/attachments/545407347103760392/912031190788227172/bdsmlr-14509-BAQ01Vastb.gif?width=224&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030999850913842/jss01gch02o61.png?width=419&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031000475873350/GetImage6.jpg?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031000169705522/GetImage5.jpg?width=369&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031000782053456/GetImage3.jpg?width=357&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031001058885683/GetImage2.jpg?width=420&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912031001499271248/EzHNd0pWgAInh4H.png?width=839&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030805252009994/VK06Bad.jpg?width=373&height=558",
  "https://media.discordapp.net/attachments/545407347103760392/912030805604323389/vd73s2s.jpg?width=894&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030805931458680/tumblr_no8r0awWcP1qfiqhgo1_1280.jpg?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030806195703900/tumblr_ndcj05npgp1rvqojpo1_500.jpg?width=364&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030806589992970/tumblr_mgadz41DvX1qm7d6go1_500.jpg?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030807193948170/lDkPdqg.jpg?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030807458209802/K9c8DiA.jpg?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030655058157609/yW6woTQ.jpg",
  "https://media.discordapp.net/attachments/545407347103760392/912030655444025354/wqjsv8U.jpg?width=839&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030655859281982/wallhaven-73j7e3.jpg?width=839&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030656358412358/w_5.jpg?width=373&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/912030656710738050/w_3.jpg?width=350&height=558",
  "https://images-ext-2.discordapp.net/external/CgLhIC6Viydox9seexMaNzpe-Pc3eEqG0ygZkAH_OKM/https/i.redd.it/s7vl569yws081.jpg?width=460&height=559",
  "https://images-ext-2.discordapp.net/external/6LdQWiFzq-i4Wx_cHSgKhcHqmJwWrpQHMXPK7D5aFe8/https/i.imgur.com/BmvHElJ.jpg?width=597&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/911379939092226118/ig51hy6zel081.png?width=365&height=559",
  "https://images-ext-1.discordapp.net/external/jyqHRbcdePLNmQqkG6vwv0RXqwA7J9Iv5bBYWpJfhTg/https/i.imgur.com/LXNKOsk.mp4",
  "https://media.discordapp.net/attachments/545407347103760392/911378823952597022/JzcSYXEc-y6obvTcjVMZCmn4Yjw8mkN_WTX7_3Z1V9U.png",
  "https://media.discordapp.net/attachments/545407347103760392/911375889114202163/5ciy4gwaoj081.png?width=447&height=559",
  "https://images-ext-2.discordapp.net/external/xuqhQ2Cfzc7Q7aIe4Y3LV1dWhz37_BS056NWjBHWu2w/https/i.imgur.com/wsbv5UK.mp4",
  "https://images-ext-1.discordapp.net/external/TAN6Mas9-745adfRq3UJ9YYDMwmQy5et1jLLIpJC1tQ/https/i.imgur.com/PvUQOwv.mp4",
  "https://media.discordapp.net/attachments/545407347103760392/911106861841911828/elfn42vate081.png?width=372&height=559",
  "https://media.discordapp.net/attachments/545407347103760392/911104242801061918/4jhsp3p1dc081.png?width=314&height=559",
  "https://images-ext-2.discordapp.net/external/GytRFauXm1tMRFihOluUGjSj84FGFfDa6CckxE6EF0Q/https/i.imgur.com/6F1FhCH.mp4",
  "https://i.imgur.com/s6u8mRE.gifv",
  "https://i.imgur.com/nFeVuYQ.gifv",
  "https://realbooru.com//images/654/62b12032285e54371107aeb7867664ae.gif",
  "https://realbooru.com//images/730/0e8282ed4acffa921b599fc797608f2c.gif",
  "https://realbooru.com//images/730/03728385e2b49b8c877149af43f402e2.gif",
  "https://realbooru.com//images/730/ce242e4f7fcb84cbcf2926352cfd5ad5.gif",
  "https://realbooru.com//images/730/539cc0cb7ccb922b1a8d2cf459b73d6d.gif",
  "https://cdn.discordapp.com/attachments/914541898880938134/914874735022727168/uj3s34mfya281.jpg",
  "https://cdn.discordapp.com/attachments/914541898880938134/914874735781875712/73l23whck8281.jpg",
  "https://cdn.discordapp.com/attachments/806477313465647104/858025878382051338/E0q6OpWWQAAd5nJ.png",
  "https://realbooru.com//images/723/1dc70f11cac8484da1f118e757e046c3.jpeg",
  "https://realbooru.com//images/719/20ebc2bd436be829dd81d74ddaac64c9.gif",
  "https://realbooru.com//images/707/6337cb133b796bdfe1a123995689c7a6.gif",
  "https://realbooru.com//images/707/f23638d9793dcd5b130eb2e61824ef15.gif",
  "https://realbooru.com//images/730/b716864549447b7a1d411b01c3730ad2.gif",
  "https://realbooru.com//images/691/5e785d4db815529336f01e94af4db1410cccff9a.gif",
  "https://realbooru.com//images/730/c6f878b86ef2e8ca7a9ef6b980822e29.gif",
  "https://realbooru.com//images/730/2512d67c23372e5e5144386458eff314.gif",
  "https://realbooru.com//images/730/c9a1003113591c97571cc131a621fdab.gif",
  "https://realbooru.com//images/730/f63aa4850a9669d9d34389f482b310ac.gif",
  "https://realbooru.com//images/730/f7dc0fdfa7d00b50a0d1f941282d95aa.gif",
  "https://realbooru.com//images/730/5e8a05a332092a8cdbc4469e6eb4cd42.gif",
  "https://realbooru.com//images/730/efe298b422f17e3b36fbbc6342f16b6c.gif",
  "https://realbooru.com//images/730/e1ab817fdba8e8bdad3257fce4c44f1f.gif",
  "https://realbooru.com//images/730/cecd6a935dc979b9cc47c70cbc15e3b5.gif",
  "https://realbooru.com//images/730/61d356eb9d8a796c4552d85407425bb3.gif",
  "https://realbooru.com//images/730/805b6b6de8cc3ffc874fd47cb0e358dc.gif",
  "https://realbooru.com//images/730/216c07e8fd42d55fb5aa1af517f9efab.gif",
  "https://cdn.discordapp.com/attachments/894888686158766110/937762650543230996/73l23whck8281.jpg",
  "https://cdn.discordapp.com/attachments/894888686158766110/937762754515845130/uj3s34mfya281.jpg",
  




   ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('Boobs')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['boobs'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'boobs',
  description: 'Rastgele fotoğraf atar.',
  usage: 'boobs',

};