const Discord = require("discord.js");

module.exports.run = async (Octopus, message, args) => {
  let msg = await message.channel.send("Test Ediliyor.🕐");
  let msg1 = await message.channel.send("Test Ediliyor..🕐");
  let msg2 = await message.channel.send("Test Ediliyor...🕐");
  let testembed = new Discord.MessageEmbed()
  .setColor("0xe2ff00")
  .setDescription(`Test Başarılı. Bot Çevrimiçi <a:tik3:779513756488302592>`)
  message.channel.send(testembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['test'],
  permLevel: 0
};

exports.help = {
  name: 'botkontrol'
};