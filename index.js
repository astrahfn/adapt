const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const random = Math.floor(Math.random() * 8000) + 1000;
const jsonfile = require("jsonfile");
const { prefix, token } = require('./config.json');
const config = require("./config.json");
const bot = new Discord.Client()
const fs = require("fs");





client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();


let cmdfolders = [""];
cmdfolders.forEach(folder => {
  fs.readdir(`./commands/${folder}`, (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${folder}${file}`);
      console.log("Loaded Command: " + file);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
    });
  });
});













let folders = [""];
folders.forEach(folder => {
  fs.readdir(`./events/${folder}`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
      let eventFunc = require(`./events/${folder}/${file}`);
      eventFunc.run(client);
    });
  });
});

 
//bot status
const activities_list = ["Made By Astral", "twitter.com/astralvz"]; // creates an arraylist containing phrases you want your bot to switch through.
 
client.on("ready", () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
}, 10000); // Runs this every 10 seconds.
});

exports.run = async (client, message, args, prefix) => {

const embed12 = new Discord.MessageEmbed()
.setColor("#7e42e9")
.setTitle("**Custom Game Created**")
.setDescription("You just created a custom game.")

.addField("Game Code", args.slice(0).join(" "), true)
.setTimestamp()
.setFooter("Created By Astral");


}





const embed23 = new Discord.MessageEmbed()
.setColor("#7e42e9")
.setTitle("**Custom Game Matchmaking**")
.setDescription("**Match is about to start.**")
.addField("Game Mode", "Solo Arena")
.addField("Game Region", "Europe")
.addField(
  "Rules",
  "• ALLOWED TO FIGHT IF CONTESTED BUT ONLY TILL 80 PEOPLE LEFT. \n \n • YOU ARE ALLOWED TO FIGHT TILL 80 PEOPLE ALIVE. \n \n • DONT SHOOT, FIGHT OR ENGAGE IN ANY FIGHTS IF PLAYER COUNT IS 80 OR LESS. \n \n • ANYONE KILLING UNDER 75 PLAYERS WILL BE BANNED FROM DISCORD. \n \n• DONT FIGHT TILL 2ND ZONE FULLY CLOSES. \n \n• DONT STEAL ITEMS, DROPS (FIRST ON DROP TAKES IT). \n \n • BREAK 1 RULE 1 TIME BANNED FOREVER NO WARNINGS NO COMEBACK. \n \n • DONT BOX ABOVE ANYONE BEFORE SECOND ZONE CLOSES"
)
.addField(
  "Current Status",
  "React below to receive your custom match code! If we detect you leaking the code, you may lose your role."
)
.setTimestamp()
.setFooter("Created By Astral");



const queueembed = new Discord.MessageEmbed()
              .setColor("#7e42e9")
              .setTitle("Europe Ranked Realistic Queue")
              .setDescription("You have been entered into the **1v1 Ranked Realistic Queue.**" + `\n` + 
                  "`\`\`\prolog\nELAPSED 5 SECONDS\nYOUR CURRENT ELO :: 0\nCURRENT ELO BRACKET :: 0 + 50\`\`\`")
              .setFooter(
                "Created By Astral"
              ).setTimestamp()























client.on("message", (message, user) => {
if(message.content.startsWith("*solo"))
//message.author.send(embed12);
client.channels.cache.get("725449590421062330").send(embed23)


})

const staff = new Discord.MessageEmbed()
   .setColor("#7e42e9")
   .setTitle("Match Help")
   .setDescription("Staff have been notified that you need help.\n\nPlease describe your problem in as much detail as possible.")
   .setFooter("Created By Astral")
   .setTimestamp();

client.on("message", (message, user) => {

  if (message.mentions.roles.has("725796740103405698")){
    if(message.channel.name.toLowerCase().startsWith("realistic"))
 message.channel.setParent('725796664991809577', { lockPermissions: true }).then(channel => channel.lockPermissions()).then(channel => channel.send(staff))
  }
})

let message_id = '726086912863109221'
let channel_id = '725796101621284984'
client.on('ready', async () => {
client.channels.cache.get(channel_id).messages.fetch(message_id) // now the queue message is fetched, you can do the reaction code inside the messageReactionAdd event.
})

client.on('messageReactionAdd', async (reaction, user) => {
  if(user.bot) return 
  let member = await reaction.message.guild.members.cache.get(user.id)
  if (reaction.message.id === message_id && reaction.emoji.id === '725761917477453886') {
  //&& reaction.message.reactions.cache.get("725761917477453886").count >= 3) {
    let message = reaction.message
    let reactionCheck = await message.reactions.cache.get("725761917477453886")
   // if(reactionCheck) message.reactions.cache.get('25761917477453886').users.remove(user.id).catch(err => console.log(err))
   const second = new Discord.MessageEmbed()
.setColor("#7e42e9")
.setTitle("Match Information")
.setDescription("```css\nMATCH INFORMATION\nMatch Format :: 1v1 Realistic \nMatch Region :: Europe``` \n **IF**  "+ `**<@${user.id}>**` + "  **Wins**" +  `\n` + `\`\`\`css\n  + 15  - ${user.username} 0 + 15 = 15\`\`\``)
.addField("**MAP CODE**", "```css\n7950-6306-4857```")
.setFooter("Created By Astral")
.setTimestamp();
   
  let role = message.guild.roles.cache.find(role => role.name === "Match Helper")
  let winner = new Discord.MessageEmbed()
  .setColor("#7e42e9")
  .setTitle("Please Select The Winner")
  .setDescription("If you **won,** please **select** 🏆 \n\nIf you **lost,** please **select** 💀.\n\nIf you would like to cancel the **game,** please **select** 🇽.\n\n If you would like to report your opponent or need help with your **game,** please mention " + `${role}` + " in this channel.")
  .setFooter("Created By Astral")
  .setTimestamp();
  
  const pugSize = 2; // Maximum amount of players in the PUG
  const pugMembers = []; // Array to hold the members in the PUG
  
  function checkPugSize(){
  if(pugMembers.length <= 2){
        
    
          //TODO Create the two teams
          console.log(`PUG IS FULL: ${pugMembers.length}`);
  
      }else{
          console.log(`THE PUG IS NOT FULL: ${pugMembers.length}`);
      }
    }
  if (pugMembers.size >= 2){
                
    msg.channel.send(`QUEUE IS FULL. ${pugMembers} ARE PLAYING`)
    console.log("QUEUE IS FULL");
          }
  
  
  
     
                
              async function addUserPug(msg){
                if (pugMembers.size != 0){
                 pugMembers.push(reaction.message.user);
                  let msg = await user.send(queueembed)
                    setTimeout(() => {
                    msg.edit(new Discord.MessageEmbed() .setColor("#7e42e9")
                    .setTitle("Europe Ranked Realistic Queue")
                    .setDescription("You have been entered into the **1v1 Ranked Realistic Queue.**" + `\n` + 
                    "`\`\`\prolog\nELAPSED 10 SECONDS\nYOUR CURRENT ELO :: 0\nCURRENT ELO BRACKET :: 0 + 50\`\`\`")
                    .setFooter(
                      "Created By Astral"
                    ).setTimestamp())
                    },  5000)


            console.log(`${user.username} added to queue. Queue Size: ${pugMembers.length}`);
            }          
  else{
  
             msg.channel.send(`QUEUE IS FULL. ${pugMembers} ARE PLAYING`)
  
          console.log("QUEUE IS FULL");
      }
  }
  client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
      if (msg.content == '!size'){
          msg.channel.send(`Current PUG size: ${pugMembers.length}`);
      }
  });
  if (reaction.message.id === message_id && reaction.emoji.id === '725761917477453886') {
  //  pugMembers.push(reaction.message.user);
        addUserPug(reaction.message);
  }

        checkPugSize();
console.log(`QUEUE = ${pugMembers.length}`)
}

})


//verification
const time = new Discord.MessageEmbed()
  .setColor("#7e42e9")
  .setDescription(
    "You took too long to verify, please try again. <#725675294224023622>"
  );

const code1 = new Discord.MessageEmbed()
  .setColor("#7e42e9")
  .setDescription(
    "You entered the wrong verification code, please try again. <#725675294224023622>"
  );

const verified = new Discord.MessageEmbed()
  .setColor("#7e42e9")
  .setDescription(
    "You are already verified, if you would like to unlink, type `*unlink` in <#725732568368021555>"
  );

const verify = new Discord.MessageEmbed()
  .setColor("#7e42e9")
  .setDescription(
    "You are not verified, if you would like to verify, head over to <#725675294224023622>"
  );

//customs
const time1 = new Discord.MessageEmbed()
  .setColor("#7e42e9")
  .setDescription(
    "You took too long to verify, please try again. <#725675294224023622>"
  );


client.on("message", (message, user) => {
  if (message.content == "*unlink" && message.channel.name === "bot-commands") {
    if (
      !message.member.roles.cache.some(r =>
        ["725724940904562709"].includes(r.id)
      )
    )
      return message.channel.send(verify);
    message.member.roles.remove("725724940904562709");
    message.member.setNickname(message.author.username);
    const unlinked = new Discord.MessageEmbed()
      .setColor("#7e42e9")
      .setTitle("Successfully Unlinked")
      .addField("User", `\`\`\`${message.author.username}\`\`\``)
      .setTimestamp();
    message.channel.send(unlinked);
  }
});

let messageid = "725682075243642961";
let channelid = "7725675294224023622";

client.on("ready", async () => {
  client.channels.cache.get(channelid).messages.fetch(messageid);
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (user.bot) return;
  let member = await reaction.message.guild.members.cache.get(user.id);
  if (
    reaction.message.id === messageid &&
    reaction.emoji.id === "725679019923865640"
  ) {
    if (
      reaction.message.guild.members.cache
        .get(user.id)
        .roles.cache.some(r => ["725724940904562709"].includes(r.id))
    )
      return user.send(verified);
    reaction.message.reactions.cache
      .get("725679019923865640")
      .users.remove(user.id)
      .catch(err => console.log(err));

    let message = reaction.message;
    let reactionCheck = await message.reactions.cache.get("725679019923865640");
    const emoji = client.emojis.cache.get("725679019923865640");

    const first = new Discord.MessageEmbed()
      .setColor("#7e42e9")
      .setTitle("Epic Games Account Verification")
      .setDescription(
        "Follow the Steps Below to Verify Your Epic Games Account. \n\nPlease type in your Epic Games Account Name or paste your Epic Games Account ID. Note that the name is case sensitive."
      )
      .setFooter(
        "By continuing, you agree that ADAPT may process your Epic Games Data (e.g. stats, account name, session data), combine it with your Discord data, and share it with other members of this server and third parties through our API upon authorized request."
      );

    let role = message.guild.roles.cache.find(
      role => role.name === "Match Helper"
    );

    member.send(first).then(async msg => {
      let filter = m => m.author.id === user.id;
      let epicName = await user.dmChannel
        .awaitMessages(filter, { max: 1, time: 15000, errors: ["time"] })
        .catch(err => user.send(time));
      const second = new Discord.MessageEmbed()
        .setColor("#7e42e9")
        .setTitle("Linking your Epic Games Account")
        .setDescription(
          "Username " +
            `__**${epicName.first().content.toUpperCase()}**__` +
            " Found. We Will Need to Verify that its Your Account. \n\nPlease Open up Fortnite and Send a Friend Request to the Following Account: " +
            `\`\`\`ADAPT Creative\`\`\`` +
            "\n Once Completed Please Enter The Four Digit Code On Our Name." +
            " \n\nIf Creative does not automatically accept your friend request after 2 minute, please cancel the friend request and resend it."
        )
        .setFooter("Created By Astral")
        .setTimestamp();

      user.send(second).then(async msg => {
        let role7 = reaction.message.guild.roles.cache.find(
          role => role.name === "Verified By ADAPT"
        );
        let filter = m => m.author.id === user.id;
        let epicGame = await user.dmChannel
          .awaitMessages(filter, { max: 1, time: 150000, errors: ["time"] })
          .catch(err => user.send(time));
        const success = new Discord.MessageEmbed()
          .setColor("#3D97CB")
          .setTitle(" Completed Verification")
          .setDescription(
            "Your verification is now complete and there are no further steps for you to do."
          )
          .setTimestamp()
          .setFooter("Created By Astral");

        if (epicGame.content == "1987") 
        return user.send(code1);
        user.send(success);
        let member = await reaction.message.guild.members.cache.get(user.id);
        member.roles.add(role7);
        member.setNickname(epicGame.content);
      });
    });
  }
});













































client.login(config.token);


