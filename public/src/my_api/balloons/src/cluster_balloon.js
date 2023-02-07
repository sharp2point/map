import DB from "../../storage.js";

export const balloonClusterTemplateLayout = (ymaps) => {
  let balloon = null;
  const template = ymaps.templateLayoutFactory.createClass(
    `<div class="dialog">
        {% if properties.feedData %}
          <div class="dialog-feed">
          <ul>
          {% for i in properties.feedData %}
            <li>{{ i.name }} [{{ i.place }}]</li>
            <li>{{ i.feed }}</li>
          {% endfor %}
          </ul>
          </div>
        {% endif %}
        
        <div class="dialog-header"><h2>Отзыв:</h2></div>
        <div class="dialog-form"><input class="dialog-text__name input-text" type="text" placeholder="Укажите ваше имя" />
        <input class="dialog-text__place input-text" type="text" placeholder="Укажите место" />
        <input class="dialog-text__feed input-text" type="textarea" placeholder="Оставьте отзыв" />
        <button class="dialog-submit" >Добавить</button></div></div>`,
    {
      build: function () {
        template.superclass.build.call(this);
        balloon = this.getData().geometry._map.balloon;
        $(".dialog-submit").bind("click", this.onClickSubmitButtonHandler);
      },
      clear: function () {
        $(".dialog-submit").unbind("click", this.onClickSubmitButtonHandler);
        template.superclass.clear.call(this);
        balloon = null;
      },
      onClickSubmitButtonHandler: (e) => {
        const name = $(".dialog-text__name");
        const place = name.next();
        const feed = place.next();
        if (
          name[0].value.trim().length &&
          place[0].value.trim().length &&
          feed[0].value.trim().length
        ) {
          DB.create({
            name: name[0].value,
            place: place[0].value,
            feed: feed[0].value,
            coords: coords,
          });
        }
        balloon.close();
      },
    }
  );

  return template;
};
