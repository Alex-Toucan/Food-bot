const Discord = require('discord.js');
const request = require('request');
const fetch = require('node-fetch');
require('dotenv-flow').config();

const client = new Discord.Client();

var prefix = !!

const aboutembed = {
  title: "About",
  description: "This is a Food Bot made by AT Products.",
  color: 0xc49016,
  footer: {
    icon_url: 'https://raw.githubusercontent.com/Alex-Toucan/Food-bot/master/files/ProfilePictureMaker.png',
    text: "AT Products LLC (2019-2022)"
  },
  thumbnail: {
    url: 'https://raw.githubusercontent.com/Alex-Toucan/Food-bot/4b95b8e835d71a58e64a88f0a6b77babd4a1f021/files/avatar.jpeg'
  },
  author: {
    name: "By AlexToucanYT#0001",
    icon_url: 'https://raw.githubusercontent.com/Alex-Toucan/Food-bot/4b95b8e835d71a58e64a88f0a6b77babd4a1f021/files/avatar.jpeg'
  },
  fields: [
    {
      name: "Invite me!",
      value: "invite me using https://discord.com/oauth2/authorize?client_id=968854386363211796&scope=bot&permissions=67488832"
    },
    {
      name: "complaints?",
      value: "DM **AlexToucanYT#0001**... or make a issue at the link below!"
    },
    {
      name: "The bot is open source!",
      value: "Contribute or make a issue at https://github.com/Alex-Toucan/useless-toast-bot"
    },
    {
      name: "Commands",
      value: "https://raw.githubusercontent.com/Alex-Toucan/Food-bot/master/files/commands.txt"
    }
  ]
};

const config = {
  token: process.env.TOKEN,
}

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity('people ask for food.', {type: "WATCHING"})
 });


client.on('message', msg => {
  if(msg.content.toLowerCase() === '${prefix}help') {
    msg.reply({ embed: aboutembed });
    }
 });

client.on('message', msg => {
  if (msg.content === '${prefix}admincontrol') {
    console.log(client.guilds.cache);
    msg.reply('hi! if you are a importaint person... you can see a list of all the servers the bot is in by visiting the command prompt!');
  }
})

client.on('message', msg => {
  if(msg.content.toLowerCase() == '${prefix}toast') {
    fetch(`https://source.unsplash.com/1600x900/?toast`).then((response) => {
      msg.author.send(response.url).then(sentMessage => sentMessage.react('969787192341839883'))
      console.log("Toast Requested By " + msg.author.tag);
     });
    if(msg.content.toLowerCase() == "${prefix}toast")
    msg.react('969787192341839883')
     }
 });



client.login(config.token);
