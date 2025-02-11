// Option 1 - readline (async/await): 
// In my opinion, it is the best option as we can get the user input asynchronously using async/await in Node.js.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
};

const main = async () => {
    const name = await askQuestion('What is your name? ');
    console.log(`Hello, ${name}!`);
    rl.close();
};

main();