/**	Author: Josh Baldwin
*
*	Project: JoshsDiscordBot
*
*	Filename: bot.js
*
*	Language: JavaScript
*
*	Purpose: To be run using a Discord bot in my Discord servers. 
*
*	Info: This is primarily a fun hobby project for myself. A lot of the functions/commands in here are inside jokes between me and my friends
*	but I've done my best to explain them. I am also doing my best to write good, efficient, and readable code.
*
*	How does this work: I run the bot locally using node js. The Discord API takes care of the rest and the bot goes online in my Discord servers.
*	Using the invite link here: https://discord.com/api/oauth2/authorize?client_id=686813289153691689&permissions=0&scope=bot
*
*	References/Resources:
*		- Discord's website: https://discord.com/
*		- Discord developer docs: https://discord.com/developers/docs/
*		- JS docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*		- An article I found on best practice JS code documentation: https://gomakethings.com/whats-the-best-way-to-document-javascript/
*/

// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`); // If you're seeing this in the console, it worked!
});

client.login(process.env.DISCORD_TOKEN);

// All commands must begin with this symbol:
var commandSymbol = '!'; // Example: "!help", "!echo Hello World!"

// List of commands -- keep these in lowercase!
var helpCommandStr = "help";
var alarmCommandStr = "alarm";
var echoCommandStr = "echo";
var connectCommandStr = "connect";
var disconnectCommandStr = "disconnect";
var statusCommandStr = "status";

client.on('message', msg => {	// This code block runs when a user sends a Discord message anywhere that the bot can read
	// Do stuff when a message is sent

	// Switch statement to figure out which command they used and to call the appropriate method
	switch(attemptedCommand)
	{
		case helpCommandStr:
			help(msg);
			break;
		case alarmCommandStr:
			alarm();
			break;
		case echoCommandStr:
			echo(msg);
			break;
		case connectCommandStr:
			voiceConnect();
			break;
		case disconnectCommandStr:
			voiceDisconnect();
			break;
		case statusCommandStr:
			status(msg);
			break;
		default:
			unrecognizedCommand(msg);
			break;
	}
})

/**
 * This function takes in the entire message sent by a user then returns the command invocation (Example: User says "!echo Hello World" this func returns "!echo")
 * @param	{String}	msg		The message sent by a user
 * @return	{String}			Returns only the command invocation
 */
function isolateCommandInvocation(msg)
{
	// If there aren't any spaces that means no arguments were passed, therefore, no point in splitting
	if (msg.indexOf(' ')) // Check for spaces
	{
		return msg.toLowerCase();
	}

	return msg.split(" ")[0].toLowerCase(); // Returns the first element in the array which would be the command invocation
}

/**
 * This function takes in the entire message sent by a user then returns the content in a String minus the command invocations (Example: User says "!echo Hello World" this func returns "Hello World")
 * @param	{String}	msg		The message sent by a user
 * @return	{String}			Returns the message sent by a user, but without the command invocation
 */
function cutOutArguments(msg)
{
	return content;
}



//
// == Functions for use when a command is invoked by a user ==
//

/**
 * This function simply posts this gif to the channel
 */
function alarm()
{
	// Send the alarm gif: https://thumbs.gfycat.com/AbsoluteWateryIsopod-size_restricted.gif
}

/**
 * This function takes in the entire message sent by a user then returns the content in a String minus the command invocations (Example: User says "!echo Hello World" this func returns "Hello World")
 * @param	{String}	msg		The message sent by a user
 */
function echo(msg)
{
	msg = cutOutArguments(msg);
	msg.channel.send(msg);
}

/**
 * This function sends a message informing users of what commands they can use and how to use them + includes an MOTD too
 */
function help()
{
	// Print the help list
	msg.channel.send('Hello! This bot is a work in progress. Contact my creator, X3liteNinjaX#6891, for more info!');
}

/**
 * This function updates the Discord bot's status with a given argument
 * @param	{String}	msg		The message sent by a user
 */
function status(msg)
{
	// Sets the bot's Discord status
	client.user.setActivity("Testing this code"); 
}

/**
 * This function informs the user that their attempted command was not recognized
 * @param	{String}	msg		The message sent by a user
 */
function unrecognizedCommand(msg)
{
	// Inform the user that the command they have typed did not align with an existing command
}

/**
 * This function connects the bot to the same voice channel as the user invoking this command
 * @param	{String}	msg		The message sent by a user
 */
function voiceConnect(msg)
{
	// Connect the bot to a voice channel
}

/**
 * This function disconnects the bot from the voice channel
 * @param	{String}	msg		The message sent by a user
 */
function voiceDisconnect(msg)
{
	// Disconnect the bot from voice channel
}
