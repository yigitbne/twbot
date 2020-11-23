const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.member.voice.channel) {
    return message.channel.send("Ses kanalında olman lazım!");
  }
const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
    };
  
  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı) return message.channel.send("**Kullanıcıyı etiketlemelisin.**");

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);

  if (!member.voice.channel) return message.channel.send("Etiketlenen kullanıcı bir ses kanalında değil").then(m => m.delete(5000));

  const voiceChannel = message.member.voice.channel.id;
  if (!voiceChannel) return;
  
      let log = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${kullanıcı}, ${message.author} \`${message.member.voice.channel.name}\` Odasına Çekmek İstiyor. Kabul ediyormusun ?`)
                .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL()}`
    )
  
  
    let mesaj = await message.channel.send(log)
    await mesaj.react("✅")
    await mesaj.react("❌")
    mesaj.awaitReactions(filter, {
        maxProcessed: 1,
        time: 60000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {
            let kabul = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${kullanıcı} Odaya Çekilme Teklifini Onayladı.`)
            message.channel.send(kabul)
           member.voice.setChannel(voiceChannel);
        } else {
            let elite = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(`${kullanıcı} Odaya Çekilme Teklifini Reddetti`)
            message.channel.send(elite)
        }
    })
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 0
};
exports.help = {
  name: "çek",
  description: "çek",
  usage: "çek"
};