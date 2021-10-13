const {Client,Intents,msgAttachment}=require('discord.js')

require("dotenv").config()

const client=new Client();



client.on('ready',()=>{
    console.log("I'm online")c 

    client.user.setActivity("Matilde")
})



client.login(process.env.TOKEN)
