const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Show all of the Commands",
    run: async (client, message, args) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`OddMusic`)
            .setDescription(`Busy to playing rickroll in high quality.
            `)
            .addFields(
                { name: '<:oddadd:968550877445099601> Bot Name', value: '\`/play\` \`/playskip\` \`/playtop\` \`/nowplaying\` \`/pause\` \`/resume\` \`/volume\` \`/stop\` \`/shuffle\` \`/seek\` \`/speed\` \`/skip\` \`/skipto\` \`/forward\` \`/rewind\` \`/join\` \`/move\` \`/leave\` \`/queue\` \`/remove\` \`/clearqueue\` \`/queueloop\` \`/trackloop\` \`/filter\` \`/bassboost\`', inline: true },
                { name: '<:oddadd:968550877445099601> Info commands', value: '\`/bot-info\` \`/changelog\` \`/help\` \`/ping\` \`/uptime\`', inline: true },
                { name: '<:oddadd:968550877445099601> More info', value: 'OddMusic bot is inspired from a famous discord bot called Grovy. OddMusic is just a tribute to groovy.\n\n<:dotgreen:995271222860468224> Support Server: [Join from here](https://link.oddcoder.xyz/discord)\n<:dotgreen:995271222860468224> Created with: [Discord.js](https://discord.js.org/)\n<:dotgreen:995271222860468224> Created for: [Personal use](https://www.lawinsider.com/dictionary/personal-use-license)', inline: false },
            )
            .setImage('https://cdn.discordapp.com/attachments/960823551265472562/995269786562994267/oddmusic.png')
            .setFooter({ text: 'An Open Source Project By Odd Coder', iconURL: 'https://cdn.discordapp.com/attachments/960823551265472562/995252037220585573/OddMusic_Logo.png' })
        ]}).catch(() => null);
    },
};