"use strict";

let text = "One: 'Hi Mary.' Two: 'Oh, hi.'\n" +
    "One: 'How are you doing?'\n" +
    "Two: 'I'm doing alright. How about you?'\n" +
    "    One: 'Not too bad. The weather is great isn't it?'\n" +
    "    Two: 'Yes. It's absolutely beautiful today.'\n" +
    "One: 'I wish it was like this more frequently.'\n" +
    "Two: 'Me too.'\n" +
    "One: 'So where are you going now?'\n" +
    "Two: 'I'm going to meet a friend of mine at the department store.'\n" +
    "One: 'Going to do a little shopping?'\n" +
    "Two: 'Yeah, I have to buy some presents for my parents.'\n" +
    "One: 'What's the occasion?'\n" +
    "    Two: 'It's their anniversary.'\n" +
    "One: 'That's great. Well, you better get going. You don't want to be late.'\n" +
    "Two: 'I'll see you next time.'\n" +
    "One: 'Sure. Bye.'"

//заменяем ВСЕ ' на " из исходного текста
let newText = text.replace(/'/g, `"`);
console.log(newText);

//заменяем апострофы " на ' из измененного текста newText
let newText2 = newText.replace(/(\w)"(\w)/g, `$1'$2`);
console.log(newText2);

//оставляем апострофы ' из исходного текста text, заменяем кавычки ' на ". Также делаем проверку, если строка заканчивается на .(точку) - в исходном тексте такого нет, но на всякий случай проверяем
let newText3 = text.replace(/(\s)'(.+)'(\s?)|(\s)'(.+)'(\s?\W)/g, `$1"$2"$3`);
console.log(newText3);