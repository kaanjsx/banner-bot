module.exports = {
    name: "messageCreate",
    async execute(client, guild) {
      const locales = {
        en: 'en',
        tr: 'tr',
        fr: 'fr',
        de: 'dr',
        ar: 'ar' 
      };
      client.db.set(`locale_${guild.id}`, locales.en);
    }
}