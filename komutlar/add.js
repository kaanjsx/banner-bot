const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "add",
async execute(client, message, args) {

var prefix = client.db.fetch(`prefix_${message.guild.id}`) || "!";
var dil = client.db.fetch(`locale_${message.guild.id}`) || "en";

const embed = new MessageEmbed()
.setColor("#2F3136")
.setAuthor(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true }))
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
.setDescription(message.locale.add(client.user.username, `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`))
.setTimestamp()

return message.reply( { embeds: [embed] } )
}
}