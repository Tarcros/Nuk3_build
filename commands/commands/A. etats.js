module.exports = {
    name: "etat",
    code: `
    $title[<:setting:769375912751529985> Etat de configuration du serveur ]
    $description[
        <:good:765025682068865054>: **Configuré**
        <:no:765020908833341490>: **Pas encore configuré**

        **__Channels__**
        $replaceText[$replaceText[$checkCondition[$getServerVar[join]==None];true;<:no:765020908833341490>];false;<:good:765025682068865054>] **Welcome**: \`$getServerVar[join]\`







    ]




    
    
    
    
    `
}