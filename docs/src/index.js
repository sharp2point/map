import { dialogOpen } from "./dialog.js";
let mapa;
ymaps.ready(init);
function init() {
  mapa = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 10,
    controls: [],
  });
  mapa.events.add("click", (e) => {
    mapa.panTo(e.get("coords"), {
      flying: true,
    });
    dialogOpen(e.get("position"));
  });
}
