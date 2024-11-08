// Option 2 - prompt-sync: 
// It is a module available on npm and you can refer to the docs for more examples prompt-sync.

// npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("How old are you? ");
console.log(`You are ${age} years old.`);