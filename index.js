const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

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

const prefix = ""//حط البرفكس الأساسي للبوت

let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
 
client.on("niro", niro => {
    if (!niro.channel.guild) return;
    if (niro.author.bot) return;
    if (!prefixes[niro.guild.id]) prefixes[niro.guild.id] = {
        prefix: '&',//حط البرفكس الأساسي للبوت
    };
    var prefix = prefixes[niro.guild.id].prefix;
    var setp = prefixes[niro.guild.id];
    if (niro.content.startsWith(prefix + 'setp')) {
        if (!niro.member.hasPermission(`MANAGE_GUILD`)) return niro.reply(`**:x: Error: You do not have the required permissions: Manage Server.**`);
 
        let args = niro.content.split(" ").slice(1);
 
        if (!args.join(" ")) return niro.reply(`**:x: Error: Say The Prefix Please.**`);
          //const embed = new Discord.RichEmbed()
 
       //.setColor("BLACK")
 // .setTitle("Prefix Set!")
  //.setDescription(`**Set to ${args[0]}**`);
   // niro.channel.send(embed);
       niro.channel.send(` 👌 `);
        setp.prefix = args.join();
 
    }
 
    fs.writeFile("./prefixer.json", JSON.stringify(prefixes), (err) => {
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
