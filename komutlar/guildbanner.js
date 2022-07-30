const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "guildbanner",
async execute(client, message, args) {
     if (!message.guild.banner) {
        var embed1 = new MessageEmbed()
       .setColor("#2F3136")
      .setAuthor(`${message.guild.name} `,message.guild.iconURL({dynamic: true }))
       .setDescription(message.locale.guild.banner.not)
      return message.reply({ embeds: [embed1] });
     } else {
        const embed5 = new MessageEmbed()
       .setColor("#2F3136")
      .setImage(`${message.guild.bannerURL({size: 4096, dynamic: true})}`)
      .setTitle(message.locale.guild.banner.get(message.guild.name));
      return message.reply({ embeds: [embed5] });
     }
  }
}