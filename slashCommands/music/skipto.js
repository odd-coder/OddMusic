const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "skipto",
    description: "Skips to a specific Track in the Queue",
    options: [
        {
            name: "position",
            description: "To what track you want to skip?",
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
            return interaction.reply({ ephemeral: true, content: `<:oddno:968555009908293652> **Nothing to skip**`}).catch(() => null);
        }
        if(!args[0] || isNaN(args[0]) || Number(args[0]) > queue.tracks.length)
            return interaction.reply({ ephemeral: true, content:`<:oddno:968555009908293652> **There are just ${queue.tracks.length} Songs in the Queue, can't skip to ${args[0]}th Song.**`})
        
        queue.skipped = true;

        if(queue.queueloop) {
            for(let i = 1; i <= args[0] - 1; i++) 
                queue.tracks.push(queue.tracks[i])
        }
        queue.tracks = queue.tracks.slice(args[0] - 1)
        oldConnection.state.subscription.player.stop();
        
        return interaction.reply({ ephemeral: false, content: `<:oddskip:968654971593699368> **Successfully skipped ${args[0]} Track(s)**`}).catch(() => null);
    },
};