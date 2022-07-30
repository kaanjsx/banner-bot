module.exports = {
  name: "setlang",
  async execute(client, message, args) {
    if (!message.member.permissions.has(message.locale.error.type('2').perm())) return message.reply(message.locale.error.type('2').send());
    const arguments = ["en", "fr", "ar", "tr", "de"];
    const lang = args[0];
    if (!lang) return message.reply(message.locale.lang_choose());
    if (arguments.includes(lang)) {
      client.db.set(`locale_${message.guild.id}`, lang)
      message.reply(message.locale.lang_changed(lang));
    } else {
      message.reply(message.locale.lang_choose());
    }
  }
}
