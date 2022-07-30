const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "banner",
async execute(client, message, args) {
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((member) => member.user.username.toLowerCase().includes(args[0])) || message.member;
    const banner = await client.banners.getBanner(target.user.id, { dynamic: true, size: 2048, format: 'png' });
    if (banner.includes('https')) {
      const embed = new MessageEmbed()
      .setDescription(message.locale.user.banner.get(target))
      .setImage(banner)
      .setAuthor(`${message.author.tag} (${message.author.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setFooter("Ghost Development")
      .setColor('#2F3136');
      return message.reply({ embeds: [embed] });
    } else if (!banner.includes('https')) {
      const embed = new MessageEmbed()
      .setDescription(message.locale.user.banner.not(target))
      .setFooter("Ghost Development")
      .setAuthor(`${message.author.tag} (${message.author.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setColor('#2F3136')
      .setImage("https://cdn.discordapp.com/attachments/820773975827284019/866093745203183616/no_banner.png"); 
      return message.reply({ embeds: [embed] });
    }
  }
}
