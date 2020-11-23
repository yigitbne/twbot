const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
  const embed = new Discord.MessageEmbed()
  .setTitle('Ping')
  .setDescription(`Pingim: ${client.ws.ping}ms'dir. `, message.author.name)
  .setThumbnail(client.user.avatarURL())
  message.channel.send(embed)
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'ping',
  description: 'Ping komutudur.',
  usage: 'ping'
}