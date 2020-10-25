module.exports = ({ 
    name: "convert",
    code: `
    $title[💱 **Conversion** 💱]
    $description[Tu as converti $$message[1] de Money en Cash.]
    $setVar[Cash;$sum[$getVar[Cash;$authorID];$message[1]];$authorID]
    $setVar[money;$sub[$getVar[money;$authorID];$message[1]];$authorID]
$addTimestamp
$editIn[10s;<a<a:confirmed:741771307150213260>741771307150213260>Votre **conversation** de $$message[1] est faite , $500 Money et $300 Cash on été récupéré ..]
 
$footer[La conversion coûte $500 de Money et $300 en Cash. ]
$color[33ff33]
   
    $onlyIf[$sub[$getVar[money;$authorID];$message[1]]>0;<:no:765020908833341490> Tu n'aura pas assez pour payer la conversion..Il te restera **$sub[$getVar[money;$authorID];$message[1]]**...]
    $onlyIf[$message[1]>699;<:no:765020908833341490> Tu dois convertir plus de $700 de money !.]
$onlyIf[$message[1]<=$getVar[money;$authorID];**<:no:765020908833341490>Tu ne peux pas convertir plus que ce que tu as !**]
$onlyIf[$getVar[money;$authorID]>899;<:no:765020908833341490> Vous devez avoir un minimum de $900 de Money pour pouvoir faire une conversion en Cash.]
$onlyIf[$getVar[Cash;$authorID]>499;<:no:765020908833341490>Tu dois avoir au moins $500 de Cash pour pouvoir réaliser une conversion .]
   $onlyIf[$message[1]!=;<:no:765020908833341490> Il faut que tu donnes la quantité à convertir.]
`
})