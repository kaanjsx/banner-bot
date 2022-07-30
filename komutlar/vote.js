const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "vote",
async execute(client, message, args) {

var prefix = client.db.fetch(`prefix_${message.guild.id}`) || "!";
var dil = client.db.fetch(`locale_${message.guild.id}`) || "en";

const embed = new MessageEmbed()
.setColor("#2F3136")
.setAuthor(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true }))
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
.setDescription(message.locale.vote(client.user.username, ``))
.setTimestamp()

return message.reply( { embeds: [embed] } )
}
}