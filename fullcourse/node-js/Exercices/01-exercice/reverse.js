function reverseWords(arr) {
    return arr.map((word) => word.split('').reverse().join(''));
}
  
module.exports = { reverseWords };
  