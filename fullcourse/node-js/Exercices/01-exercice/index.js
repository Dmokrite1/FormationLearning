const { reverseWords } = require('./reverse.js');
const colors = require('colors')

import('./spongeBob.mjs').then((spongebobModule) => {
  const { toSpongebob } = spongebobModule;

  const String = "Qui vit dans un ananas dans la mer? BOB L'éponge Carré !!";
  const spongebobCaseString = toSpongebob(String);
  console.log(`${spongebobCaseString}`.random);

  const Array = ['banane', 'cerise', 'prune', 'JCVD'];
  const reversedArray = reverseWords(Array);
  console.log(`${JSON.stringify(reversedArray)}`.rainbow);
});
