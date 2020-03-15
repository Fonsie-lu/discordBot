const guildID = "688507228780625982";
const channelID = "688825177164873858";
const ping = require("./ping");
const eightBall = require("./8ball");

const commands = {
  ping,
  "8ball": eightBall
};

module.exports = async msg => {
  if (msg.guild.id === guildID && msg.channel.id == channelID) {
    const args = msg.content.split(" ");
    if (args.length === 0 || args[0].charAt(0) !== "!") return;
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
