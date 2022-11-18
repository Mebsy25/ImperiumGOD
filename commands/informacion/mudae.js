const {EmbedBuilder} = require('discord.js');

// COMMANDOS //
module.exports = {
    name: 'mudae',
    alias: ['waifu'],
run (client, message, args){
    const embed1 = new EmbedBuilder()
    .setTitle('🤖𝐵𝑜𝑡 𝐼𝑛𝑎𝑐𝑡𝑖𝑣𝑒🤖')
    .setDescription(`**NO SIRVO**`)
    .setColor(client.color)
    .setImage(`https://cdn.discordapp.com/emojis/936312132079865886.gif?size=128&quality=lossless`)
message.channel.send({embeds: [embed1]})
    }
}