function toSpongebob(string) {
    return string
      .split('')
      .map((char) => {
        const shouldInvert = Math.random() < 0.5;
        return shouldInvert ? char.toUpperCase() : char.toLowerCase();
      })
      .join('');
}
  
export { toSpongebob };
  