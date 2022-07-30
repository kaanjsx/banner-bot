const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const client = new Client({ 
    intents: [ 
      Intents.FLAGS.GUILDS, 
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS
    ] 
});
const { DiscordBanners } = require('discord-banners');
const discordBanners = new DiscordBanners(client);
client.events = new Collection();
client.commands = new Collection();
client.config = require('./config.json');
client.db = require('croxydb');
client.banners = discordBanners;

fs.readdir('./komutlar/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var cmd = require(`./komutlar/${dosya}`);
        client.commands.set(cmd.name, cmd);
    });
});

fs.readdir('./events/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var event = require(`./events/${dosya}`);
        client.events.set(event.name, event);
    });
});

client.on('messageCreate', async (message) => {
  const prefix = client.db.fetch(`prefix_${message.guild.id}`) || client.config.prefix;
  client.events.get('messageCreate').execute(client, message, prefix)
});
client.on('ready', async () => client.events.get('ready').execute(client));
client.on('guildCreate', async (g) => client.events.get('ready').execute(client, g));
client.login(client.config.token);