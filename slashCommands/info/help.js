module.exports = {
    name: "help",
    aliases: ["commands"],
    description: "Show all the bot commands",
    run: async (client, interaction, args) => {
        interaction.reply({
            content: `<:oddse:968557685500948520> Here is a list of all of my Commands:

<:oddmu:968552025723928647> **Music commands**
**/play** - Plays Music in your Voice Channel.
**/playskip** - Plays Music in your Voice Channel and skips to it.
**/playtop** - Plays Music in your Voice Channel and positions it to the queue top.
**/nowplaying** - Shows information about the current track.
**/pause** - Pauses the current Track.
**/resume** - Resumes the current, paused Track.
**/volume** - Changes the Volume of the Music.
**/stop** - Stops playing and cleares the Queue.
**/shuffle** - Shuffles (mixes) the Queue
**/seek** - Seeks to a specific Position (sec).
**/speed** - Changes the Speed of the Music.
**/skip** - Skips the current Track.
**/skipto** - Skips to a specific Track in the Queue.
**/forward** - Forwards for X (secs).
**/rewind** - Rewinds for X (secs).
**/join** - Joins a Voice Channel.
**/move** - Moves a Song in the Queue.
**/leave** - Leaves a Voice Channel and stops playing.
**/queue** - Show the current Queue-List.
**/remove** - Removes a specific Track from the Queue.
**/clearqueue** - Cleares the Queue.
**/queueloop** - Toggles the Queue-Loop.
**/trackloop** - Toggles the Track-Loop.
**/filter** - Applys/Removes Filters of the Queue.
**/bassboost** - Changes the Bassboost Level of the Music.
<:oddsto:968660462432567366> **Info commands**
**/help** - Show all of the Commands.
**/ping** - Show the Bot's ping.
**/uptime** - Show the Bot's uptime.`,
            ephemeral: true
        }).catch(() => null);
    },
};