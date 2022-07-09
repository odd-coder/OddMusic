const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Show all of the Commands",
    run: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`OddMusic`)
            .setDescription(`Note: want to know all the aliases of command then use \`.a\` or \`.aliases\` command.\nBytheway I'm busy to playing rickroll in high quality.
            `)
            .addFields(
                { name: '<:oddmu:968552025723928647> Music commands', value: '\`.play\` \`.playskip\` \`.playtop\` \`.nowplaying\` \`.pause\` \`.resume\` \`.volume\` \`.stop\` \`.shuffle\` \`.seek\` \`.speed\` \`.skip\` \`.skipto\` \`.forward\` \`.rewind\` \`.join\` \`.move\` \`.leave\` \`.queue\` \`.remove\` \`.clearqueue\` \`.queueloop\` \`.trackloop\` \`.filter\` \`.bassboost\`', inline: true },
                { name: '<:oddse:968557685500948520> Info commands', value: '\`.bot-info\` \`.changelog\` \`.help\` \`.ping\` \`.uptime\`', inline: true },
                { name: '<:oddv:968567000307736607> More info', value: 'OddMusic bot is inspired from a famous discord bot called Grovy. OddMusic is just a tribute to groovy.\n\n<:dotgreen:995271222860468224> Support Server: [Join from here](https://link.oddcoder.xyz/discord)\n<:dotgreen:995271222860468224> Created with: [Discord.js](https://discord.js.org/)\n<:dotgreen:995271222860468224> Created for: [Personal use](https://www.lawinsider.com/dictionary/personal-use-license)', inline: false },
            )
            .setImage('https://cdn.discordapp.com/attachments/960823551265472562/995269786562994267/oddmusic.png')
            .setFooter({ text: 'An Open Source Project By Odd Coder', iconURL: 'https://cdn.discordapp.com/attachments/960823551265472562/995252037220585573/OddMusic_Logo.png' })
        ]}).catch(() => null);
    },
};