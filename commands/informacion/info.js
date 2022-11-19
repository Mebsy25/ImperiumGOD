const {EmbedBuilder} = require('discord.js');

// INFO DEL SERVIDOR //
module.exports = {
    name: 'infoserver',
    alias: ['serverinfo'],
run (client, message, args){
    const embed3 = new EmbedBuilder()
    .setTitle('𝐼𝑁𝐹𝑂 𝐷𝐸𝐿 𝑆𝐸𝑅𝑉𝐼𝐷𝑂𝑅')
    .setDescription(`Nombre: The Imperium \n Creador: Meryl \n Puto: El que lo lea`)
    .setColor(client.color)
    .setImage(`https://cdn.discordapp.com/attachments/1041136890964881509/1043206086469091328/foto.jpg`)
message.channel.send({embeds: [embed3]})
    }
}
