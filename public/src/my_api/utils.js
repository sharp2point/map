import DB from "./storage.js";

export const setDataPlacemark = (obj, type) => {
  if (type > 1) {
    obj.options.set("preset", "islands#blueCircleIcon");
    obj.properties.set("iconContent", type);
  }
};
export const getObjectDataFromDB = (obj) => {
  return DB.read(obj.geometry.getCoordinates());
};
