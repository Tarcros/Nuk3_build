const Dlang = require('discordbot-script')
const discordScript = require("discordbot-script")
 
const bot = new discordScript({
  token: "NzM1MzYzNzQxMzQzOTQwNjQw.XxfK2g.10Oes4_z8yMZmPi6jDvUWcaRczg",
  prefix: ["&"]
})
 
bot.MessageEvent()
bot.MessageEditEvent()
const fs = require('fs');
const {
    notDeepEqual
} = require("assert");
const {
    time
} = require("console");
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command({
            name: command.name,
            aliases: command.aliases,
            description: command.description,
            api: command.api,
            code: command.code,
        })
    }
}

bot.ReadyCommand({
  name: "765679715658498129",
  code:`
  $title[<:online:751759197028483093> BOT EN LIGNE]
$description[<:online:751759197028483093> <@$client[id]> **est de nouveau en ligne!**
\`\`\`js
$client[id] ID
$memory mb
$cpu cpu
$ping ms
$serverCount serveurs 
$allMembersCount Utilisateurs\`\`\`]
$footer[ Nuk3 Status;https://media.discordapp.net/attachments/737751320412422195/741753635779772486/unknown.png]
$addTimestamp
$color[03eb7c]
`
})

bot.Variables({
  money: "100",
  Cash: "500",
  Bank: "1400",
  join: "None",
  leave: "None",
  ticket: "0",
  cooldown: "2",
  mute: "Non Définie",
  Police: "0",
  Gooddeed: "1",
  Evenement: "5",
  reactionrole: "Non Définie",
  peche: "0",
  poisson: "0",
  réputation: "2",
  nourriture: "0",
  Amis: "0",
  prestige: "0",
  clan: "Aucun",
  clanmember: "0",
  clanlogo: "<:clan:766238392488427560>",
  pointbonus: "0",
  Keys: "0",
  cuisine: "0", 
  Patate: "0",
  voiture: "0",
  papier: "0",
  garde: "0",
  diamand: "0",
  afk: "",
  afkmessage: "",
  messages: "0",
  logs: "Non Définie",
  prefix: ",",
  Prefix: ",",
  RankJoin: "0"  
})


bot.Command({
  name:"reacthelp",
  code:`
$awaitReactions[🛠️,🎯,🛣️,💰,🎉,🔮,🎶,🔧,🔑;everyone;90s;tools,dart,motorway,moneybag,tada,crystal_ball,notes,wrench,key;You took too long to react!]
$addReactions[🛠️;🎯;🛣️;💰;🎉;🔮;🎶;🔧;🔑]
$author[ Help Reaction - Nuk3 ;https://cdn.discordapp.com/attachments/737751320412422195/741753635779772486/unknown.png]
$description[ **Reagisser avec la reaction convenant au type d'aide que vous avez besoin.**
 Ou utiliser la commande \`,help\`

  **    Admin                                                               Fun: 
  \`🛠️ (,help admin)\`               \`🎯  (,help fun)\`
   Image                                                                Economie: 
  \`🛣️ (,help image)\`               \`💰  (,help economie)\`
   Giveaway                                                                  Autre: 
  \`🎉 (,help giveaway)\`               \`🔮  (,help autre)\`
    Musique                                    Config: 
  \`🎶 (,music)\`               \`🔧  (,config)\`
                                    Support: ** 
                    \`🔑 (,support)\`

 \`\`\`js
 Temps: 90s\`\`\`]
  $footer[ Nuk3 Help Reacton - Utilisable qu'une fois.;https://cdn.discordapp.com/attachments/737751320412422195/741753635779772486/unknown.png]
  $thumbnail[$serverIcon]
`
})



bot.AwaitedCommand({
  name: "key",
  code: "$title[<:bugnet:741473778055512176>Serveur Support<:BugHunterGold:741473760695156818>] $description[ Tout d'abord je suis désolée.. <:pepecry:741482924133580851> Si tu es ici, c'est parce que tu as un problème avec le bot ou tu souhaites rajouter quelque chose à Nuk3cl3ar bot ...Non ?<:pepegenius:741482906635075665>\nBonjour/Bonsoir **$username[$authorID]** , je te remercie d'avoir ajouté Nuk3cl3ar bot à ton serveur.<a:okey:741818164807204976>\n\nPour rejoindre le serveur de support, tu cliques tout simplement sur l'invitation ci-dessous pour nous faire un petit coucou ou report un problème avec __Nuk3cl3ar bot__...👨‍🔧\n\n<:HypeSquad:741473569594409021>Link :{hyper:Support:https://discord.gg/nhhZxVK}] $footer[Je serais ravi de te recevoir☑ ;https://media.discordapp.net/attachments/737751320412422195/741753635779772486/unknown.png] $color[05b388] $suppressErrors[<a:thefalse:744770469122539521> **| Tu as mal exécuté la commande vérifie là .**] $image[https://cdn.discordapp.com/attachments/737751320412422195/741740264267317339/InstaHouseMomPremium_CustomGifByItsOkayBae.gif] $thumbnail[https://cdn.discordapp.com/attachments/737751320412422195/741753635779772486/unknown.png] $dm[$authorID]  "
})

bot.AwaitedCommand({
  name: "tools",
  code: "$username[] you just reacted to the red circle"
})

bot.Command({ name: "afk",
 code: `
 $setUserVar[afk;Oui;$authorID]
$setUserVar[afkmessage;$message[];$authorID]
$title[<:dnd:751759197082877983> Tu es désormais afk]
$description[$replaceText[$replaceText[$checkCondition[$message[1]==];true;**Aucune Raison**];false;$message[]]]
$footer[À bientôt!;$userAvatar[$authorID]]
$color[B4C3C2]
$thumbnail[$userAvatar[$authorID]]
$deletecommand[1ms]
$deleteIn[90s]
`
},
{ name: "noafk",
 code: `
 $setUserVar[afk;off;$authorID]
$title[<:online:751759197028483093> Vous n'êtes plus AFK!]
$footer[Ah! Te re-voila enfin!;$userAvatar[$authorID]]
$color[09FF00]`

});
bot.SpaceCommand({
  name: "dejvypepic",
  code: `$replaceText[$replaceText[$checkCondition[$getUserVar[afk;$mentioned[1]]==Oui];true;
 $username[$mentioned[1]] est AFK!];false;]
 $onlyIf[$mentioned[1]!=;]`
 });

 
 bot.SpaceCommand({
  name: "pingForPrefix",
  code: `
  <:online:751759197028483093>** Nuk3 Bot **
  Mon prefix est: \`,\`
    
    $onlyIfMessageContains[<@$client[id]>;<@!$client[id]>;]
    $setServerVar[messages;$sum[$getServerVar[messages];1]]
    $setUserVar[messages;$sum[$getUserVar[messages;$authorID];1];$authorID]
      `
  })


  bot.LoopCommand({
    name: "this can be anything, its just reference",
    code:`
    $color[03eb7c]
    $author[Nuk3cl3ar - Help Global;https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png]
    
    $description[<:nuk3bot:753772063512330261> » Tu n'as pas encore <@735499202582413342> sur ton serveur **{hyper:?:https://discord.com/api/oauth2/authorize?client_id=735499202582413342&permissions=8&scope=bot}** ?
        
         <:nuk3mod:753772063780634716> **Moderation **               <:nuk3fun:753772064015646761>** Fun**                       <:nuk3image:753772063990480927>**Image**
             \`,help admin\`                  \`,help fun\`             \`,help image\`
        
        <:nuk3economie:753772063604473888>**Economie**                   <:nuk3giveaway:753772063616925777>**Giveaway**             <:nuk3autre:753772065823260704>**Autre**
         \`,help economie\`       \`,help giveaway\`      \`,help autre\`
        
         <:nuk3music:753772063692685412>**Music**                  <:nuk3config:753772064393134164>**Config**                            <:nuk3support:753772063743017050>**Support**
           \`,music\`                        \`,config\`                           \`,support\`
        
        <:nuk3info:753805249440907295> **Bot Info  **              <:nuk3more:753805249122402304>**More Info**                   <:nuk3plus:753772063508136109>**Plus**
         \`,botinfo\`                   \`,more info\`                        \`,plus\`
        $image[https://cdn.discordapp.com/attachments/737751320412422195/745122053832835092/eRa_2.png]
                                           **{hyper:Invite:https://discord.com/api/oauth2/authorize?client_id=735499202582413342&permissions=8&scope=bot}     |     {hyper:Support:https://discord.gg/nhhZxVK}     |     {hyper:Avatar:https://cdn.discordapp.com/attachments/737751320412422195/745122053832835092/eRa_2.png}**]
        $footer[Merci de m'avoir ajouté sur ton serveur☑;$userAvatar[735499202582413342]]
        $addTimestamp
        $thumbnail[https://cdn.discordapp.com/attachments/737751320412422195/741753635779772486/unknown.png]
        $suppressErrors[<a:thefalse:744770469122539521> **| Tu as mal exécuté la commande vérifie là .**] 
   $useChannel[764705984199000105]
   $deleteIn[719m]
   `
   }, 43200000)

   bot.LoopCommand({
    name: "this can be anything, its just reference",
    code:`
    $author[Nuk3cl3ar Bot Info ;https://media.discordapp.net/attachments/737751320412422195/741753635779772486/unknown.png]
    $thumbnail[https://cdn.discordapp.com/attachments/737751320412422195/741753635779772486/unknown.png]
    $color[03eb7c]
    $description[

              **Bot » **<:botverif:767208029988847676>                                                             **Dev »** <:discord_bot_dev:741473584576200735>
       > **Bot:** {hyper:\`Nuk3\`:https://top.gg/bot/735499202582413342}$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==online];true;<:online:765645895685242891>];false;]$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==dnd];true;<:dnd:751759197082877983>];false;]$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==idle];true;<:idle:751759197095329822>];false;]$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==offline];true;<:offline:765646063071264862>];false;]                                              **Développeur :** {hyper:\`*тαя¢яσѕ#9710\`:https://top.gg/user/315244741287477250}$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==online];true;<:online:765645895685242891>];false;]$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==dnd];true;<:dnd:751759197082877983>];false;]$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==idle];true;<:idle:751759197095329822>];false;]$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==offline];true;<:offline:765646063071264862>];false;]
       > **Descriminateur Bot:** \`#5130\`             **Descriminateur Dev:** \`#9710\`
       > **ID Bot:** \`735499202582413342\`           **ID Dev:** \`315244741287477250\`
       <:nuk3config:753772064393134164>** Systeme**
      \`\`\`xl
      Prefix: ,
      Version: 1.5.0
      Uptime: $uptime  
      Memoire: $memory Mb
      Librarie: discord.js
      cpu: $cpu
      \`\`\`
      <:stats:767214446052769843>** Stats**
      \`\`\`xl
        Serveurs: $serverCount Servers
        Utilisateurs: $allMembersCount Users
        Ping: $ping ms
        +270 Commands
      \`\`\`
                                                        {hyper:**Add The Bot**:https://discord.com/api/oauth2/authorize?client_id=735499202582413342&permissions=8&scope=bot} ** | ** {hyper:**Support**:https://discord.gg/5FpfExr} ** | ** {hyper:**Avatar**:https://cdn.discordapp.com/attachments/737751320412422195/745122053832835092/eRa_2.png}**  |**  {hyper:**Donate**:https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCZV7EGC79QX2&source=url} 
       
    ]
    $footer[Nuk3 Bot Info ;$userAvatar[735499202582413342]]
    $addTimestamp
    
    $botTyping
    $useChannel[764705984199000105]
   $deleteIn[719m]
   `
   }, 43203000)

   bot.JoinedCommand({
    name: "$ge",
    code: `
    <@$authorID> a rejoin le serveur $serverName[$guildID]!
    Va prendre tes role ! <#768648983609868288>
    `
    })
    bot.onJoined()
    

    bot.LeaveCommand({
      name: "736328870768410676",
      code: `
      <@$authorID> a quitter le serveur 
      `
      })
      bot.onLeave()

      bot.MessageDeleteCommand({
        name: "768826283018289162",
        code: `
        $description[<@$authorID> a supprimer un message !
        C'étais: $message[]
      ]
        `
        })
        bot.onMessageDelete()

