module.exports = async msg => {
  await msg.channel.send(`${msg.author} pong`);
  console.log("pong message sent");
};
