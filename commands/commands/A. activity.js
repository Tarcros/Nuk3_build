module.exports = {
        name: "activity",
        code: `
        $replaceText[$replaceText[$checkCondition[$status[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;$authorID]]==online];true;<:online:765645895685242891>];false;]$replaceText[$replaceText[$checkCondition[$status[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;$authorID]]==dnd];true;<:dnd:751759197082877983>];false;]$replaceText[$replaceText[$checkCondition[$status[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;$authorID]]==idle];true;<:idle:751759197095329822>];false;]$replaceText[$replaceText[$checkCondition[$status[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;$authorID]]==offline];true;<:offline:765646063071264862>];false;]\`$username[$authorID]\` **$activity[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;$authorID]]** - $replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;Ceci est l'activité de $username[$mentioned[1;yes]]];false;Ceci est votre activité]
        `
        
}