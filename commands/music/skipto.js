const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "skipto",
    aliases: ["jump", "jumpto"],
    description: "Skips to a specific Track in the Queue",
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
        if(!args[0] || isNaN(args[0]) || Number(args[0]) > queue.tracks.length)
            return message.reply({ content: `<:oddno:968555009908293652> **There are just ${queue.tracks.length} Songs in the Queue, can't skip to ${args[0]}th Song.**`})
        
        queue.skipped = true;

        // if there is a queueloop: remove the current track but keep the rest
        if(queue.queueloop) {
            for(let i = 1; i <= args[0] - 1; i++) 
                queue.tracks.push(queue.tracks[i])
        }
        queue.tracks = queue.tracks.slice(args[0] - 1)
        
        // skip the track
        oldConnection.state.subscription.player.stop();
        
        return message.reply(`<:oddskip:968654971593699368> **Successfully skipped ${args[0]} Track(s)**`).catch(() => null);
    },
};