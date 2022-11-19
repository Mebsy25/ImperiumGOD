const {EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'cronograma',
    alias: ['calendario'],
run (client, message, args){
    const embed1 = new EmbedBuilder()
    .setTitle('𝐶𝑅𝑂𝑁𝑂𝐺𝑅𝐴𝑀𝐴 𝐷𝐸𝐿 𝐺𝑈𝐼𝐿𝐷')
    .setDescription(`Para un mayor orden las actividades con los integrantes del guild se haran los dias Lunes a las 5:00 PM (GMT-3), estaremos en el Voice [🗣] 𝐺𝑒𝑛𝑒𝑟𝑎𝑙 para una mejor coordinacion, cualquier cambio se estara avisando por aqui mismo o si desean lo pueden hacer con el comando >>calendario \n`)
    .setColor(client.color)
    .setImage(`https://cdn.discordapp.com/attachments/1042518176644202547/1043523996609691678/R_1.jpg`)
message.channel.send({embeds: [embed1]})
    }
}