export function initializeDom(ui, payload, cards) {
  const gameOn = document.createElement("h1");
  gameOn.innerText = ui.play;
  document.querySelector(".scene").appendChild(gameOn);

  document.querySelector(".counter_label").innerText = ui.player;
  document.querySelector(".counter").classList.remove("complete");
  document.querySelector(
    ".counter_ratio",
  ).innerText = `1/${payload.gameSettings.playersCount}`;
  document.querySelector(".counter").classList.add("hydrated");

  cards = cards.map((e) => createCardElement(e, ui));
  cards.forEach((element) => {
    document.querySelector(".scene").appendChild(element)
    ;
  });
}

function createCardElement(content, localizedUi) {
  //Prepare card front
  const cardFaceFront = document.createElement("div");
  cardFaceFront.classList.add("card__face", "card__face--front");

  const cardFrontParag = document.createElement("p");
  cardFrontParag.innerText = localizedUi.title;
  cardFrontParag.classList.add("title");

  const cardFrontParagSmall = document.createElement("p");
  cardFrontParagSmall.innerText = localizedUi.tap;
  cardFrontParagSmall.classList.add("small_text");

  cardFaceFront.appendChild(cardFrontParag);
  cardFaceFront.appendChild(cardFrontParagSmall);

  //Prepare card back
  const cardFaceBack = document.createElement("div");
  cardFaceBack.classList.add("card__face", "card__face--back");

  const cardBackParag = document.createElement("p");
  cardBackParag.innerText = content;
  cardBackParag.classList.add("title");

  const cardBackParagSmall = document.createElement("p");
  cardBackParagSmall.innerText = localizedUi.nextPlayer;
  cardBackParagSmall.classList.add("small_text");

  cardFaceBack.appendChild(cardBackParag);
  cardFaceBack.appendChild(cardBackParagSmall);

  //Prepare card
  const card = document.createElement("div");
  card.classList.add("card");

  card.appendChild(cardFaceFront);
  card.appendChild(cardFaceBack);

  //Click listener
  card.addEventListener("click", (event) => cardClicked(event));

  //Disable click while animation runs
  card.addEventListener(
    "transitionstart",
    () => (card.dataset.isRunningTransition = true),
  );

  //Enable click after animation is completed and remove previous card from dom
  card.addEventListener("transitionend", (event) => {
    const c = event.target;
    delete c.dataset.isRunningTransition;
    if (c.dataset.isRemoved) {
      c.parentElement.removeChild(c);
    }
  });

  return card;
}

function cardClicked(event) {
  //Find outer card div
  let card = event.target;
  while (!card.classList.contains("card")) {
    card = card.parentElement;
  }

  //If animation is running don't do anything
  if (card.dataset.isRunningTransition) {
    return;
  }

  //If card is yet to be flipped, flip it
  if (!card.dataset.isFlipped) {
    card.dataset.isFlipped = true;
    return;
  }

  //Otherwise update players count, and remove current card
  const count = JSON.parse(localStorage.getItem("payload")).gameSettings
    .playersCount;
  const remainingCards =
    Array.from(document.querySelectorAll(".card")).length - 1;

  if (count - remainingCards + 1 <= count) {
    document.querySelector(".counter_ratio").innerText = `${
      count - remainingCards + 1
    }/${count}`;
  } else {
    //If there's no more cards to draw, remove the counter
    document.querySelector(".counter").classList.add("complete");
  }
  card.dataset.isRemoved = true;
}
