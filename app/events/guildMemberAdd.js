const client = new Discord.Client();
const Discord = require("discord.js");

module.exports = member => {
const hgmsg = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Sunucuya yeni bir üye katıldı!")
.setThumbnail(member.user.avatarURL())
.setDescription("Hoşgeldin "+ member +" sunucuya hoşgeldin, seninle beraber "+ member.guild.memberCount+" kişiye ulaştık.")
.addField(`:id: Üye ID:`, `${member.id}`, true)
.addField(`:octagonal_sign: Üye Adı`, `${member}`, true)
client.channels.cache.get("778674786917285969").send(hgmsg)
};
