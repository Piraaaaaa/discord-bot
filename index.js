var Discord = require("discord.js");
var Client = new Discord.Client({ 
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#ffcd34")
            .setAuthor("Liste des commandes", "https://i.imgur.com/tNjb0l7.png")
            .setDescription("__Vous y trouverez la liste des commandes du bot__")
            .setThumbnail("https://i.imgur.com/tNjb0l7.png")
            .addField("__!help__", "Affiche la liste des commandes")
            .addField("__!packs__", "Affiche la liste des packs d'investissement")
            .setImage("https://i.imgur.com/tNjb0l7.png")
            .setTimestamp();

            message.channel.send({ embeds: [embed]});
    }else if(message.content === prefix + "packs"){
        const embed = new Discord.MessageEmbed()
            .setColor("#ffcd34")
            .setAuthor("Voici les packs d'investissement", "https://i.imgur.com/tNjb0l7.png")
            .setDescription("__Vous y trouverez la liste des packs de Piraaa - Investors__")
            .setThumbnail("https://i.imgur.com/tNjb0l7.png")
            .addField("__Débutant__", "150 euros à 500 euros")
            .addField("__Expérimenté__", "500 euros à 2000 euros")
            .addField("__Professionel__", "2000 euros à 5000 euros")
            .setImage("https://i.imgur.com/tNjb0l7.png")
            .setTimestamp();

            message.channel.send({ embeds: [embed]});
        }
});







Client.login(process.env.TOKEN);
