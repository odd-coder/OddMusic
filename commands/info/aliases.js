const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "aliases",
    aliases: ["a"],
    description: "Show all of the Commands aliases",
    run: async (client, message, args, prefix) => {
        return message.reply(`<:oddse:968557685500948520> Here is a list of all of my Commands aliases:

<:oddmu:968552025723928647> **Music commands**
**.play** - p
**.playskip** - ps
**.playtop** - pt
**.nowplaying** - np, current, cur
**.pause** - break
**.resume** - res, con, continue
**.volume** - vol
**.skip** - s, fs, forceskip
**.skipto** - jump, jumpto
**.forward** - fwd, fd
**.leave** - disconnect, dis, stopleave
**.queue** - list
**.remove** - delete
**.queueloop** - loopqueue, qloop, queuloop
**trackloop** - looptrack, songloop, loopsong
**.bassboost** -"bass, bb
<:oddsto:968660462432567366> **Info commands**
**.help** - h`).catch(() => null);
    },
};