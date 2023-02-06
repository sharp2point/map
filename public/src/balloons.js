import DB from "./storage.js";

export const balloonTemplateLayout = (ymaps) => {
  let balloon = null;
  let coords = null;
  const ballonTemplateLayout = ymaps.templateLayoutFactory.createClass(
    `<div class="dialog">
      <div class="dialog-header"><h2>Отзыв:{{ properties.id }}</h2></div>
      <div class="dialog-form"><input class="dialog-text__name input-text" type="text" placeholder="Укажите ваше имя" />
      <input class="dialog-text__place input-text" type="text" placeholder="Укажите место" />
      <input class="dialog-text__feed input-text" type="textarea" placeholder="Оставьте отзыв" />
      <button class="dialog-submit" >Добавить</button></div></div>`,
    {
      build: function () {
        ballonTemplateLayout.superclass.build.call(this);
        coords = this.getData().geoObject.geometry._coordinates;
        balloon = this.getData().geoObject.balloon;
        $(".dialog-submit").bind("click", this.onClickSubmitButtonHandler);
      },
      clear: function () {
        $(".dialog-submit").unbind("click", this.onClickSubmitButtonHandler);
        ballonTemplateLayout.superclass.clear.call(this);
        balloon = null;
        coords = null;
      },
      onClickSubmitButtonHandler: (e) => {
        const name = $(".dialog-text__name");
        const place = name.next();
        const feed = place.next();
        console.log(
          "Result: ",
          name[0].value,
          place[0].value,
          feed[0].value,
          coords
        );
        DB.create({
          key: coords.join(";"),
          data: {
            name: name[0].value,
            place: place[0].value,
            feed: feed[0].value,
            coords: coords,
          },
        });
        balloon.close();
      },
    }
  );

  return ballonTemplateLayout;
};
