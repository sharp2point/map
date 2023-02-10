import { balloonPlacemarkTemplateLayout } from "./balloons/index.js";
import DB from "./storage.js";
import { setDataPlacemark, getObjectDataFromDB } from "./utils.js";

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
  placemark.events.add("click", (e) => {
    if (e.get("target").options._name === "geoObject") {
      console.log("PLACEMARK CLICK");
    }
  });
  // placemark.events.add("balloonclose", (e) => {
  //   const mark = e.get("target");
  //   if (mark.properties.get("feedData").length) {
  //     setDataPlacemark(mark, mark.properties.get("feedData").length);
  //   }
  // });
  return placemark;
};

export const restorePlacemark = (ymaps, cluster) => {
  const restoreData = DB.readAll();
  if (restoreData && restoreData.length) {
    restoreData.forEach((item) => {
      const mark = appendPlacemark(ymaps, item.coords, item);
      cluster.add(mark);
    });
  }
};
