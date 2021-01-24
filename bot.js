// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

// All commands must begin with this symbol:
var commandSymbol = '!';

// List command strings
var helpCommandStr = "help";
var alarmCommandStr = "alarm";
var echoCommandStr = "echo";
var connectCommandStr = "connect";
var disconnectCommandStr = "disconnect";
var statusCommandStr = "status";

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
		case connectCommandStr:
			// Do something
			break;
		case disconnectCommandStr:
			// Do something
			break;
		case statusCommandStr:
			// Do something
			break;
	}
})

function cutOutArguments(msg)
{
	// This function takes in the entire message sent by a user then returns the bits minus the command
}

function help(msg)
{
	// Print the help list
	msg.channel.send('Hello! This bot is a work in progress. Contact my owner, X3liteNinjaX#6891, for more info!');
}

function alarm(msg)
{
	// Send the alarm gif
}

function echo(msg)
{
	// Repeat whatever the user said
}

function connect(msg)
{
	// Connect the bot to a voice channel
}

function disconnect(msg)
{
	// Disconnect the bot from a voice channel
}

function status(msg)
{
	// Sets the bot's status
	client.user.setActivity("Testing this code"); 
}
