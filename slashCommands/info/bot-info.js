const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "bot-info",
    aliases: ["bot-info"],
    description: "Show all of the Commands",
    run: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`OddMusic`)
            .setDescription(`Busy to playing rickroll in high quality.
            `)
            .addFields(
                { name: '<:oddadd:968550877445099601> Bot Name', value: `OddMusic`, inline: true },
                { name: '<:oddadd:968550877445099601> Bot Tag', value: `9860`, inline: true },
                { name: '<:oddadd:968550877445099601> Bot ID', value: `968543256369586196`, inline: true },
                { name: '<:oddadd:968550877445099601> Default Prefix', value: `\`.\``, inline: true },
                { name: '<:oddadd:968550877445099601> Slash Commands', value: `\`Yes\``, inline: true },
                { name: '<:oddadd:968550877445099601> Bot Ping', value: `\`${client.ws.ping}ms\``, inline: true },
                { name: '<:oddadd:968550877445099601> Servers', value: `${client.guilds.cache.size}`, inline: true },
                { name: '<:oddadd:968550877445099601> Channels', value: `${client.channels.cache.size}`, inline: true },
                { name: '<:oddadd:968550877445099601> Members', value: `${client.users.cache.size}`, inline: true },
                { name: '<:oddadd:968550877445099601> Join Date', value: `${client.user.createdAt}`, inline: false },
                { name: '<:oddadd:968550877445099601> Platform', value: `linux`, inline: true },
                { name: '<:oddadd:968550877445099601> CPU Name', value: `Intel Xeon® 2.2GHz 8 Cores 4 Trades`, inline: true },
                { name: '<:oddadd:968550877445099601> CPU Speed', value: `2.2GHz`, inline: true },

                { name: '<:oddadd:968550877445099601> Invite Me', value: `[Invite me from here](https://discord.com/oauth2/authorize?client_id=968543256369586196&permissions=414467870016&scope=bot%20applications.commands)`, inline: false },

            )
            .setImage('https://cdn.discordapp.com/attachments/960823551265472562/995269786562994267/oddmusic.png')
            .setFooter({ text: 'An Open Source Project By Odd Coder', iconURL: 'https://cdn.discordapp.com/attachments/960823551265472562/995252037220585573/OddMusic_Logo.png' })
        ]}).catch(() => null);
    },
};