require('dotenv').config(); // add this at the top of your index.js file

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome'); // replace 'welcome' with the name of your channel
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}!`); // send welcome message

  setTimeout(() => {
    channel.messages.fetch().then(messages => {
      messages.last().delete(); // delete last message in channel
    });
  }, 60000); // delete message after 1 minute
});

client.login(process.env.TOKEN); // use token from .env file
