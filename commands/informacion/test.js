const {EmbedBuilder} = require('discord.js');
// TEST DE IQ //
module.exports = {
    name: 'test',
    alias: ['iqtest'],
run (client, message, args){
    const embed5 = new EmbedBuilder()
    .setTitle('ππΈππ π·πΈ πΌππΊππΈππ')
    .setDescription(`Para que tu estadia en el guild sea la mejor, porfavor completar el siguiente test: \n https://www.123test.com/iq-test/#culture-fair-intelligence-test\n\n`)
    .setColor(client.color)
    .setImage(`https://cdn.discordapp.com/attachments/1043525072754839655/1043525113347313724/n4ewpwimhjs4twtkguqa.webp`)
message.channel.send({embeds: [embed5]})
    }
}