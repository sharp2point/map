ymaps.ready(init);
let placemark;
function init() {
  var mapa = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10,
      controls: [],
    }),
    BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="dialog">
      <div class="dialog-header"><h2>Отзыв:</h2></div>
      <div class="dialog-form"><input class="dialog-text__name input-text" type="text" placeholder="Укажите ваше имя" />
      <input class="dialog-text__place input-text" type="text" placeholder="Укажите место" />
      <input class="dialog-text__feed input-text" type="textarea" placeholder="Оставьте отзыв" />
      <button class="dialog-submit" >Добавить</button></div></div>`,
      {
        build: function () {
          BalloonContentLayout.superclass.build.call(this);
          $(".dialog-submit").bind("click", this.onCounterClick);
        },
        clear: function () {
          $(".dialog-submit").unbind("click", this.onCounterClick);
          BalloonContentLayout.superclass.clear.call(this);
        },
        onCounterClick: function () {
          const name = $(".dialog-text__name");
          const place = name.next();
          const feed = place.next();
          placemark.balloon.close();
          alert(
            `Имя:${name[0].value} Место:${place[0].value} Отзыв:${feed[0].value}`
          );
        },
      }
    );

  mapa.events.add("click", (e) => {
    placemark = new ymaps.Placemark(
      e.get("coords"),
      {},
      {
        hintContent: "<div class='map'>ул. Гашека 9ф</div>",
        balloonContentLayout: BalloonContentLayout,
        balloonPanelMaxMapArea: 0,
      }
    );
    mapa.geoObjects.add(placemark);
    placemark.balloon.open();
  });
}
