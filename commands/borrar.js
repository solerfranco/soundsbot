module.exports = {
  name: "borrar",
  description: "Borrar!",
  execute(message, args) {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 10) {
      return message.reply("you need to input a number between 1 and 10.");
    }

    message.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      message.channel.send(err);
    });
  },
};
