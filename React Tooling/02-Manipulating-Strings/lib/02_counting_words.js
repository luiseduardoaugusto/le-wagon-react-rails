function occurrences(text, word) {
  const result = text.replace(/[^a-zA-Z ]/g, "").split(" ");
  let sum = 0;
  result.forEach((palabra) => {
    if (palabra.toLowerCase() === word.toLowerCase()) {
      sum += 1;
    }
  });
  return sum;
}
console.log(occurrences("a fat, cat sat on a mat and ate a fat, rat", "fat"));
module.exports = occurrences;
