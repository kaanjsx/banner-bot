const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "help",
async execute(client, message, args) {

var prefix = client.db.fetch(`prefix_${message.guild.id}`) || "!";
var dil = client.db.fetch(`locale_${message.guild.id}`) || "en";


const embed = new MessageEmbed()
.setColor("#2F3136")
.setAuthor(`${message.author.tag} (${message.author.id})`,message.author.displayAvatarURL({dynamic: true}))
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
.setURL("https://discord.gg/uDjWcpYFb5")
.setTitle("Ghost Banner")
.setFooter("©️ Ghost Banner")
.addFields([
  {
    name: message.locale.help.description_name,
    value: message.locale.help.description_value(prefix, dil),
    inline: false
  },
  {
    name: message.locale.help.cmds.configuration.name,
    value: message.locale.help.cmds.configuration.value,
    inline: true
  },
  {
    name: message.locale.help.cmds.information.name,
    value: message.locale.help.cmds.information.value,
    inline: true
  },
  {
    name: message.locale.help.cmds.support.name,
    value: message.locale.help.cmds.support.value,
    inline: true
  }
]);
return message.reply( { embeds: [embed] } )


    }
}