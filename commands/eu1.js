const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require("../config.json");
const random = Math.floor(Math.random() * 8000) + 1000;

exports.run = async (client, message, args, prefix) => {
  const guild = message.guild;
  let micon = client.user.displayAvatarURL();
  //  let role = message.guild.roles.find(role => role.name === "Verified");

  const first = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("Europe Ranked Matchmaking")
    .setDescription("React with the corresponding emoji below, to search for a game."
    // + `\n\n` + "**🇷 - Ranked 1v1 Realistic Queue**" +
    //    " \n**🇧 - Ranked 1v1 Buildfight Queue**" + `\n` + "**🅱 - Ranked 1v1 Realistic Queue**"
    )
    .addField("Information", "**If you can't see the emoji, try restarting discord by pressing __CTRL+R.__**")
    .setFooter(
      "Created By Astral"
    ).setTimestamp()
    message.channel.send(first).then(message => message.react("🅱"))

    








   // .then(() => message.react('🇧'))
   // .then(() => message.react('🅱')))

}