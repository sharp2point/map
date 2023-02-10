export { balloonTemplate } from "./template.js";
export * as DB from "./storage.js";

export const getFeedback = (coords) => {
  const myForm = document.forms[0];
  const formData = new FormData(myForm);
  const name = formData.get("name");
  const place = formData.get("place");
  const feed = formData.get("feed");
  const data = { name: name, place: place, feed: feed };
  const key = coords.join(";");
  console.log(data, key);
};
