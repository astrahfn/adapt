const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require("../config.json");
const random = Math.floor(Math.random() * 8000) + 1000;

exports.run = async (client, message, args, prefix) => {
  const emoji = client.emojis.cache.get("725761917477453886");
const emoji1 = message.guild.emojis.cache.find(emoji => emoji.name === 'plus2');
  const guild = message.guild;
  let micon = client.user.displayAvatarURL();


  const first = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("Europe Ranked Matchmaking")
    .setDescription(
      "Please click on the " + `${emoji1}` + " below to search for a **Ranked 1v1 Realistic Match.**")
    .addField("Information", "If you can't see the emoji, try restarting discord by pressing __**CTRL+R.**__")
    .setFooter(
      "Created By Astral"
    ).setTimestamp()
    message.channel.send(first).then(message => message.react("725761917477453886"))

    
}