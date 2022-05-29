const { getVoiceConnection } = require("@discordjs/voice");
const { default: YouTube } = require('youtube-sr');
const { Permissions } = require("discord.js");
module.exports = {
    name: "playtop",
    description: "Plays Music in your Voice Channel and positions it to the queue top",
    options: [
        {
            name: "songtitle",
            description: "Title/Link of the Song/Playlist",
            type: "STRING",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **Please join a Voice-Channel first!**"}).catch(() => null);
        if(!interaction.member.voice.channel?.permissionsFor(interaction.guild?.me)?.has(Permissions.FLAGS.CONNECT)) {
            return interaction.reply({ephemeral: true, content: "<:oddno:968555009908293652> **I'm missing the Permission to Connect to your Voice-Channel!**"}).catch(() => null);
        }
        if(!interaction.member.voice.channel?.permissionsFor(interaction.guild?.me)?.has(Permissions.FLAGS.SPEAK)) {
            return interaction.reply({ephemeral: true, content: "<:oddno:968555009908293652> **I'm missing the Permission to Speak in your Voice-Channel!**"}).catch(() => null);
        }
             
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "<:oddno:968555009908293652> **We are not in the same Voice-Channel**!"}).catch(() => null);
        const queue = client.queues.get(interaction.guild.id);
        if(!queue) { 
            return interaction.reply({ ephemeral: true, content: `<:oddno:968555009908293652> **Nothing playing right now**`}).catch(() => null);
        }
        const track = args.join(" ");
        if(!args[0]) return interaction.reply({ ephemeral: true, content: `<:oddno:968555009908293652> Please add the wished Music via: \`${prefix}playtop <Name/Link>\``}).catch(() => null);
        const youtubRegex = /^(https?:\/\/)?(www\.)?(m\.|music\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
        const playlistRegex = /^.*(list=)([^#\&\?]*).*/gi;
        const songRegex = /^.*(watch\?v=)([^#\&\?]*).*/gi;
        let song = null;
        let playlist = null;
        const isYT = youtubRegex.exec(track);
        const isSong = songRegex.exec(track);
        const isList = playlistRegex.exec(track)
            
        try {
            await interaction.reply({ ephemeral: true, content: `🔍 *Searching **${track}** ...*`}).catch(() => null);
            if(isYT && isSong && !isList) {
                song = await YouTube.getVideo(track); 
            }
            else if(isYT && !isSong && isList) {
                playlist = await YouTube.getPlaylist(track).then(playlist => playlist.fetch());
            }
            else if(isYT && isSong && isList) {
                song = await YouTube.getVideo(`https://www.youtube.com/watch?v=${isSong[2]}`); 
                playlist = await YouTube.getPlaylist(`https://www.youtube.com/playlist?list=${isList[2]}`).then(playlist => playlist.fetch());
            }
            else {
                song = await YouTube.searchOne(track); 
            }
            if(!song && !playlist) return interaction.editReply({ ephemeral: true, content: `<:oddno:968555009908293652> **Failed looking up for ${track}!**`});
            if(!playlist) {
                queue.tracks = [queue.tracks[0], client.createSong(song, interaction.user), ...queue.tracks.slice(1)]   
                return interaction.editReply({ ephemeral: false, content: `<:oddmu:968552025723928647> **Queued at \`1st\`: __${song.title}__** - \`${song.durationFormatted}\``}).catch(() => null);
            } 
            else {
                song = song ? song : playlist.videos[0];
                const index = playlist.videos.findIndex(s => s.id == song.id) || 0;
                playlist.videos.splice(index, 1) 
                const playlistSongs = []
                playlist.videos.forEach(song => playlistSongs.push(client.createSong(song, interaction.user)))
                queue.tracks = [queue.tracks[0], client.createSong(song, interaction.user), ...playlistSongs, ...queue.tracks.slice(1)]                  
                return interaction.editReply({ ephemeral: false, content: `<:oddmu:968552025723928647> **Queued at \`1st\`: __${song.title}__** - \`${song.durationFormatted}\`\n> **Added \`${playlist.videos.length - 1} Songs\` from the Playlist:**\n> __**${playlist.title}**__`}).catch(() => null);
            }

        } catch (e){ console.error(e);
            return interaction.reply({ ephemeral: true, content: `<:oddno:968555009908293652> Could not play the Song because: \`\`\`${e.interaction || e}`.substring(0, 1950) + `\`\`\``}).catch(() => null);
        }
    },
};
