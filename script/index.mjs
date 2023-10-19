import { localizeUI } from "./localize_ui.mjs";

window.addEventListener("load", async () => {
  const langSelector = document.querySelector("#lang_selector");
  langSelector.addEventListener("input", async (event) => {
    await localizeUI(event.target.value);
    localStorage.setItem("lang", event.target.value);
    loadTopics();
  });

  const topicSelector = document.querySelector("#options");
  topicSelector.addEventListener("input", () => {
    const topics = Array.from(
      document.querySelector("#options").querySelectorAll(":checked")
    ).map((e) => e.value);

    localStorage.setItem("topics", JSON.stringify(topics));
  });

  const defLang = localStorage.getItem("lang");

  window.formSubmit = formSubmitted;

  await localizeUI(defLang || "en");
  document.querySelector("#" + (defLang || "en")).checked = true;

  loadTopics();
});

function loadTopics() {
  let lastPlayed = JSON.parse(localStorage.getItem("topics"));

  if (!lastPlayed) {
    lastPlayed = [0, 1];
    localStorage.setItem("topics", JSON.stringify([0, 1]));
  }
  lastPlayed = lastPlayed.map((e) => parseInt(e));
  const topics = Array.from(
    document.querySelector("#options").querySelectorAll("input")
  );
  topics.forEach((element, index) => {
    if (lastPlayed.includes(index)) {
      element.checked = true;
    }
  });
}

function formSubmitted(form) {
  const topics = Array.from(
    document.querySelector("#options").querySelectorAll(":checked")
  ).map((e) => e.value);
  const payload = {
    lang: document.querySelector("#lang_selector").querySelector(":checked")
      .value,
    gameSettings: {
      playersCount: parseInt(form["players_count"].value),
      spiesCount: parseInt(form["spy_count"].value),
      topics,
    },
  };
  localStorage.setItem("payload", JSON.stringify(payload));
  window.location.href = "play.html";
}
