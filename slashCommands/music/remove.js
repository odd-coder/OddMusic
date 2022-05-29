const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "remove",
    description: "Removes a specific Track from the Queue",
    options: [
        {
            name: "position",
            description: "Song Position to remove",
            type: "INTEGER",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **Please join a Voice-Channel first!**"}).catch(() => null);
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **I'm not connected somewhere!**"}).catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **We are not in the same Voice-Channel**!"}).catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id);
        if(!queue) { 
            return interaction.reply({ ephemeral: true, content: `<:oddno:968555009908293652> **Nothing playing right now**`}).catch(() => null);
        }
        if(!queue.tracks || queue.tracks.length <= 1) { 
            return interaction.reply(`<:oddno:968555009908293652> **Nothing to skip**`).catch(() => null);
        }
        if(!args[0] || isNaN(args[0]) || Number(args[0]) > queue.tracks.length)
            return interaction.reply({ ephemeral: true, content:`<:oddno:968555009908293652> **There are just ${queue.tracks.length} Songs in the Queue, can't remove the ${!isNaN(args[0]) ? client.queuePos(Number(args[0])) : args[0]} Song.**`})
        
        queue.skipped = true;

        queue.tracks.splice(args[0], 1)
        
        return interaction.reply({ ephemeral: false, content: `<:oddskip:968654971593699368> **Successfully removed the ${client.queuePos(Number(args[0]))} Track!**`}).catch(() => null);
    },
};