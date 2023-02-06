import { balloonTemplateLayout } from "./balloons.js";
import { newPlacemark } from "./placemarks.js";
import DB from "./storage.js";

export const appendPlacemark = (ymaps, position) => {
  const balloonTemplate = balloonTemplateLayout(ymaps);
  const placemark = newPlacemark(ymaps, position, balloonTemplate);
  //   const balloon = placemark.balloon;
  //   //   balloon.events.add("click", (e) => {
  //   //     const balloon = e.originalEvent.target.balloon;
  //   //     console.log("Ballon Click");
  //   //     //balloon.close();
  //   //   });

  placemark.events.add("click", (e) => {
    console.log(placemark.geometry._coordinates);
    const result = JSON.parse(
      DB.read(placemark.geometry._coordinates.join(";")).key
    );

    console.log("RESULT:", result);
  });
  return placemark;
};
