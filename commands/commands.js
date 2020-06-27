const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args, prefix) => {
  message.delete();
  const rrbed = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("**My Commands**")
    .setDescription("```css\n*xp \n*rank```");
  message.channel.send(rrbed).then(msg => msg.delete(600000));
};
