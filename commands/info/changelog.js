const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "changelog",
    aliases: ["change"],
    description: "Show all of the Commands",
    run: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`OddMusic`)
            .setDescription(`A changelog is a file that shares a chronologically ordered list of the changes you've made on your project. It's often organized by the version with the date followed by a list of added, improved, and removed features.
            `)
            .addFields(
                { name: '<:oddsto:968660462432567366> Version 1.4', value: `1. Changes on looks.\n2. Faster then before\n3. Youtube-sr package modified added.`, inline: false },
                { name: '<:oddsto:968660462432567366> Version 1.3', value: `1. Everything in embedded format.\n2. Discord js 13.6 upgrade.\n3. More cleaner then before.`, inline: false },
                { name: '<:oddsto:968660462432567366> Version 1.0', value: `1. Initial release.`, inline: false },
            )
            .setImage('https://cdn.discordapp.com/attachments/960823551265472562/995269786562994267/oddmusic.png')
            .setFooter({ text: 'An Open Source Project By Odd Coder', iconURL: 'https://cdn.discordapp.com/attachments/960823551265472562/995252037220585573/OddMusic_Logo.png' })
        ]}).catch(() => null);
    },
};