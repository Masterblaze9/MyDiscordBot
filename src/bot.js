const {Client,Intents,msgAttachment}=require('discord.js')

const YTDL=require("ytdl-core")

require("dotenv").config()

const client=new Client();

const PREFIX="!"

let ready=false;



client.on('ready',()=>{
    console.log("I'm online")

    client.user.setActivity("I'm here for you")
})

client.on("message",(msg)=>{    
    console.log(client.channels.cache.get('id'))
           
    if(msg.content==="!join"||msg.content.toUpperCase()==="!join"){
        if(msg.member.voice.channel==="897808872868294696"){            
            msg.guild.member(897576489594286101).voice.setChannel(msg.member.voice.channel); //vai juntar ao canal de voz da pessoa que o chamou
            ready=true
        }else{            
            msg.channel.send("You need to be in voice channel to use this command")
            
        }
    }if(msg.content===msg.content==="!leave"||msg.content.toUpperCase()==="!leave"){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.leave(); //vai sair do canal de voz da pessoa que o chamou
            ready = false;
        }else{
            msg.channel.send("You need to be in voice channel to use this command")
        }
    }if(msg.content.startsWith(+"!play ")){
        if(ready){
            let whatToPlay=msg.content.replace("!play","")

            if(YTDL.validateURL(whatToPlay)){
                msg.member.voiceChannel.connection.playStream(YTDL(whatToPlay))
            }else{
                msg.channel.send("Link is not valid!")
            }
        }
    }
})



//Para enviar DM
/*client.on("message", (msg) => {
    msg.author.send("This is a dm")
})*/


client.login(process.env.TOKEN)
