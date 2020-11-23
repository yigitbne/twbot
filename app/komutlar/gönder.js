const Discord = require('discord.js');

exports.run = async(client, message) => {

    const rules = new Discord.MessageEmbed()
    
	.setColor('RED')
	.setTitle('İNDİRMEK İÇİN TIKLA')
	.setURL('https://www.dosyaupload.com/g4xa')
  .setDescription('52 Tane Teen Wolf HD WallPaper')
  .addField('Rar Dosyası Şeklinde Sıkıştırılmış Halde Açıp İstediğiniz Gibi Kullanabilirsiniz',':heart:')
  .setThumbnail(client.user.avatarURL())

       message.delete();
      

    return message.channel.send(rules)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}
