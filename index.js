const express = require("express");
const app = express();

app.listen(() => console.log("start by niro"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

clinet.login("")//توكن بوتك

const prefix = ""//حط البرفكس الأساسي للبوت

let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
 
client.on("message", message => {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '&',
    };
    var prefix = prefixes[message.guild.id].prefix;
    var setp = prefixes[message.guild.id];
    if (message.content.startsWith(prefix + 'setp')) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.reply(`**:x: Error: You do not have the required permissions: Manage Server.**`);
 
        let args = message.content.split(" ").slice(1);
 
        if (!args.join(" ")) return message.reply(`**:x: Error: Say The Prefix Please.**`);
          //const embed = new Discord.RichEmbed()
 
       //.setColor("BLACK")
 // .setTitle("Prefix Set!")
  //.setDescription(`**Set to ${args[0]}**`);
   // message.channel.send(embed);
       message.channel.send(` 👌 `);
        setp.prefix = args.join();
 
    }
 
    fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
});

/*
لازم تحط اول كل كود
if (!prefixes[niro.guild.id]) prefixes[niro.guild.id] = {
        prefix: '!',
    };
    var prefix = prefixes[niro.guild.id].;
ولازم تحط بعد كل كود
fs.writeFile("./prefixer.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
*/
/*مهم
لازم تعمل ملف اسمه
prefix.json
و تكتب فيه 
{}
ولازم تعمل ملف اسمه
prefixer.json
وتكتب فيه 
{}
*/

//مثال
client.on('message', niro => {


if (!prefixes[niro.guild.id]) prefixes[niro.guild.id] = {
        prefix: '!',
    };
    var prefix = prefixes[niro.guild.id].;


    if(niro.content.startsWith(prefix + 'ping')) {
        var niro = new Discord.MessageEmbed()
        .setColor('red')
        .setTitle('Your Ping')
        .setDescription(`> Your Ping | ${client.ws.ping}`)
        .setFooter(`Requested By ${niro.author.tag}`, niro.author.avatarURL)
        niro.channel.send(niro);
    }
});


fs.writeFile("./prefixer.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
