const Discord = require("discord.js");


exports.run = async (client, message, args, prefix) => {
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  };

  let inline = true;
  let sicon = message.guild.iconURL();
  let serverembed = new Discord.MessageEmbed()
  .setColor("#7e42e9")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Server Name", message.guild.name, inline)
    .addField("Server Owner", `<@${message.guild.owner.id}>`, inline)
    .addField("Server Region", "Europe", inline)
    .addField("Member Count", `${message.guild.members.cache.size}`, inline)
    .addField("Roles", message.guild.roles.cache.size, inline)
    .addField("Channels", message.guild.channels.cache.size, inline)
    .setFooter(`Bot Created By Astral and Blanksy`);

  message.channel.send(serverembed).then(msg => msg.delete(100000));

  message.delete();
};

module.exports.help = {
  name: "serverinfo"
};
