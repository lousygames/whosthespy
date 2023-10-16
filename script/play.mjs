window.addEventListener("load", () => {
  const payload = JSON.parse(localStorage.getItem("payload"));
  let pool = [];

  fetch(`../assets/localization/assets.${payload.lang}.json`)
    .then((response) => response.json())
    .then((json) => {
      payload.gameSettings.topics.forEach((element) => {
        const topicName = topics[element];
        pool = pool.concat(...json[topicName]);
      });
    });
});

function extractFrom(array) {
    //const coolDownWords = JSON.parse()
}

export const topics = {
  0: "geo",
  1: "loc",
  2: "nat",
  3: "anm",
  4: "job",
  5: "obj",
};
