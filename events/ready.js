module.exports = {
    name: "ready",
    async execute(client) {
        var name = client.user.tag;
        console.log(`[HAZIR]: ${name} adıyla açıldım!`);
        client.user.setPresence({
            activities: [
                {
                    name: `!add - !vote`,
                    type: "PLAYING"
                }
            ],
            status: "online"
        });
    }
}