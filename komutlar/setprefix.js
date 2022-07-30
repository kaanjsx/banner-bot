module.exports = {
  name: "setprefix",
  async execute(client, message, args) {
    if (!message.member.permissions.has(message.locale.error.type('2').perm())) return message.reply(message.locale.error.type('2').send());
    const prefix = args[0];
    if (!prefix) return message.reply(message.locale.prefix_choose());
    if (prefix) {
      client.db.set(`prefix_${message.guild.id}`, prefix);
      return message.reply(message.locale.prefix_changed())
    }
  }
}
