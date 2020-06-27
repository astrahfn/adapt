const Discord = require("discord.js");
const client = new Discord.Client();
const random = Math.floor(Math.random() * 80000) + 10000;
const config = require("../config.json");
exports.run = async (client, message, args, prefix) => {
  message.delete();
  const guild = message.guild;
  let micon = client.user.displayAvatarURL();
  //  let role = message.guild.roles.find(role => role.name === "Verified");
  const emoji = client.emojis.cache.get("725679019923865640");
  const emoji1 = message.guild.emojis.cache.find(emoji => emoji.name === 'plus');

  const first = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("")
    .setThumbnail(micon)
    .setDescription(
      "React with the cor" +
        `**${guild.name}**` +
        " Follow the Steps Below. \n\nPlease type in your Epic Games Account Name or paste your Epic Games Account ID. Note that the name is case sensitive."
    )
    .setFooter(
      "By continuing, you agree that ADAPT may process your Epic Games data (e.g. stats, account name, session data), combine it with your Discord data, and share it with other members of this server and third parties through our API upon authorized request."
    );

  const second1 = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("Linking your Epic Games Account")
    .setThumbnail(micon)
    .setDescription("Searching for Username.")
    .setFooter("Created By Astral")
    .setTimestamp();

  const second = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("Linking your Epic Games Account")
    .setThumbnail(micon)
    .setDescription(
      "Username Found. We Will Need to Verify that its Your Account. \n\nPlease Open up Fortnite and Send a Friend Request to the Following Account: " +
        `\`\`\`Creative Bot 7\`\`\`` +
        "\n Once Completed Please Enter The Four Digit Code On Our Name." +
        " \n\nIf Creative does not automatically accept your friend request after 2 minute, please cancel the friend request and resend it."
    )
    .setFooter("Created By Astral")
    .setTimestamp();

  const starter = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("Epic Account Registration")
    .setDescription(
      "Please click on the " + `${emoji1}` + " below to link your Epic Account. You will receive a direct message from ADAPT with further instructions."
    )
    .setFooter("Created By Astral");

  const success = new Discord.MessageEmbed()
    .setColor("#3D97CB")
    .setTitle(" Completed Verification")
    .setDescription(
      "Your verification is now complete and there are no further steps for you to do"
    )
    .setTimestamp()
    .setFooter("Created By Astral");

  message.channel.send(starter)

    .then(message => {
      message.react(emoji);
    });
};
