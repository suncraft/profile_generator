const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//answers
const a = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  a.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    a.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      a.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        a.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          a.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            a.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              a.push(answer);

              console.log(`Here's a suggested profile template for you! `);
              console.log(`Hi, I'm ${a[0]}. I'm someone who sure likes ${a[4]} at ${a[3]}! One of my best traits is ${a[6]}. I love ${a[1]} and listening to ${a[2]}. Want to join me for some ${a[5]}? `);
              rl.close();
            });
          });
        });
      });
    });
  });
});