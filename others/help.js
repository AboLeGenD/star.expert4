const { MessageEmbed } = require("discord.js"); 

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("Invite Me")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=864203179947458571&permissions=8&scope=bot")
    .setImage("")
    .setDescription(`
> **Other Commands**
> \`help\`,\`ping\`,\`prefix\`,
> \`uptime\`,\`avatar\`,\`status\`
> 
> **Music Commands**
> \`filter\`,\`loop\`,\`lyrics\`
> \`np\`,\`pause\`,\`play\`
> \`queue\`,\`radio\`,\`remove\`,
> \`resume\`,\`search\`,\`shuffle\`
> \`skip\`,\`${prefix}skipto\`,\`stop\`
> \`volume\`
> 
> **Moderation Commands**
> \`lock\`,\`unlock\`,\`hide\`
> \`unhide\`,\`ban\`,\`unban\`
> \`mute\`,\`unmute\`,\`count\`
> \`invites\`,\`emoji\`,\`se\`
> \`bans\`,\`embed\`,\`addrole\`
> \`rmvrole\`,\`suggest\`,\`vkick\`
> \`clear\`,\`iemoji\`
> 
> **Fun Commands**
> \`slap\`,\`hug\`
> 
`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
