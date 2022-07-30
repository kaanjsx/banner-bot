module.exports = {
    name: "messageCreate",
    async execute(client, message, prefix) {
        const locale = client.db.fetch(`locale_${message.guild.id}`) || "en";
        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        var args = message.content.slice(prefix.length).trim().split(/ +/g);
        var command = args.shift();
        var cmd = client.commands.get(command);
        message.locale = require(`../locales/${locale}`);
        if (!cmd) return;
        cmd.execute(client, message, args);
    }
}