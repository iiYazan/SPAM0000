const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("513463322830700548")
setInterval(function() {
channel.send(`yazan``pro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
