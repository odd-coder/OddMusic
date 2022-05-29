const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "skip",
    aliases: ["s", "fs", "forceskip"],
    description: "Skips the current Track",
    run: async (client, message, args, prefix) => {
        if(!message.member.voice.channelId) return message.reply("<:oddno:968555009908293652> **Please join a Voice-Channel first!**").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(message.guild.id);
        if(!oldConnection) return message.reply("<:oddno:968555009908293652> **I'm not connected somewhere!**").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != message.member.voice.channelId) return message.reply("<:oddno:968555009908293652> **We are not in the same Voice-Channel**!").catch(() => null);
        
        const queue = client.queues.get(message.guild.id); // get the queue
        if(!queue) { 
            return message.reply(`<:oddno:968555009908293652> **Nothing playing right now**`).catch(() => null);
        }
        // no new songs (and no current)
        if(!queue.tracks || queue.tracks.length <= 1) { 
            return message.reply(`<:oddno:968555009908293652> **Nothing to skip**`).catch(() => null);
        }
        queue.skipped = true;
        // skip the track
        oldConnection.state.subscription.player.stop();
        
        return message.reply(`<:oddskip:968654971593699368> **Successfully skipped the Track**`).catch(() => null);
    },
};