import { balloonClusterTemplateLayout } from "./balloons/index.js";
import DB from "./storage.js";

export const newCluster = (ymaps, balloonTemplate) => {
  return new ymaps.Clusterer({
    clusterDisableClickZoom: true,
    clusterOpenBalloonOnClick: true,
    clusterBalloonPanelMaxMapArea: 0,
    clusterBalloonContentLayout: balloonTemplate,
  });
};

export const appendCluster = (ymaps) => {
  const balloon = balloonClusterTemplateLayout(ymaps);
  const cluster = newCluster(ymaps, balloon);
  cluster.events.add("click", (e) => {
    // console.log("Cluster", e.get("target"));
    // console.log("Cluster obj", e.get("target").properties);
    console.log("CLUSTER CLICK");
  });
  return cluster;
};
