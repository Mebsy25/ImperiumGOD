const {EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'cronograma',
    alias: ['--'],
run (client, message, args){
    message.channel.send(`<@&${"1038591232483524619"}>`);
    const embed1 = new EmbedBuilder()
    .setTitle('πΆπππππΊππ΄ππ΄ π·πΈπΏ πΊππΌπΏπ·')
    .setDescription(`Para un mayor orden las actividades con los integrantes del guild se haran los dias **Lunes a las 5:00 PM (GMT-3)**, estaremos en el Voice  **[π£] πΊππππππ** para una mejor coordinacion, cualquier cambio se estara avisando por aqui mismo o si desean lo pueden hacer con el comando **>>calendario* \n`)
    .setColor(client.color)
    .setImage(`https://cdn.discordapp.com/attachments/1042518176644202547/1043523996609691678/R_1.jpg`)
message.channel.send({embeds: [embed1]})
    }
}