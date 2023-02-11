const balloonTemplateConstructor = (data) => {
  let feeds = "";

  data
    ? (feeds = `<div class="dialog-feed">${data
        .map((feed) => {
          return `<div class="dialog-feed__item item">
              <header><span class="item-name">${feed.name}</span><a class="item-place" href="#">#${feed.place}</a></header>
              <p class="item-feed">${feed.feed}</p>
          </div>`;
        })
        .join("")}</div>`)
    : "";
  console.log("Template", feeds);
  return `<form id="feed_form" class="dialog">${feeds ? feeds : ""}      
    <div class="dialog-header"><h2>Отзыв:</h2></div>
    <div class="dialog-form"><input name="name" class="dialog-text__name input-text" type="text" placeholder="Укажите ваше имя" />
    <input name="place" class="dialog-text__place input-text" type="text" placeholder="Укажите место" />
    <textarea name="feed" class="dialog-text__feed input-text" cols="40" rows="3" placeholder="Оставьте отзыв"></textarea>
    <button type="button" onclick="formSendHandler()" class="dialog-submit">Добавить</button></div></form>`;
};
