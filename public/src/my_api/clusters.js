import { balloonClusterTemplateLayout } from "./balloons/index.js";
import { appendPlacemark } from "./placemarks.js";
import DB from "./storage.js";
import { getObjectDataFromDB } from "./utils.js";

export const newCluster = (ymaps, balloonTemplate) => {
  const cluster = new ymaps.Clusterer({
    preset: "islands#invertedBlueClusterIcons",
    clusterDisableClickZoom: true,
    clusterOpenBalloonOnClick: true,
    clusterBalloonPanelMaxMapArea: 0,
    clusterBalloonContentLayout: balloonTemplate,
  });
  return cluster;
};

export const appendCluster = (ymaps) => {
  const cluster = newCluster(ymaps, balloonClusterTemplateLayout(ymaps));

  cluster.events.add("click", (e) => {
    if (e.get("target").options._name === "cluster") {
      console.log("CLUSTER CLICK");
      //   const target = e.get("target");
      //   const childs = target.getGeoObjects();
      //   target.properties.set(
      //     "feedData",
      //     childs.map((mark) => mark.properties.get("feedData"))
      //   );
    }
  });

  // cluster.events.add("balloonclose", (e) => {
  //   const target = e.get("target");
  //   console.log("Ballon Clocse", target);
  //   const feedData = DB.read(target.geometry.getCoordinates());
  //   target.properties.set("feedData", feedData);
  // });
  return cluster;
};
