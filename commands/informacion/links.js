const {EmbedBuilder} = require('discord.js');

// LINKS DE AYUDA //
module.exports = {
    name: 'link',
    alias: ['urls'],
run (client, message, args){
    const embed2 = new EmbedBuilder()
    .setTitle('𝐸𝑁𝐿𝐴𝐶𝐸𝑆 𝐷𝐸 𝐴𝑌𝑈𝐷𝐴')
    .setDescription(`Mapa Interactivo: https://tower-of-fantasy-map.appsample.com/\n\nMapa Interactivo 2: https://toweroffantasy.interactivemap.app/?map=9`)
    .setColor(client.color)
message.channel.send({embeds: [embed2]})
    }
}