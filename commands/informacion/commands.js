const {EmbedBuilder} = require('discord.js');

// COMMANDOS //
module.exports = {
    name: 'commands',
    alias: ['cmd'],
run (client, message, args){
    const embed1 = new EmbedBuilder()
    .setTitle('ππΌπ πΆππππ΄ππ·ππ')
    .setDescription(`**>>link:** Para ver los enlaces de ayuda (Mapa interactivo, guias, etc)\n**>>infoserver:** Ver la informacion del servidor \n**>>infobot:** Ver informacion sobre mi \n**>>test:** Resolver el test de ingreso \n**>>commands:** Ver todos los comandos disponibles \n**>>sugerencia:** Hacer una sugerencia\n **>>calendario:** Ver el cronograma del guild`)
    .setColor(client.color)
message.channel.send({embeds: [embed1]})
    }
}