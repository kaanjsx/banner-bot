const { MessageEmbed } = require("discord.js")
const timestamp = require('discord-timestamp');
const fetch = require(`node-fetch`);

module.exports = {
  name: "userinfo",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const member = await fetch(`https://discord.com/api/v9/users/${user.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bot ${client.token}`
      }
    }).then(qwe => qwe.json());
    const rozet = user.flags.toArray().join(", ")
    .replace('DISCORD_EMPLOYEE', '<:staff:857632369489739786>')
    .replace('PARTNERED_SERVER_OWNER', '<:partner:857632369107533844>')
    .replace('HYPESQUAD_EVENTS', '<:events:857632368374579210>')
    .replace('HOUSE_BRAVERY', '<:bravery:857632365194117120>')
    .replace('HOUSE_BRILLIANCE', '<:brilliance:857632365752090625>')
    .replace('HOUSE_BALANCE', '<:balance:857632363676958741>')
    .replace('BUGHUNTER_LEVEL_1', '<:bug:857632366591868978>')
    .replace('BUGHUNTER_LEVEL_2', '<:bug2:857632367186935808>')
    .replace('EARLY_SUPPORTER', '<:early:857632367917269012>')
    .replace('EARLY_VERIFIED_DEVELOPER', '<:botdevv:857632364376227870>')
    .replace('VERIFIED_DEVELOPER', '')
    .replace('VERIFIED_BOT', '<:verifiedbot:870207189380378654>');
    if ((member).banner) {
      const embed = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet, `<:nitro:858231188325662770> <:boost:933669372738805760>`))
      .setTimestamp()
      .setFooter('Ghost Banner');
      message.channel.send({ embeds: [ embed ] });
    } else if (!(member).banner && (member).banner_color) {
      const embed = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet, `<:nitro:858231188325662770>`))
      .setTimestamp()
      .setFooter('Ghost Banner');
      message.channel.send({ embeds: [ embed ] });
    } else if (!(member).banner && !(member).banner_color) {
      const embed = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet))
      .setTimestamp()
      .setFooter('Ghost Banner');
      message.channel.send({ embeds: [ embed ] });
    }
  }
}
