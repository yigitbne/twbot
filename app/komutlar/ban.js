const Discord = require('discord.js');


exports.run = (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Bu Komut Yetkililere Özeldir Sen Yetkili Olmadığın İçin Kullanamazsın.')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Yetkilerim çok az bu işlemi yapamamaktayım maalesef')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Kullanıcı Belirtmeyi Unuttun Sanki?');

        if(!member) return message.channel.send('Banlamak İstediğin Kullanıcıyı Bulamıyorum Doğru Kişiyi Aradığına Eminmisin?');
        if(!member.bannable) return message.channel.send('Bu Kullanıcı Yasaklanamaz. Mod & Yönetici Oldukları İçin Yada En Yüksek Rolleri Benimkinden Daha Yüksek Oldundan Banlayamamaktayım.');

        if(member.id === message.author.id) return message.channel.send('Dostum Kendini Yasaklamayamı Çalıştın Sen?.');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'belirtilmemiş';

        member.ban({reason:`${reason}`})
        .catch(err => {
            if(err) return message.channel.send('Bazı Şeyler Ters Gitti Sanırsam?')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Üye Yasaklandı')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Kullanıcı Yasaklandı', member)
        .addField('Tarafından atıldı', message.author)
        .addField('Sebebi',   reason)
        .setFooter('Kullanıcı Banlandı', client.user.displayAvatarURL())
           const exampleEmbed = new Discord.MessageEmbed()


        message.channel.send(banembed)
  client.channels.cache.get("777654586030817310").send(banembed);


    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban'],
    permLevel: 0
};

exports.help = {
    name: 'ban',
    description: 'Ban ',
    usage: 'ban'
};