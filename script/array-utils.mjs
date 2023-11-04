function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function extractRandomElementFrom(array) {
  const coolDownWords = JSON.parse(localStorage.getItem("cooldown")) || [];
  if (coolDownWords?.length) {
    coolDownWords.forEach((element) => {
      const i = array.indexOf(element);
      if (i >= 0) {
        array.splice(i, 1);
      }
    });
  }
  array = shuffle(array);
  const extr = array[getRandomInt(array.length)];
  coolDownWords.push(extr);
  if (coolDownWords.length > 20) {
    coolDownWords.shift();
  }

  localStorage.setItem("cooldown", JSON.stringify(coolDownWords));
  return extr;
}
