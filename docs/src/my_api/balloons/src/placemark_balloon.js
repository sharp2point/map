import DB from "../../storage.js";
import { ballonTemplate } from "./template.js";

export const balloonPlacemarkTemplateLayout = (ymaps) => {
  let balloon = null;
  let coords = null;
  const template = ymaps.templateLayoutFactory.createClass(ballonTemplate, {
    build: function () {
      template.superclass.build.call(this);
      coords = this.getData().geoObject.geometry._coordinates;
      balloon = this.getData().geoObject.balloon;
      $(".dialog-submit").bind("click", this.onClickSubmitButtonHandler);
    },
    clear: function () {
      $(".dialog-submit").unbind("click", this.onClickSubmitButtonHandler);
      template.superclass.clear.call(this);
      balloon = null;
      coords = null;
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
  });

  return template;
};
