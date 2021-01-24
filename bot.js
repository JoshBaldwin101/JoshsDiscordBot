// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

// List command strings
var helpCommandStr = "help";
var alarmCommandStr = "alarm";
var echoCommandStr = "echo";

client.on('message', msg => {
	// Do stuff when a message is sent

	// Case statement to figure out which command they used
	switch(attemptedCommand)
	{
		case helpCommandStr:
			// Do something
			break;
		case alarmCommandStr:
			// Do something
			break;
		case echoCommandStr:
			// Do something
			break;
	}
})
