const {EmbedBuilder} = require('discord.js');

// INFO DEL BOT //
module.exports = {
    name: 'infobot',
    alias: ['botinfo'],
run (client, message, args){
    const embed4 = new EmbedBuilder()
    .setTitle('MI INFORMACION')
    .setDescription(`Mi nombre es The Imperium bot, fui creado el dia 16-11-22 por Loneliness#2518, tengo varias funciones, las puedes ver todas usando ++commands, estoy aun en desarrolo asi que si tienes algun problema no olvides reportarlo a mi creador. Muchas Gracias UwU`)
    .setColor(client.color)
message.channel.send({embeds: [embed4]})
    }
}