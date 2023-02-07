export const ballonTemplate = `<div class="dialog">
        {% if properties.feedData.length > 0 %}
          <div class="dialog-feed">
          {% for item in properties.feedData %}
            <div class="dialog-feed__item item">
                <header><span class="item-name">{{ item.name }}</span><a class="item-place" href="#">#{{ item.place }}</a></header>
                <p class="item-feed">{{ item.feed }}</p>
            </div>
          {% endfor %}
          </div>
        {% endif %}
        
        <div class="dialog-header"><h2>Отзыв:</h2></div>
        <div class="dialog-form"><input class="dialog-text__name input-text" type="text" placeholder="Укажите ваше имя" />
        <input class="dialog-text__place input-text" type="text" placeholder="Укажите место" />
        <input class="dialog-text__feed input-text" type="textarea" placeholder="Оставьте отзыв" />
        <button class="dialog-submit" >Добавить</button></div></div>`;
