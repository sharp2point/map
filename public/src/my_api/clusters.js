import { balloonClusterTemplateLayout } from "./balloons/index.js";
import { appendPlacemark } from "./placemarks.js";
import DB from "./storage.js";

export const newCluster = (ymaps, balloonTemplate) => {
  return new ymaps.Clusterer({
    preset: "islands#invertedVioletClusterIcons",
    clusterDisableClickZoom: true,
    clusterOpenBalloonOnClick: true,
    clusterBalloonPanelMaxMapArea: 0,
    clusterBalloonContentLayout: balloonTemplate,
  });
};

export const appendCluster = (ymaps) => {
  const cluster = newCluster(ymaps, balloonClusterTemplateLayout(ymaps));

  cluster.events.add("click", (e) => {
    if (e.get("target").options._name === "cluster") {
      console.log("CLUSTER CLICK");
      // const target = e.get("target");
      // const child = target.getGeoObjects();
      // if (child.length > 1) {
      //   target.options.set("preset", "islands#invertedPinkClusterIcons");
      // }
      // child.forEach((e) => {
      //   console.log(e);
      // });
    }
  });
  cluster.events.add("balloonclose", (e) => {
    console.log("CLUSTER balloonclose");
    // const target = e.get("target");
    // const feedData = DB.read(target.geometry.getCoordinates());
    // target.properties.set("feedData", feedData);
  });
  return cluster;
};
