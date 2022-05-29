const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "resume",
    description: "Resumes the current, paused Track",
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **Please join a Voice-Channel first!**"}).catch(() => null);
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **I'm not connected somewhere!**"}).catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **We are not in the same Voice-Channel**!"}).catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id);
        if(!queue) { 
            return interaction.reply({ ephemeral: true, content: `<:oddno:968555009908293652> **Nothing playing right now**`}).catch(() => null);
        }
        if(!queue.paused) return interaction.reply({ ephemeral: true, content: `<:oddno:968555009908293652> **Track is not paused**`}).catch(() => null);
        
        queue.paused = false;
        oldConnection.state.subscription.player.unpause();
        
        return interaction.reply({ ephemeral: false, content: `<:oddre:968595028354154496> **Successfully resumed the Track**`}).catch(() => null);
    },
};