const Discord = require('discord.js')
const data = require('quick.db')

exports.run = async (client, message, args) => {
let prefix = '+'

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.`)
if(!args[0]) return message.channel.send(`Sistemi kullanmak için, ${prefix}uyarı ekle/sil/bilgi komutlarını kullanın.`)


if(args[0] === 'ekle') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
if(!kullanıcı) return message.channel.send(`${args[1]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return message.channel.send(`Botları uyaramam.`)
if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)
let reason = args.slice(2).join(' ')

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

const asd = new Discord.MessageEmbed()
.setColor('#fd0000')
.setTitle('Uyarı')
.setThumbnail(kullanıcı.avatarURL())
.setDescription(`${kullanıcı} Uyarıldı`)
.addField(`Sebep`, `${reason || "Belirtilmemiş"}`, true)
.addField(`Uyarı Sayısı`, `${syı || "0"}`, true)


const asd1 = new Discord.MessageEmbed()
.setColor('fd0000')
.setTitle(`<a:alarm3:779513789992796180> Uyarı <a:alarm3:779513789992796180>`)
.setThumbnail(kullanıcı.avatarURL())
.setDescription(`Merhaba ${kullanıcı} ${message.guild.name} sunucusunda uyarıldın.Lütfen Daha Dikkatli Ol`)
.addField(`Sebep`, `${reason || "Belirtilmemiş"}`,true)
.addField(`Uyarı Sayın`, `${syı || "0"}`, true)


 message.channel.send(asd)
 kullanıcı.send(asd1) 
}

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
if(!kullanıcı) return message.channel.send(`${args[1]}, kullanıcısını sunucuda bulamıyorum.`)


let sayı = args[2]
if(!sayı) return message.channel.send(`Silinecek uyarı sayısını yazmadın!`)
if(isNaN(sayı)) return message.channel.send(`Silinecek uyarı sayısını yazmadın!`)
if(sayı === '0') return message.channel.send(`Beni mi kandırmaya çalışıyorsun sen?`)
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.channel.send(`${kullanıcı}, kullanıcısının uyarı sayısı: ${syı2}! Sadece bu kadar silebilirsin.`)

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
const dsa = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Uyarı')
.setThumbnail(kullanıcı.avatarURL())
.setDescription(`${kullanıcı} Uyarısı Silindi <a:tik3:779513756488302592>`)
.addField(`Silinen Uyarı Sayısı`, `${sayı}`)
.addField(`Yeni Uyarı Sayısı`,`${syı || '0'}`, true)

const dsa1 = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Uyarı')
.setThumbnail(kullanıcı.avatarURL())
.setDescription(`Merhaba ${kullanıcı}, ${message.guild.name} sunucusunda uyarın silindi.Lütfen Daha dikkatli ol!`)
.addField(`Silinen Uyarı Sayısı`, `${sayı}`)
.addField(`Yeni Uyarı Sayısı`,`${syı || '0'}`, true)

await message.channel.send(dsa)
await kullanıcı.send(dsa1) 
}

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
if(!kullanıcı) return message.channel.send(`${args[1]}, kullanıcısını sunucuda bulamıyorum.`)

const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(!syı2) return message.channel.send(`${kullanıcı}, kullanıcısının hiç uyarısı yok.`)
await message.channel.send(`${kullanıcı}:\nToplam uyarı sayısı: ${syı2 ? syı2 : '0'}`) }
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['warn'],
permLevel: 0,
}

exports.help = {
name: 'uyarı'
}