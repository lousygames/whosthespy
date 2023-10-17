import ui from "../assets/localization/ui.json" assert { type: "json" };

window.addEventListener("load", () => {
  const payload = JSON.parse(localStorage.getItem("payload"));
  const localizedUi = ui[payload.lang];

  let pool = [];

  fetch(`assets/localization/assets.${payload.lang}.json`)
    .then((response) => response.json())
    .then((json) => {
      payload.gameSettings.topics.forEach((element) => {
        const topicName = topics[element];
        pool = pool.concat(...json[topicName]);
      });
      const value = extractFrom(pool);
      let cards = generateCards(
        payload.gameSettings.playersCount,
        payload.gameSettings.spiesCount,
        payload.lang,
        value
      );

      cards = cards.map((e) => createCardElement(e));
      console.log(cards);

      cards.forEach((element) => {
        document.querySelector(".scene").appendChild(element);
      });
    });

  function createCardElement(content) {
    const card = document.createElement("div");
    const cardFaceFront = document.createElement("div");
    const cardFaceBack = document.createElement("div");
    const frontParag = document.createElement("p");
    const frontSmallParag = document.createElement("p");
    const backParag = document.createElement("p");

    card.classList.add("card");
    cardFaceFront.classList.add("card__face", "card__face--front");
    cardFaceBack.classList.add("card__face", "card__face--back");
    frontParag.innerText = localizedUi.title;
    frontParag.classList.add("title");
    frontSmallParag.innerText = localizedUi.tap;
    frontSmallParag.classList.add("small_text");
    backParag.innerText = content;
    backParag.classList.add("title");

    cardFaceFront.appendChild(frontParag);
    cardFaceFront.appendChild(frontSmallParag);
    cardFaceBack.appendChild(backParag);
    card.appendChild(cardFaceFront);
    card.appendChild(cardFaceBack);

    card.addEventListener("click", (event) => cardClicked(event));

    return card;
  }

  function cardClicked(event) {
    let card = event.target;
    while (!card.classList.contains("card")) {
      card = card.parentElement;
    }
    if (!card.dataset.isFlipped) {
      card.dataset.isFlipped = true;
      return;
    }

    card.dataset.isRemoved = true;
  }

  // <div class="card">
  //   <div class="card__face card__face--front">
  //     <p></p>
  //   </div>
  //   <div class="card__face card__face--back">
  //     <p>Back</p>
  //   </div>
  // </div>;

  function generateCards(player, spies, lang, value) {
    const cards = [];

    for (let i = 0; i < player - spies; i++) {
      cards.push(value);
    }

    for (let j = 0; j < spies; j++) {
      cards.push(localizedUi.spy);
    }
    shuffle(cards);
    return cards;
  }
});
function extractFrom(array) {
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

export const topics = {
  0: "geo",
  1: "loc",
  2: "nat",
  3: "anm",
  4: "job",
  5: "obj",
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
