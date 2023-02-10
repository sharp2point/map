export const balloonTemplate = `<form id="feed_form" class="dialog">      
                                <div class="dialog-header"><h2>Отзыв:</h2></div>
                                <div class="dialog-form"><input name="name" class="dialog-text__name input-text" type="text" placeholder="Укажите ваше имя" />
                                <input name="place" class="dialog-text__place input-text" type="text" placeholder="Укажите место" />
                                <textarea name="feed" class="dialog-text__feed input-text" cols="40" rows="3" placeholder="Оставьте отзыв"></textarea>
                                <button type="button" class="dialog-submit">Добавить</button></div></form>`;

const feedTemplate = ` {% if properties.feedData.length > 0 %}
        <div class="dialog-feed">
        {% for item in properties.feedData %}
          <div class="dialog-feed__item item">
              <header><span class="item-name">{{ item.name }}</span><a class="item-place" href="#">#{{ item.place }}</a></header>
              <p class="item-feed">{{ item.feed }}</p>
          </div>
        {% endfor %}
        </div>
      {% endif %}`;
