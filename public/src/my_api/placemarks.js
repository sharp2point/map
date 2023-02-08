import { balloonPlacemarkTemplateLayout } from "./balloons/index.js";
import DB from "./storage.js";

export const newPlacemark = (ymaps, position, data = [], balloonTemplate) => {
  return new ymaps.Placemark(
    position,
    {
      feedData: data,
    },
    {
      balloonContentLayout: balloonTemplate,
    }
  );
};

export const appendPlacemark = (ymaps, position, data = []) => {
  const placemark = newPlacemark(
    ymaps,
    position,
    data,
    balloonPlacemarkTemplateLayout(ymaps)
  );
  placemark.events.add("balloonclose", (e) => {
    console.log("placemark balloonclose");
    console.log(e.get("target"));
    // const mark = e.get("target");
    // const feedData = DB.read(mark.geometry.getCoordinates());
    // mark.properties.set("balloonContentHeader", "Place");
    // mark.properties.set("feedData", feedData);
  });
  placemark.events.add("click", (e) => {
    if (e.get("target").options._name === "geoObject") {
      console.log("PLACEMARK CLICK");
      // console.log(e.get("target"));
      //     console.log("PLACEMARK", e.get("map"));
      //     const mark = e.get("target");
      //     const feedData = DB.read(mark.geometry.getCoordinates());
      //     mark.properties.set("balloonContentHeader", "Place");
      //     mark.properties.set("feedData", feedData);
    }
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
