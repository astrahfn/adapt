const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args, prefix) => {
  const rrembed = new Discord.MessageEmbed()
    .setColor("#7e42e9")
    .setTitle("Select Your Region")
    .setDescription("1⃣ - **Europe** \n2⃣ - **North America West** \n3⃣ - **North America East** \n4⃣ - **Oceania**")
    //\n\n**Select Your Platfrom** \n\n5⃣ - **Controller** \n6⃣ - **Keyboard and Mouse** \n7⃣ - **Mobile**");
    let msg = await message.channel.send(rrembed)
    await msg.react("1⃣")
    await msg.react("2⃣")
    await msg.react("3⃣")
    await msg.react("4⃣")
  //  await msg.react("5⃣")
  //  await msg.react("6⃣")
  //  await msg.react("7⃣")
  
};


