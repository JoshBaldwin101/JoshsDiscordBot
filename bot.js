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

const { VoiceChannel } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`); // If you're seeing this in the console, it worked!
});

client.login(process.env.DISCORD_TOKEN);

// All commands must begin with this symbol:
var commandSymbol = '+'; // Example: "!help", "!echo Hello World!"

// List of commands -- keep these in lowercase!
var helpCommandStr = "help";
var alarmCommandStr = "alarm";
var echoCommandStr = "echo";
var connectCommandStr = "connect";
var disconnectCommandStr = "disconnect";
var statusCommandStr = "status";

// Arrary of commands for use by the help command
var commandList = [
	helpCommandStr,
	alarmCommandStr,
	connectCommandStr,
	disconnectCommandStr,
	echoCommandStr,
	statusCommandStr
];

// Other variables
var attemptedCommand; // String for the attempted command

client.on('message', async msg => {	// This code block runs when a user sends a Discord message anywhere that the bot can read

	// This should keep the bot from responding to itself
	if(msg.author.bot) return;

	if(msg.content.substring(0,1) != commandSymbol) // Check if msg was even a command - REMEMBER: this code runs EVERY time a message is sent in the server!
	{
		return; // No command detected, break ASAP
	}
	else
	{
		attemptedCommand = msg.content.split(" ")[0].substring(commandSymbol.length, msg.content.split(" ")[0].length) // attemptedCommand = the command minus the ! symbol
		/*
		if (msg.member.voice.channel) {		// TODO: Delete this code when you figure out how to relocate to an outside function
			const connection = await msg.member.voice.channel.join();
		}
		*/
	}

	// Switch statement to figure out which command they used and to call the appropriate method
	switch(attemptedCommand)
	{
		case null:
			break;
		case helpCommandStr:
			help(msg);
			break;
		case alarmCommandStr:
			alarm(msg);
			break;
		case echoCommandStr:
			echo(msg);
			break;
		case connectCommandStr:
			voiceConnect(msg);
			break;
		case disconnectCommandStr:
			voiceDisconnect(msg);
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
 * This function takes in the entire message sent by a user then returns the content in a String minus the command invocations (Example: User says "!echo Hello World" this func returns "Hello World")
 * @param	{Object}	msg		The message sent by a user
 * @return	{String}			Returns the message sent by a user, but without the command invocation
 */
function cutOutArguments(msg)
{
	for(var i = 0; i < msg.content.length; i++)
	{
		if(msg.content.substring(i, i + 1) == " ")
		{
			return msg.content.substring(i + 1, msg.content.length);
		}
	}
	return null;
}




// == Functions for use when a command is invoked by a user ==


/**
 * This function simply posts this gif to the channel
 * @param	{Object}	msg 		The actual message sent by a user
 */
function alarm(msg)
{
	// Send the alarm gif: https://thumbs.gfycat.com/AbsoluteWateryIsopod-size_restricted.gif
	msg.channel.send('https://thumbs.gfycat.com/AbsoluteWateryIsopod-size_restricted.gif');
}

/**
 * This function takes in the entire message sent by a user then returns the content in a String minus the command invocations (Example: User says "!echo Hello World" this func returns "Hello World")
 * @param	{Object}	msg 		The actual message sent by a user
 */
function echo(msg)
{
	var echoedMessage = '';

	if(cutOutArguments(msg) != null)
	{
		echoedMessage = cutOutArguments(msg);
	}
	else
	{
		echoedMessage = 'usage: ```' + commandSymbol + alarmCommandStr + ' [message to be repeated]```';
		msg.reply(echoedMessage);
		return;
	}
	
	msg.channel.send(echoedMessage);
}

/**
 * This function sends a message informing users of what commands they can use and how to use them + includes an MOTD too
 * @param	{Object}	msg			The message sent by a user
 */
function help(msg)
{
	var helpStr = '';
	for(var i = 0; i < commandList.length; i++)
	{
		helpStr = helpStr + commandList[i] + '\n';
	}

	// Print the help list
	msg.channel.send('Hello! This bot is a work in progress. Contact my creator, @X3liteNinjaX#6891, for more info!\n' + helpStr);
}

/**
 * This function updates the Discord bot's status with a given argument
 * @param	{Object}	msg		The message sent by a user
 */
function status(msg)
{
	var newStatus = cutOutArguments(msg);

	// Sets the bot's Discord status
	client.user.setActivity(newStatus); 
}

/**
 * This function informs the user that their attempted command was not recognized
 * @param	{Object}	msg		The message sent by a user
 */
function unrecognizedCommand(msg)
{
	// Inform the user that the command they have typed did not align with an existing command
	msg.reply('that was not a message I understood... Try ' + commandSymbol + helpCommandStr + ' to get a full list of commands.')
}

/**
 * This function connects the bot to the same voice channel as the user invoking this command
 * @param	{Object}	msg		The message sent by a user
 */
function voiceConnect(msg)
{
	if (msg.member.voice.channel) {
		const connection = msg.member.voice.channel.join();
	}
}

/**
 * This function disconnects the bot from the voice channel
 * @param	{Object}	msg		The message sent by a user
 */
function voiceDisconnect(msg)
{
	/* 
	 * TODO: make this code work. 
	 * Notes:
	 * - Most of this code is specific to 'guilds'
	 */

	// Disconnect the bot from voice channel
	msg.reply('whoops, this is awkward. I don\'t exactly know how to disconnect yet, sorry!');
	if (msg.member.voice.channel) {
		const connection = null;
	}
	//const connection = msg.member.voice.channel.join();
	//voiceChannel.leave();
	//client.leaveVoiceChannel(msg.member.voiceState.channelID);
	//mybot.leaveVoiceChannel(msg.author.voiceChannel.id, function (error {console.log(error)});
}
