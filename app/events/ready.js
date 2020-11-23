const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = (client) => {

//  WATCHING : !ping izliyor
//  LISTENING : !ping dinliyor
//  PLAYING  : !ping oynuyor 

    client.user.setActivity("Teen Wolf",{ type: "WATCHING"} );
console.log('Bot Giriş Yaptı')
}