import { shuffle, extractRandomElementFrom } from "./array-utils.mjs";
import { initializeDom } from "./dom-utils.mjs";
import notLocalizedUi from "../assets/localization/ui.json";

const topics = {
  0: "geo",
  1: "loc",
  2: "nat",
  3: "anm",
  4: "job",
  5: "obj",
};

const main = async () => {
  //If app is not initialized go back to home
  const payload = JSON.parse(localStorage.getItem("payload"));
  if (
    !payload ||
    !payload?.gameSettings.playersCount ||
    !payload?.gameSettings.spiesCount ||
    !payload?.gameSettings.topics ||
    !payload?.lang
  ) {
    window.location.href = "/index.html";
  }

  const ui = notLocalizedUi[payload.lang];

  const words = await fetch(
    `assets/localization/assets.${payload.lang}.json`,
  ).then((response) => response.json());
  let pool = [];

  payload.gameSettings.topics.forEach((element) => {
    const topicName = topics[element];
    pool = pool.concat(...words[topicName]);
  });
  const value = extractRandomElementFrom(pool);
  let cards = generateCards(
    payload.gameSettings.playersCount,
    payload.gameSettings.spiesCount,
    value,
    ui.spy,
  );

  initializeDom(ui, payload, cards);
};

function generateCards(players, spies, value, spy) {
  const cards = [];

  for (let i = 0; i < players - spies; i++) {
    cards.push(value);
  }

  for (let j = 0; j < spies; j++) {
    cards.push(spy);
  }
  shuffle(cards);
  return cards;
}

window.onload = main;
