const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "skip",
    description: "Skips the current Track",
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
        queue.skipped = true;
        oldConnection.state.subscription.player.stop();
        
        return interaction.reply({ ephemeral: false, content: `<:oddskip:968654971593699368> **Successfully skipped the Track**`}).catch(() => null);
    },
};