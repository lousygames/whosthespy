import ui from "../assets/localization/ui.json" assert { type: "json" };

export function localizeUI(lang) {
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
  options.forEach((opt) => {
    const div = document.createElement("div");

    const input = document.createElement("input");
    input.name = opt;
    input.id = opt.toLowerCase();
    input.type = "checkbox";

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

{
  /* <fieldset>
  <legend>Choose your monster's features:</legend>

  <div>
    <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">Scales</label>
  </div>

  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Horns</label>
  </div>
</fieldset>; */
}
