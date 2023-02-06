export const newPlacemark = (ymaps, position, balloonTemplate) => {
  return new ymaps.Placemark(
    position,
    {
      /*-props-*/
      id: "Marker",
    },
    {
      hintContent: "Marker",
      balloonContentLayout: balloonTemplate,
    }
  );
};
