require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
const rx = "1"

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${rx}.glitch.me/`);
}, 280000);



const Discord = require('discord.js');  
const client = new Discord.Client();  
const moment = require('moment');
const zalgo = require('zalgolize');  
const figlet = require('figlet');   
const fs = require('fs');  //x$
const ms = require('ms'); 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
const queue = new Map();
var table = require("table").table;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const prefix = '&'//برفكس البوت الأساسي
///////////////
let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
 
client.on("message", message => {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '&',//برفكس البوت الاساسي
    };
    var prefix = prefixes[message.guild.id].prefix;
    var setp = prefixes[message.guild.id];
    if (message.content.startsWith(prefix + 'setp')) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.reply(`**:x: Error: You do not have the required permissions: Manage Server.**`);
 
        let args = message.content.split(" ").slice(1);
 
        if (!args.join(" ")) return message.reply(`**:x: Error: Say The Prefix Please.**`);
          const embed = new Discord.RichEmbed()
 
       .setColor("BLACK")
  .setTitle("Prefix Set!")
  .setDescription(`**Set to ${args[0]}**`);
    message.channel.send(embed);
        setp.prefix = args.join();
 
    }
 
    fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
});

//طريقة الأستخدام
//لازم تحط في اول كل كود
/* if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '&',
    };
    var prefix = prefixes[message.guild.id].;*/
// وتحط في اخر كل كود
/* fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });*/

//مثال
client.on('message', message => { 
     if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '&',
    };
    var prefix = prefixes[message.guild.id].prefix;
    
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    });
                    fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });

/*وتعمل ملف اسمه
prefix.json
{} وتكتب فيه
Database و تعمل فولدر تسميه 
prefix.json وتحط فيه ملف اسمه
{} وتكتب فيه 
*/


client.login('')//توكن بوتك
