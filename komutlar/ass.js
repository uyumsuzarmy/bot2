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
  let replies = ["https://media.discordapp.net/attachments/852545563806793739/910118242624868362/sZ5FWq1xJRNf26uMMxqdOmTXXyaukrtdAuFFxjaM5ZA.png?width=419&height=558",
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
  "https://cdn.discordapp.com/attachments/852545563806793739/896462374561787964/E__6PJNUYAQ2hVM.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/896462212540022864/FAuSqGvXsAkgzXY.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/896462076099305502/FAkMhozWEAAY4tc.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/896461812852203581/Ew3y_ONXMAYlnWP.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/895994028187861032/9558f44290ce5b2727a497e71eec0337.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/895698002063278180/CIFI21UWIAAIYYi.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/894563143274094602/EqbXrXLXMAkORB-.png",
  "https://cdn.discordapp.com/attachments/510327290731954179/889437969969205298/25538496.webp",
  "https://cdn.discordapp.com/attachments/852545563806793739/887799597265731624/291632111.jpeg",
  "https://cdn.discordapp.com/attachments/852545563806793739/885550508650156042/terbiyesizbirnesil-20210908-0001.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/883098888611971082/hustlefitness.usa-20210901-0001.jpg",
  "https://cdn.discordapp.com/attachments/852545563806793739/883077515541884938/29e4f7ca89068c3b8dd025bab7c633b5.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/881877781414289448/nnnl2t7k05g61.png",
  "https://cdn.discordapp.com/attachments/852545563806793739/881877696089567252/gtgfnbm004g61.png",
  "https://media.discordapp.net/attachments/852545563806793739/879461841066143794/vipexactly-20210823-0008.jpg",
  "https://media.discordapp.net/attachments/852545563806793739/878605953535189032/1629389829249.jpg?width=306&height=558",
  "https://media.discordapp.net/attachments/852545563806793739/877269454625583204/spghub_239226953_275610567281749_7803813501381213607_n.jpg?width=447&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/875694924778049556/ffd9eb96eba1510a565e936382a4a3a9.png?width=565&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/872807211984887858/picalemi_229323946_557062838640470_8333136917282623992_n.jpg?width=447&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/871452832635686963/s-CDOeDH_400x400.png",
  "https://media.discordapp.net/attachments/852905415700250672/871443483632758844/SPOILER_image0.png",
  "https://media.discordapp.net/attachments/852545563806793739/871409843003617330/unknown.png?width=535&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/869893058953617428/photo_2021-06-22_20-59-13.jpg?width=357&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/866728980266090506/photo4972050791678454140.jpg?width=315&height=559",
  "https://media.discordapp.net/attachments/852545563806793739/862694369134641160/e359ovv5xv971.png?width=419&height=558",
  "https://media.discordapp.net/attachments/852545563806793739/862694298906132560/pu9rw7gpnz971.png?width=314&height=558",
  "https://media.discordapp.net/attachments/744244971481202689/851227348087078942/nevhwdbt5m371.png?width=419&height=558",
  "https://media.discordapp.net/attachments/744244971481202689/851143857864572943/unknown.png?width=452&height=559",
  "https://media.discordapp.net/attachments/812066021569331272/849565613286490132/pgIcpj-Kado.png?width=447&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/850333732756783104/wt64ksfgz3371.png?width=419&height=558",
  "https://media.discordapp.net/attachments/744244971481202689/850332177601789963/31rncydefx271.png?width=462&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/850332150460055572/l5mhaf2078371.png?width=419&height=558",
  "https://media.discordapp.net/attachments/744244971481202689/850331934021124136/65357dd4e7371.png?width=419&height=558",
  "https://media.discordapp.net/attachments/744244971481202689/850331635240534026/lxdi3rbmj3371.png?width=366&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/850331618840543272/ytzxhxffu7371.png?width=418&height=558",
  "https://media.discordapp.net/attachments/744244971481202689/849421318151208990/117291031_1600586213445697_3732585888656268587_o.png",
  "https://images-ext-2.discordapp.net/external/3d4-nFrQMACWrBvnZRqpVliJeMjgoGdEoI995zAdOLI/https/images-ext-2.discordapp.net/external/rBJOh2iFWEKKU_2j9AZuG7L3ewncUP3I37y-n_duqm0/%253Fwidth%253D480%2526height%253D475/https/images-ext-1.discordapp.net/external/96PBNsNKv9_d1cDwQ8uHqE9pbzeETsUXn8ReiAhoqCk/%25253Fwidth%25253D683%252526height%25253D676/https/media.discordapp.net/attachments/485745128779022336/570332986755645467/D42wmtRW4AAvCoq.png?width=565&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/847948975927066634/image0.png?width=387&height=559",
  "https://media.discordapp.net/attachments/750016273097818184/791574548881342464/IMG_20201027_012834_225.png?width=388&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841521434169049128/EEUgCFBUwAA9Mwq.png?width=745&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135758802157578/image1.jpg?width=382&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135759514927134/image4.jpg?width=417&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135693882327080/image0.jpg?width=515&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135694323646475/image1.jpg?width=419&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135695014920223/image2.jpg?width=419&height=559",
  "https://media.discordapp.net/attachments/744244971481202689/841135696126803968/image5.png",
  "https://media.discordapp.net/attachments/744244971481202689/841097894077399050/c4f828c21ceb6b4c9219d8e977219eef.png",
  "https://cdn.discordapp.com/attachments/761964399824338947/763428197312102430/wOpmv12tPlA.png",
  "https://realbooru.com//images/730/5afd3c71440e75383c508805a602f7ed.gif",
  "https://realbooru.com//images/730/5f5651bb8919db3343f1df3faa62680c.gif",
  "https://realbooru.com//images/730/71d8b24eae84dec8b03f512f7ad559ed.gif",
  "https://realbooru.com//images/730/ddf0aec05c43d71abc65bec22ba19ff9.gif",
  "https://realbooru.com//images/730/e469856f16b96497da09d2ce4c728d9d.gif",
  "https://realbooru.com//images/730/68ba2096307b846f365654fd348a376c.gif",
  "https://realbooru.com//images/730/0b2f08a183c6d015ca14b57d3ef7128b.gif",
  "https://cdn.discordapp.com/attachments/906292792916066324/906944814963118170/200089500748_243408.png",
  "https://cdn.discordapp.com/attachments/906292932477321246/913528246249861180/2021-03-27_2024x3000_1b11981d0498f884f0c979d7f1bea24e.jpg",
  "https://cdn.discordapp.com/attachments/906292932477321246/910667219946586182/IMG_20211118_020607_996.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370389478739978/19270870.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370366737244291/25185981.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370230594310144/19257343.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370213246672896/18859198.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370178807238696/22193056.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370135039684608/18162839.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370108267442206/22267223.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894370091150491648/20313958.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369572826791956/13468813.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369523933794314/24800043.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369489561473025/12471641.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369401682423831/16566377.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369336326783016/14559171.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369223298678844/21958750.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369201232445500/13996252.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369177790455889/16563770.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369155153821765/18177558.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894369108349583360/17308619.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894368997984845854/15128328.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894368961330839582/16211749.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/894368805134950400/21786364.png",
  "https://cdn.discordapp.com/attachments/784898529239105587/893665828690599956/20210930_093912.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/893588953054203924/20210930_225418.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/881557466133975090/IMG-20210825-WA0130.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/881557465806823524/IMG-20210825-WA0135.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/881557465504817162/IMG-20210825-WA0127.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/871559007326846976/IMG-20210801-WA0198.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/866431759846211614/IMG-20210718-WA0099.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861369189481447444/FB_IMG_1624807433636.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368972019367976/IMG-20210704-WA0024.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368946870714378/IMG-20210704-WA0036.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368914872238120/IMG-20210704-WA0035.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368895167397918/IMG-20210704-WA0031.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368881078861824/IMG-20210704-WA0029.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368867221274624/IMG-20210704-WA0028.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368832768606229/IMG-20210704-WA0050.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368799168430090/IMG-20210704-WA0047.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/861368743556808705/IMG-20210704-WA0043.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867356611149834/22716316-1.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867197660004402/tumblr_5740d2d595e9fae04e23f343a59bd402_a4723907_1280.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867193692848158/tumblr_9e1347e8a55bfb30f1dd5499b10f1dcc_fbbc777b_1280.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867189708521482/th.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867185718427668/owv2e84ik875.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867181805535262/b62dde0740cd762bd2dec0dded5f00dc.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867166245191690/24766386.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867161957826580/24520559.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867154136498196/24364162.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867151016067073/24217648.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867111194951690/22216696.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867108111351818/22045684.jpg",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867099899428874/21679873.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867093963702292/21151045.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867090750865438/21028449.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867070933827584/20450504.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867068189966366/19713048.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867044898996274/17184187.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867031485612052/15645817.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867023831400488/12013205.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867013757075456/4737088.webp",
  "https://cdn.discordapp.com/attachments/784898529239105587/849867002671530023/633063_159000e_300x_.jpg",
  "https://realbooru.com/images/701/b0d42d366b3152027c4d68ada8c5dae1.jpeg",
  "https://realbooru.com//images/728/5ba9588357f82e88aca2d6986b724538.gif",
  "https://realbooru.com//images/709/83ba90e61bed52f235900befd0e571e9.gif",
  "https://realbooru.com//images/709/602f7fc6fbe5f697cd925e117f6a6666.gif",
  "https://realbooru.com//images/709/7244da1e35e0e8a0916d95caa1209c5a.gif",
  "https://realbooru.com//images/709/4f7b64c75f7472da9f6ffe3af9d3a1ed.gif",
  "https://realbooru.com//images/707/d15cddd74089bd30cfb2e7e021067fff.gif",
  "https://realbooru.com//images/707/6337cb133b796bdfe1a123995689c7a6.gif",
  "https://realbooru.com//images/707/cb74cf6d88ed494c9261dda08c32106c.gif",
  "https://realbooru.com//images/707/7a8825443e010b035fbd2890ca3825a8.gif",
  "https://realbooru.com//images/707/411386f0cc50f96da94753eef6a383f6.gif",
  "https://realbooru.com//images/707/63e52beb9b78c7f60f29807a2eecb961.gif",
  "https://realbooru.com//images/707/c7215d57c399093e27291560ab6b2bca.gif",
  "https://realbooru.com//images/725/b8d8f65abcdd2fb7bb733ece284c9e92.gif",
  "https://realbooru.com//images/730/67ab7b90fac4842c1e213b947f63070a.gif",
  "https://realbooru.com//images/728/6e5f61acf6944814c0c688d1f2223401.gif",
  "https://realbooru.com//images/730/3b108f10b53ab7574de96cd621d1f1c7.gif",
  "https://realbooru.com//images/730/d0bc1a40d45ca49094b451983aa48dff.gif",
  "https://realbooru.com//images/730/7046fe92bada8822ca150d72f6de975e.gif",
  "https://realbooru.com//images/730/9f6f40198265d57073929d96e603c672.gif",
  "https://realbooru.com//images/730/4c08b8efe95e96e78cf16aaf94d0202b.gif",
  "https://realbooru.com//images/648/4c160e52d8c0761faaf72816b7fb67a3.gif",
  "https://realbooru.com//images/648/89d2847bba031d0370136f63cb4fad26.gif",
  "https://realbooru.com//images/648/67cff7a9399c1c4951b4325c003a2e83.gif",
  "https://realbooru.com//images/730/fe2e8b4497eaeab9004535ff5e5ce8f9.gif",
  "https://realbooru.com//images/730/794291090201e4e1c45095c9465279c1.gif",
  "https://realbooru.com//images/730/9e81dde2471a5da4022d2cf064b7b5e3.gif",
  "https://realbooru.com//images/727/e94a698f82afc9facd7463b52a623042.gif",
  "https://realbooru.com//images/730/6a08fc8670a52fc9deff0a47da1fba45.gif",
  "https://realbooru.com//images/730/9c793866dec3d63c59cc16f3955348df.gif",
  "https://realbooru.com//images/730/413cd519ca2f03836d5f40fabdd79a68.gif",
  "https://realbooru.com//images/730/afe04192fa1729c1a29935fb4db9fc01.gif",
  "https://realbooru.com//images/730/7506adde190cc23708f76fe4651c572d.gif",
  "https://realbooru.com//images/730/a27309a9750be92be45b1b38a1d2c064.gif",
  "https://realbooru.com//images/730/b333b2f1a03b4b29eb941c3478f41b37.gif",
  "https://realbooru.com//images/730/cc1e70e55b26f07453b5a8d7e5bf2ce2.gif",
  "https://realbooru.com//images/730/358e49bce811961be5a9a1abf5b22638.gif",
  "https://realbooru.com//images/730/c3d3eef1fc93b10c25cc091ef3fb0ec5.gif",
  "https://realbooru.com//images/730/f49c67a6136bb4edc3e9ee68f423471c.gif",
  "https://realbooru.com//images/730/c4f26791c53a3fcf036298ac1b390dc8.gif",
  "https://cdn.discordapp.com/attachments/809196962930884668/892538189691125770/telegramturkturbanliifsa-20210929-0002.jpg",
  "https://media.discordapp.net/attachments/852545563806793739/896461812852203581/Ew3y_ONXMAYlnWP.png",
  "https://cdn.discordapp.com/attachments/894888686158766110/937763045906735134/6tag-12411530-1477123214346197470_12411530.jpg",
  "https://cdn.discordapp.com/attachments/894888686158766110/937763123006410752/C__Data_Users_DefApps_AppData_INTERNETEXPLORER_Temp_Saved_Images_IMG_0117.jpg",
  



  
  ];
    let result = Math.floor((Math.random() * replies.length));
    
    const embed = new Discord.RichEmbed()
    .setTitle('Ass')
    .setAuthor('Türbanlı Bot')
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['ass'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'ass',
  description: 'Rastgele fotoğraf atar.',
  usage: 'ass',

};