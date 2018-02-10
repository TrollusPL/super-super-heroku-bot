const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDExODE3MDUyNTI1OTUzMDI0.DWBOIg.pWBtiaPt8JVGJf9eAHEbtaqq3sU);
