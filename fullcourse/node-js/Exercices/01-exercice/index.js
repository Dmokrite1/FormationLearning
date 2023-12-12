const { reverseWords } = require('./reverse.js');
const colors = require('colors')

import('./SpongeBobCase.mjs').then((spongebobModule) => {
  const { toSpongebob } = spongebobModule;

  const String = "Qui vit dans un ananas dans la mer? BOB L'éponge Carré !!";
  const spongebobCaseString = toSpongebob(String);
  console.log(`Spongebob Case: ${spongebobCaseString}`.random);

  const Array = ['banane', 'cerise', 'Prune', 'JCVD'];
  const reversedArray = reverseWords(Array);
  console.log(`Reversed Words: ${JSON.stringify(reversedArray)}`.rainbow);
});
