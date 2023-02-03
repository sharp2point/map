let mapa;
ymaps.ready(init);
function init() {
  mapa = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 10,
    controls: [],
  });
  mapa.events.add("click", (e) => {
    const placemark = new ymaps.Placemark(e.get("coords"), {
      hintContent: "<div> class='map'>ул. Гашека 9ф</div>",
      balloonContent: `<div class="dialog">
        <div class="dialog-header"><h2>Отзыв:</h2></div>
        <div class="dialog-form"><input class="dialog-text__name input-text" type="text" placeholder="Укажите ваше имя" />
        <input class="dialog-text__place input-text" type="text" placeholder="Укажите место" />
        <input class="dialog-text__feed input-text" type="textarea" placeholder="Оставьте отзыв" />
      <button class="dialog-submit" onClick="(function(){
        console.log('Close');
      })()">Добавить</button></div></div>`,
      balloonPanelMaxMapArea: 0,
    });
    mapa.geoObjects.add(placemark);
    placemark.balloon.open();
  });
}
