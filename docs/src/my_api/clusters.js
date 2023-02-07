import { balloonClusterTemplateLayout } from "./balloons/index.js";
import DB from "./storage.js";

export const newCluster = (ymaps, balloonTemplate) => {
  return new ymaps.Clusterer({
    clusterDisableClickZoom: true,
    clusterOpenBalloonOnClick: true,
    clusterBalloonPanelMaxMapArea: 0,
    // clusterGroupByCoordinates: true,
    clusterBalloonContentLayout: balloonTemplate,
  });
};

export const appendCluster = (ymaps) => {
  const cluster = newCluster(ymaps, balloonClusterTemplateLayout(ymaps));

  cluster.events.add("click", (e) => {
    if (e.get("target").options._name === "cluster") {
      const cluster = e.get("target");
      const child = cluster.getGeoObjects();
      const feedDatas = child.map((item) => item.properties._data.feedData);
      cluster.properties.set("feedData", feedDatas);
    }
  });
  cluster.events.add("propertieschange", (e) => {
    console.log("CLUSTER propertieschange");
  });
  cluster.events.add("balloonopen", (e) => {
    console.log("CLUSTER balloonopen");
  });
  cluster.events.add("balloonclose", (e) => {
    console.log("CLUSTER balloonclose");
  });
  return cluster;
};
