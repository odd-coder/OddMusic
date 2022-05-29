const { MessageEmbed } = require("discord.js");
module.exports = async (client, message) => {
    // Slash Command Handling
    if (message.author.bot || !message.guild) return 
    let { prefix } = client.config;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return 
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const [ cmdName, ...args ] = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
    if (args.length === 0){
        if(matchedPrefix.includes(client.user.id))
          return message.reply({embeds: [new MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`<:oksir:968537628871888906> **To see all Commands type: \`${prefix}help\` / \`/help\`**`)
          ]}).catch(() => null);
      }
    const cmd = client.commands.get(cmdName.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmdName.toLowerCase()));

    if (!cmd) return;
    try {
        cmd.run(client, message, args, prefix);
    } catch (e){
        console.error(e);
        message.channel.send(`<:what_theee:968532736287584297> Something went wrong, while running the ${cmd.name} Command`).catch(() => null);
    }
    
}


function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
