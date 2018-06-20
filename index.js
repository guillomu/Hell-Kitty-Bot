const Discord = require('discord.js')

const bot = new Discord.Client()

// Au chargement du bot
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

  bot.user.setAvatar('./img/devilkitty.jpg') // On défini un avatar
  .then(() => console.log('Avatar mis en place avec succès'))
  .catch(console.error)

  bot.user.setActivity('Hello Kitty Online', { type: 'PLAYING' }).catch(console.error) // On lui défini une activité
});

// A la réception d'un message
bot.on('message', function (message) {
    if(message.content === 'Chaton'){ // Si le message est égale à Chaton on envoie I <3 Cats!!!
      message.reply('I <3 Cats!!!')
    }
})

// Lorsqu'un nouveau membre entre dans la guild
bot.on('guildMemberAdd', function(member) {
  if(member.guild.channels.exists("name", "général")){ // Si le channel général existe
    // On envoi un message sur le général pour lui souhaiter la bienvenue
    member.guild.channels.find("name", "général").send(`Bienvenue ${member} dans le monde merveilleux de Hello Kitty Online.`)
  }
});

// On créer un setInterval qui se relancera toute les 2 minutes
setInterval(function(){
  console.log('@everyone Trop Mignon!')
  bot.channels.find("name", "général").send('@everyone Trop Mignon!') // On envoie @everyone Trop Mignon dans le channel général
}, 120000);

bot.login('')  // Connection du bot sur le serveur
