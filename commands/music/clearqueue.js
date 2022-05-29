const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "clearqueue",
    description: "Cleares the Queue",
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
        queue.tracks = [ queue.tracks[0] ];
        // skip the track
        
        return message.reply(`<:oddclear:968558975371051128> **Successfully cleared the Queue.**`).catch(() => null);
    },
};