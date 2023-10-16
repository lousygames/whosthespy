import { localizeUI } from "./localize_ui.mjs";

window.addEventListener("load", () => {
  const langSelector = document.querySelector("#lang_selector");
  langSelector.addEventListener("input", (event) => {
    localizeUI(event.target.value);
    localStorage.setItem("lang", event.target.value);
  });

  const defLang = localStorage.getItem("lang");

  localizeUI(defLang || "en");
  document.querySelector("#" + (defLang || "en")).checked = true;
});
