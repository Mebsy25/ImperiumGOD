const {EmbedBuilder} = require('discord.js');
// TEST DE IQ //
module.exports = {
    name: 'test',
    alias: ['iqtest'],
run (client, message, args){
    const embed5 = new EmbedBuilder()
    .setTitle('𝑇𝐸𝑆𝑇 𝐷𝐸 𝐼𝑁𝐺𝑅𝐸𝑆𝑂')
    .setDescription(`Para que tu estadia en el guild sea la mejor, 
    porfavor completar el siguiente test: \n https://www.123test.com/iq-test/#culture-fair-intelligence-test`)
    .setColor(client.color)
message.channel.send({embeds: [embed5]})
    }
}