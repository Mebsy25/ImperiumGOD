const { ActivityType, Events, GatewayIntentBits, Client, EmbedBuilder, Collection} = require('discord.js');
require('dotenv').config();
const client = new Client({ 
    intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
    ]    
});
    
const config = require(`${process.cwd()}/config.json`);
const fs = require ('fs');
const { measureMemory } = require('vm');

client.once(Events.ClientReady, () => {
    console.log('Tamos Skereeeee');

    client.user.setPresence({
        activities: [{ name: "como Mebsy me programa", type: ActivityType.Watching }],
    });
});

client.login(process.env.token)

client.on('messageCreate', async(message) =>{
    if(message.author.bot || !message.guild || message.channel.type ==='dm') return;

    var prefix = config.prefix

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    client.color = config.color

    let cmd  = client.commands.find((c) => c.name === command || (c.alias && c.alias.includes(command)));
    if(cmd){
        cmd.run(client, message, args, prefix);
    }
})

client.commands = new Collection();

fs.readdirSync('./commands').forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
    for (let file of commands){
        let command = require(`./commands/${dir}/${file}`);
        console.log(`Comandos Cargados - ${file} cargado`)
        client.commands.set(command.name, command);
    }
}); 