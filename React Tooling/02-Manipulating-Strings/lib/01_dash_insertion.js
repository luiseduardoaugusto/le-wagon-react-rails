function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const palabras = word.split("");
  const vocals = ["a", "e", "i", "o", "u", " "];
  let resultado = '';
  let anterior;
  palabras.forEach((letra) => {
    if (!vocals.includes(letra.toLowerCase())) {
      if (anterior === false) {
        resultado += `-${letra}`;
        return;
      }
      anterior = false;
    } else {
      anterior = true;
    }
    resultado += letra;
  });
  return resultado;
}

module.exports = insertDash;
