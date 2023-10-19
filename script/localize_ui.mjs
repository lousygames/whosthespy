let ui;

async function init() {
  await fetch("assets/localization/ui.json")
    .then((response) => response.json())
    .then((_ui) => (ui = _ui));
}

export async function localizeUI(lang) {
  if(!ui){
    await init();
  }

  const content = ui[lang];

  document.querySelector("#title").innerHTML = content.title;
  document.querySelector("#number_of_players").innerHTML = content.players;
  document.querySelector("#number_of_spies").innerHTML = content.spies;
  document.querySelector("#adv_settings").innerHTML = content["adv_settings"];
  document.querySelector("#play_now").innerHTML = content["play_now"];

  composeOptions(content["options"], content.topic);
}

function composeOptions(options, topics) {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.innerHTML = topics;

  fieldset.appendChild(legend);
  options.forEach((opt, index) => {
    const div = document.createElement("div");

    const input = document.createElement("input");
    input.name = opt;
    input.id = opt.toLowerCase();
    input.type = "checkbox";
    input.value = index;

    const label = document.createElement("label");
    label.innerText = opt;
    label.setAttribute("for", opt.toLowerCase());

    div.appendChild(input);
    div.appendChild(label);

    fieldset.appendChild(div);
  });

  document.querySelector("#options").innerHTML = "";
  document.querySelector("#options").appendChild(fieldset);
}
