const { reverseWords } = require('./reverse.js');
const colors = require('colors')

import('./SpongeBobCase.mjs').then((spongebobModule) => {
  const { toSpongebob } = spongebobModule;

  const inputString = 'banane';
  const spongebobCaseString = toSpongebob(inputString);
  console.log(`Spongebob Case: ${spongebobCaseString}`.random);

  const inputArray = ['banane', 'cerise'];
  const reversedArray = reverseWords(inputArray);
  console.log(`Reversed Words: ${JSON.stringify(reversedArray)}`.rainbow);
});
