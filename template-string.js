let nombre = 'perdi a mi novia,';
let real = 'si bro, es real';
let esRealTemplate = `${nombre} ${real}`;


function saludar(){

    return esRealTemplate;
}

console.log('Un caso real:', `${saludar()}`);
// console.log(`${nombre} ${real}`);
// console.log(esRealTemplate);