module.exports = (client) => {
    console.log(`${client.getTime()} :: Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${client.config.prefix}help | /help`, {type: "PLAYING"})
    setInterval(() => {
        client.user.setActivity(`${client.config.prefix}help | /help`, {type: "PLAYING"})
    }, 600_00)
}