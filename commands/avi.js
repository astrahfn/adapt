const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating avatar...");

  let mentionedUser = message.mentions.users.first() || message.author;

  let embed = new Discord.MessageEmbed()

    .setImage(mentionedUser.displayAvatarURL)
    .setColor("00ff00")
    .setTitle("Avatar")
    .setFooter("Searched by " + message.author.tag)
    .setImage(mentionedUser.displayAvatarURL())
    
  //  .setDescription(mentionedUser.displayAvatarURL())

  message.channel.send(embed).then(msg => msg.delete(100000));

  msg.delete();
};

module.exports.help = {
  name: "avater"
};
