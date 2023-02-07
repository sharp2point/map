import { balloonPlacemarkTemplateLayout } from "./balloons/index.js";
import DB from "./storage.js";

export const newPlacemark = (ymaps, position, data, balloonTemplate) => {
  return new ymaps.Placemark(
    position,
    {
      /*-props-*/
      feedData: data,
      balloonContentHeader: "Plaxce",
    },
    {
      hintContent: "Заголовок метки №",

      balloonContentLayout: balloonTemplate,
    }
  );
};

export const appendPlacemark = (ymaps, position, data = {}) => {
  const placemark = newPlacemark(
    ymaps,
    position,
    data,
    balloonPlacemarkTemplateLayout(ymaps)
  );

  placemark.events.add("click", (e) => {
    console.log("PM CLICK");
    const mark = e.get("target");
    const feedData = DB.read(mark.geometry.getCoordinates());
    mark.properties.set("balloonContentHeader", "Place");
    mark.properties.set("feedData", feedData);
  });
  return placemark;
};

export const restorePlacemark = (ymaps, clusterer) => {
  const restoreData = DB.readAll();
  if (restoreData && restoreData.length) {
    restoreData.forEach((item) => {
      const mark = appendPlacemark(ymaps, item.coords, item);
      clusterer.add(mark);
    });
  }
};
