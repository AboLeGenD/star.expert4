const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "channels",
  aliases: ["chs"],
  description: "Show Gif",
  usage: "Gif",
   async execute(message, args, client) {
        const channels = message.guild.channels.cache;
        const voiceChannels = channels.filter((channel) => channel.type === "voice").map((channel) => channel.name).join(", ");
        const textChannels = channels.filter((channel) => channel.type === "text").map((channel) => `<#${channel.id}>`).join(", ");

        const embed = new MessageEmbed()
            .setColor("#0d2943")
            .setTitle(`${message.guild.name}'s channels`)
            .addField("**Voice Channels:**", voiceChannels)
            .addField("**Text Channels:**", textChannels)
            .setFooter(message.author.username)
            .setTimestamp();


        message.channel.send(embed);
    }
};
