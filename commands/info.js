const Discord = require("discord.js");

exports.run = async (client, message, args, prefix) => {
  let inline = true;
  let resence = true;
  const status = {
    online: "Online",
    idle: " Idle",
    dnd: " Do Not Disturb",
    offline: " Offline/Invisible"
  };

  const member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;
  let target = message.mentions.users.first() || message.author;

  if (member.user.bot === true) {
    client = " Yes";
  } else {
    client = "No";
  }

  let embed = new Discord.MessageEmbed()
    //.setAuthor(member.user.username)
    .setTitle("User Information")
    .setThumbnail(target.displayAvatarURL)
    .setColor("#7e42e9")
    .addField("Full Username", `${member.user.tag}` + " " + `<@${member.id}>`)
    .addField("ID", member.user.id)
    .addField(
      "Nickname",
      `${member.nickname !== null ? `Nickname: ${member.nickname}` : "None"}`,
      true
    )
    .addField(
      "Roles",
      `${member.roles
        .cache.filter(r => r.id !== message.guild.id)
        .map(roles => `${roles}`)
        .join(" **|** ") || " No Roles"}`
    )
    .addField("Joined Discord At", member.user.createdAt)
    .setFooter(`Information about ${member.user.username}`)
    .setTimestamp();

  message.channel.send(embed).then(msg => msg.delete(100000));

  message.delete();
};

module.exports.help = {
  name: "info"
};
