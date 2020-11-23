const Discord = require('discord.js');
exports.run = function(client, message, args) {
      const sayMessage = args.join(` `);
      client.user.setActivity(sayMessage,{ type: "WATCHING"});
      message.channel.send(`Oynuyor Kısmı **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oynuyor'],
  permLevel: 5
};

exports.help = {
  name: 'oyundeğiş',
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};