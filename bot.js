const Discord = require("discord.js")
const PREFIX = "~";
const TOKEN = "MzAzOTAyNDM0OTc4NDMwOTc4.DC8Y6Q.Y4QtFMaXwW2qtWEPp_EFudOF1tI";
const YTDL = require('ytdl-core');
const fs = require('fs');
const X = '.';
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
client.login(process.env.BOT_TOKEN);

function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: 'audioonly'}));
    server.queue.shift();
    server.dispatcher.on('end', function() {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    }); 
}
var dicklenght = [ 
    "...                                                                                                                                                                      8=D",
    "KILL ME...                                                                                                                                                               8==D",
    "KINDA BIG... KINDA SMALL...                                                                                                                                              8=======D",
    "CANT FIT IN PANTS...                                                              8==================================D",
    "EH...                                                                                                                                                                    8=====D",
    "YOUR DICK IS BIG...                                                               8====================================================D"
]

var fortune = [ 
     "Yep",
     "Yes",
     "I think so...",
     "Of course!",
     "No!",
     "Maybe...",
     "I dunno this one ;-;",
     "Okey ;)",
     "Nope :/"                                             
]

var compliment1 = [ 
     "You are cute :)",
     "I love you...",
     "Your eyes are beautiful!",
     "Youre funny!",
     "I think i like you...",
     "You are making me feel horny :P",
     "I want you...",
     "Gimme your body ;)",
     "You are very beautiful"                                             
]

var mems = [
    ({
    file: "https://media0ch-a.akamaihd.net/38/41/78ff9bb36013d25b2b267c175aa9b96d.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/15c14o.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rlhif.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rkyuh.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rjxve.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rkz9b.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rlb8e.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rkyxh.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rklnm.gif" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rlkdf.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rl1w0.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rmawu.jpg" // Or replace with FileOptions object
}),
({
    file: "https://i.imgflip.com/1rmb8g.jpg" // Or replace with FileOptions object
})
]

 
  'http://www194.lunapic.com/do-not-link-here-use-hosting-instead/149893649730936?9218328344',
  'http://www194.lunapic.com/do-not-link-here-use-hosting-instead/149893649730936?505389240',
  'http://www194.lunapic.com/do-not-link-here-use-hosting-instead/149893649730936?2080086991',
  'http://www194.lunapic.com/do-not-link-here-use-hosting-instead/149893649730936?9829481193',
  'http://www194.lunapic.com/do-not-link-here-use-hosting-instead/149893649730936?1946106306',
  'https://yt3.ggpht.com/-l7cC3H3rhlc/AAAAAAAAAAI/AAAAAAAAAAA/d5HImMrJvk4/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'


var queue = [];   
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];


var servers = {};

const newUsers = [];

var bot = new Discord.Client();

bot.on('ready', () => {
bot.user.setGame("use ~cmds");
});
bot.on("message", function() { 
    console.log("sent");
});

    
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "%elbotadon") { // command to trigger
      var interval = setInterval (function (){
        bot.sendMessage({
          to: channelID,
          message: "test sry if spam" // message to send
        });
      }, 10000); // time between each interval in milliseconds
    }
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    


    switch (args[0]) {
        case "cmds":
	  message.channel.sendMessage({
        "embed": {
                color: 3447003,
                description: message.author.username + " I Sent You A DM!"
            }
        });
      message.author.sendMessage({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "~cmds",
    description: "SHOWS THIS COMMAND",
    fields: [{
        name: "~8ball <QUESTION>",
        value: "This Is A Magic Ball Which Answers Your Questions :O"
      },
      {
        name: "~compliment",
        value: "Funny And Cute Command <3"
      },
      {
        name: "~say <TEXT>",
        value: "Say Something To Bot To Say It As Bot!"
      },
      {
        name: "~memes",
        value: "Memz ( ͡° ͜ʖ ͡°)"
      },
     {
        name: "~message <MENTION USER> <TEXT>",
        value: "Message A User As A Bot!"
      },
           {
        name: "~messagedev <TEXT>",
        value: "Send A Issue, Bug Or Message To Developer! *(he will respond fast)*"
      },
     {
        name: "~play <YOUTUBE ID OR YOUTUBE LINK>",
        value: "Plays Music Of Your Choice!"
      },
    {
        name: "~kick <MENTION USER>",
        value: "Kicks Member"
      },
    {
        name: "~ban <MENTION USER>",
        value: "Bans Member"
      },
          {
        name: "~ayy",
        value: "LMAO"
      },
          {
        name: "~profile <mention member>",
        value: "Shows User Profile"
      },
	      {
        name: "~avatar",
        value: "Set a logo for the bot!"
      },
          {
        name: "WE ARE NOT RESPONSIBLE FOR SPAM, PLEASE CREATE A BOT #CHANNEL.",
        value: "-"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "EL BOT © 2018"
    }
  }
});
            break;

            case "avatar":
            {
                      message.channel.sendMessage({
        "embed": {
                color: 0xFF69B4,
                title:"~vignette",
                description:"Sets EL Bot Avatar Style To Vignette",
                fields: [{
        name: "~fire",
        value: "Sets EL Bot Avatar Style To Fire!!"
      },
      {
        name: "~negative",
        value: "Sets EL Bot Avatar Style To Negative"
      },
       {
        name: "~sepia",
        value: "Sets EL Bot Avatar Style To Sepia/Old"
      },
      {
        name: "~rainbow",
        value: "Sets EL Bot Avatar To EL Rainbow!!!"
      },
      {
        name: "~default",
        value: "DEFAULT STYLE"
      }
                 
                
                ]
}

        });


    }
    
            break;

            case "vignette":{
              bot.user.setAvatar('https://image.ibb.co/indhpa/vignette.png').then(user => { message.channel.send('WOW! now my avatar is lit...'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Try Later...'); console.log('Error on setavatar command:', error); });
    
    return;
}

 case "sepia":{
              bot.user.setAvatar('https://image.ibb.co/dgmukF/sephia.png').then(user => { message.channel.send('Welcome to old times... :grin:'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Try Later...'); console.log('Error on setavatar command:', error); });
    
    return;
}

 case "rainbow":{
              bot.user.setAvatar('http://www194.lunapic.com/do-not-link-here-use-hosting-instead/149893649730936?1946106306').then(user => { message.channel.send('Im Rainbow! :rainbow:'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Try Later...'); console.log('Error on setavatar command:', error); });
    
    return;
}

case "fire":{
              bot.user.setAvatar('http://i.imgur.com/X9NBC6w.jpg').then(user => { message.channel.send('AHHH... Im burning :fire: :scream_cat:'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Try Later...'); console.log('Error on setavatar command:', error); });
    
    return;
}

case "default":{
              bot.user.setAvatar('https://yt3.ggpht.com/-l7cC3H3rhlc/AAAAAAAAAAI/AAAAAAAAAAA/d5HImMrJvk4/s88-c-k-no-mo-rj-c0xffffff/photo.jpg').then(user => { message.channel.send('Returned To My Default Logo... :)'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Try Later...'); console.log('Error on setavatar command:', error); });
    
    return;
}

case "negative":{
              bot.user.setAvatar('http://i.imgur.com/zsmApYp.jpg').then(user => { message.channel.send('My Avatar Type is negative, but im always positive!'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Try Later...'); console.log('Error on setavatar command:', error); });
    
    return;
}


        case "randomdick":
        if (message.member.roles.find('name', 'nsfw')) {
    message.channel.send(dicklenght[Math.floor(Math.random() * dicklenght.length)]);
} else {
    message.channel.send("You Don't Have 'nsfw' role! (*or you must create nsfw role*) ");
}
        break;

          case 'play':
         if(!args[1]) {
                    message.channel.sendMessage('Please provide a link');
                return;
                }
                if(!message.member.voiceChannel) {
                    message.channel.sendMessage('You have to be in my voice channel!');
                return;
                }
                if(!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                };
                message.channel.sendMessage('Please Wait...');
                var server = servers[message.guild.id];
                server.queue.push(args[1]);
                if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {

                    play(connection, message);
                    message.channel.sendMessage('Playing Now');
                });
                break;


        case "8ball":
        if (args [1])  message.channel.sendMessage (fortune[Math.floor(Math.random() * fortune.length)]);
        else message.channel.sendMessage("Ask Me Something?")
        break; 

        case "compliment":
        message.channel.sendMessage (compliment1[Math.floor(Math.random() * compliment1.length)]);
        break; 

        case "ayy":
        
        setTimeout(function () {message.react("🇱") },800);
        setTimeout(function () {message.react("🇲") },1100);
        setTimeout(function () {message.react("🇦") },1200);
        setTimeout(function () {message.react("🇴") },2400);
        break; 

        case "memes":
        message.channel.sendMessage (mems[Math.floor(Math.random() * mems.length)]);
        break;

        case "say": {
        let args = message.content.split(' ').slice(1);
     let content = args.join(' ')
        var argresult = args.join(' ');
        message.channel.send(content).catch(console.error)
        }
               break; 

        case "message": {
        let args = message.content.split(' ').slice(2);
             let content = args.join(' ')
        var argresult = args.join(' ');

     if (args[1]) { 
         message.guild.member(message.mentions.users.first()).send(message.author.tag + " **SENT YOU MESSAGE:** " + content);
     message.channel.sendMessage ("Successfuly Sent!");

  } else {
    message.channel.send("**Usage: ~message <mention a member> <message>*");
}
        }
        break; 

        case "messagedev":
        {
           let args = message.content.split(' ').slice(1);
            let content = args.join(' ')
        var argresult = args.join(' ');
          console.log(message.author.tag + " SENT YOU MESSAGE: " + content);
        }
     break;        
     

        case "kick":{
    if (message.member.hasPermissions(['KICK_MEMBERS'])){
      if(args.length === 1){
                    message.channel.sendMessage({
        "embed": {
                color: 0xFF69B4,
                description: message.author.username + " Mention Someone Please!"
            }
        });
      } else {
    let kickMember = 
    message.guild.member(message.mentions.users.first());
    if (!kickMember) {
        return message.reply("ERROR");
    }
    kickMember.kick().then(member => {
                      message.channel.sendMessage({
        "embed": {
                color: 0xFF69B4,
                title:" LOG",
                description: message.author.username + " KICKED "  +  message.mentions.users.first()
                 
            }
        });


    }
    )};
    
    }
  }
      break;

      case "bannsfw":{
    if (message.member.hasPermissions(['MANAGE_MESSAGES']))
                if (message.content === "randomdick") {
    message.channel.send("NOPE");
  }
                 
  }
      break;

      case "ban":{
    if (message.member.hasPermissions(['BAN_MEMBERS'])){
      if(args.length === 1){
                    message.channel.sendMessage({
        "embed": {
                color: 0xFF69B4,
                description: message.author.username + " Mention Someone Please!"
            }
        });
      } else {
          let banMember = 
          message.guild.member(message.mentions.users.first());
              if (!banMember) {
        return message.reply("ERROR");
              }
                  banMember.ban().then(member => {
                      message.channel.sendMessage({
        "embed": {
                color: 0xFF69B4,
                title:" LOG",
                description: message.author.username + " BANNED "  +  message.mentions.users.first()

                }
        });

        });
   }
    }
  }
  
  break;

  case "profile":
    if (args [1]) {
            const embed = new Discord.RichEmbed()
        .addField("Name/Tag ",
   message.mentions.users.first().tag)
  .addField("ID ",
  message.mentions.users.first().id)
      .addField("Avatar URL ",
 message.mentions.users.first().avatarURL)
       .addField("Last Message",
 message.mentions.users.first().lastMessage)
    .setColor(0x00AE86)
      .setThumbnail(message.mentions.users.first().avatarURL)
  message.channel.send({embed}).catch((error) => { message.channel.send('```!!!PLEASE DONT PROFILE THIS MEMBER!!!, IT MAKES ME CRASH, PLEASE PROFILE SOMEONE OTHER```'); console.log('Error on profile command:', error); });

 
 
    if (message.mentions.members.first().hasPermission("ADMINISTRATOR")) {
    
 message.channel.sendMessage({
        "embed": {
            title:"ADMINISTRATOR: YES"                        
}


        })
} else {
    message.channel.sendMessage({
        "embed": {
                title:" ADMINISTRATOR: NOPE"
                 
            }
        })
}

  if (message.mentions.members.first().roles.find('name', 'nsfw')) {
    
 message.channel.sendMessage({
        "embed": {
            title:"NSFW PERMISSION/ROLE: YES"                        
}


        })
} else {
    message.channel.sendMessage({
        "embed": {
                title:" NSFW PERMISSION/ROLE: NOPE"
                 
            }
        });

    }
}
else {
    message.channel.sendMessage({
        "embed": {
                title:"Mention Someone, Please"
                 
            }
        })
}
  break;
             default:{
                      message.channel.sendMessage({
        "embed": {
                color: 0xFF69B4,
                title:" :x: INVALID COMMAND :x:",
                description:" PLEASE CHECK COMMANDS, **USAGE: ~cmds** "
            }
        });

    }
    
      break;    

                 
                 
            }
          

        
         
    

  
        
});

bot.login(TOKEN);
