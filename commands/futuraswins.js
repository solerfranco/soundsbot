module.exports = {
  name: "futuras wins",
  aliases: ["futuraswins", "barbawins"],
  description: "Denada por sus futuras wins!",
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play("./audios/futuraswins.mp3", {
        volume: 0.5,
      });

      dispatcher.on("start", () => {
        console.log("audio is now playing!");
      });

      dispatcher.on("finish", () => {
        console.log("audio has finished playing!");
      });

      // Always remember to handle errors appropriately!
      dispatcher.on("error", console.error);
    }
  },
};
