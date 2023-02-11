function dataToFeed(data) {
  return { name: data.name, place: data.place, feed: data.feed };
}
function feelFeeds(source, feeds) {
  DB.selectByKey(source.geometry.getCoordinates().join(":")).forEach((feed) =>
    feeds.push(dataToFeed(feed))
  );
}
function formToFeed(form) {
  const data = new FormData(form);
  return {
    name: data.get("name"),
    place: data.get("place"),
    feed: data.get("feed"),
    key: coords.join(":"),
  };
}
