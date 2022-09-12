<template>
<div>

    <section class="product">
      <div class="container">
        <p class="links">Главная  >
          Каталог  >
          Солнечные электростанции  >
          на 2 кВт  >
          Комплект однофазный, 2 кВт, Solax – Jinko Solar >
          <span>Оформление заявки</span></p>
          <div class="product-inner">
            <div class="product-wrappers">
              <form class="form" action="https://echo.htmlacademy.ru/courses" method="post" autocomplete="off">
                <h2 class="product-name">Оформление заявки</h2>
              <ul class="card-list">
                <li class="card-list-item">
                  <p class="input-text  ">Фио</p>
                  <input class="cvadret-input" type="text" placeholder="Введите фамилию имя отчество "  required>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Телефонный номер</p>
                  <input class="cvadret-input" type="number" placeholder="Введите телефонный номер" required>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Полезная к установке ВИЭ площадь крыши (кв.м)</p>
                  <input class="cvadret-input" type="number"  placeholder="Введите полезную площадь крыши кв.м" required>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Тип строения</p>
                   <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите тип строения</option>
                      <option value="1497.5">Жилой дом</option>
                      <option value="1570.5">Дача</option>
                      <option value="1461">Коммерческое помещение</option>

                    </select>
                   </div>


                </li>
                <li class="card-list-item">
                  <p class="input-text">Расстояние от места установки ВИЭ до счетчика (м)</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Введите растояние до счетчика (м)</option>
                      <option value="1497.5">до 5 м</option>
                      <option value="1570.5">от 5 до 10 м</option>
                      <option value="1461">свыше 15м </option>

                    </select>
                   </div>

                </li>
                <li class="card-list-item">
                  <p class="input-text">Материал несущих стен</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите материал несущих стен</option>
                      <option value="1497.5">Жженый кирпич</option>
                      <option value="1570.5">Шлакоблок</option>
                      <option value="1461">Кирпич-сырец</option>

                    </select>
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Срок эксплуатации электропроводки</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите срок эксплуатации электропроводки</option>
                      <option value="1497.5">до 5 лет</option>
                      <option value="1570.5">от 5 до 10 лет</option>
                      <option value="1461">свыше 15лет</option>

                    </select>
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Тип кровли</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите тип кровли</option>
                      <option value="1497.5">Профнастил</option>
                      <option value="1570.5">Черепица</option>
                      <option value="1461">Асбестовые листы (шифер)</option>

                    </select>
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Сечение электропроводов</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите сечение провода</option>
                      <option value="1497.5">2 мм</option>
                      <option value="1570.5">2-5 мм</option>
                      <option value="1461">5-10 мм</option>
                    </select>
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Тип перекрытия</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите тип прекрития</option>
                      <option value="1497.5">ЖБ плиты</option>
                      <option value="1570.5">Деревяные срубы</option>
                      <option value="1461">Металлические фермы</option>
                    </select>
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Материал электропроводки</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите материал электропроводки</option>
                      <option value="1497.5">Медь</option>
                      <option value="1570.5">Алюминий</option>
                    </select>
                   </div>
                </li>
                 <li class="card-list-item">
                  <p class="input-text">Тип крыши</p>
                  <div class="arrow-select">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите тип крыши</option>
                      <option value="1497.5">Плоская</option>
                      <option value="1570.5">Наклонная</option>
                    </select>
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Площадь помещения
                  </p>
                  <input class="cvadret-input" type="number" placeholder="Введите площадь помещения в кв.м" required>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Место установки ВИЭ</p>
                  <div class="arrow-select ">
                    <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите место установки</option>
                      <option value="1497.5">На земле</option>
                      <option value="1570.5">На крыше</option>
                    </select>
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Расстояние до ближайшей опоры электропередачи</p>
                  <input class="cvadret-input" type="number" placeholder="Введите расстояние (м)"  required>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Адрес установки </p>
                  <input class="cvadret-input" type="text" placeholder="Выберите область"  required>
                </li>
                <li class="card-list-item">
                  <p class="input-text input-text--active "> Адрес установки</p>
                  <input class="cvadret-input" type="text" placeholder="Введите адрес"  required>
                </li>
              </ul>
              <p class="input-text">Добавьте фотографию места установки
              </p>
              <div class="foto-box">
                <input class="foto" type="text">
                <input class="foto" type="text">
                <input class="foto" type="text">
                <input class="foto" type="text">
                <input class="foto" type="text">
              </div>
              <p class="input-text">Комментарии
              </p>
              <textarea class="textarea"></textarea>

              <div class="btn-group">
                <button class="btn-close" type="reset">Отмена</button>
                <button class="btn-push" type="submit">Отправить</button>
              </div>
              </form>
            </div>
            <div class="product-sum tavar tavar-active">
             <ul class="product-list">
            <li class="product-list-item">
              <a href="#/product" class="product-list-link">
                <div class="card">
                  <button class="btn-hart">
                    <img src="/images/icon-heart.svg" alt="hart">
                  </button>
                  <img src="/images/product-ponel-image.png" alt="product-ponel">
                  <div class="likes">
                    <ul class="likes-list">
                      <li class="likes-list-item">
                        <a href="#" class="likes-list-link"></a>
                      </li>
                      <li class="likes-list-item">
                        <a href="#" class="likes-list-link"></a>
                      </li>
                      <li class="likes-list-item">
                        <a href="#" class="likes-list-link"></a>
                      </li>
                      <li class="likes-list-item">
                        <a href="#" class="likes-list-link"></a>
                      </li>
                      <li class="likes-list-item">
                        <a href="#" class="likes-list-link"></a>
                      </li>
                    </ul>
                    <span>4.6</span>
                  </div>
                  <h3 class="model-title">Солнечный модуль OS-30P</h3>
                  <span class="model-number">One-sun</span>
                  <p class="summa">1 554 000 сум</p>
                  <span class="summa-supsidy">Цена с компенсация:</span>
                  <p class="summa-blok">1 554 000 сум</p>
                  <span class="summa-rasrochki">Цена в рассрочку:</span>
                  <div class="summa-group">
                    <p class="summa-number">222 000 сум</p>
                    <span class="mons">x 36 мес</span>
                  </div>
                </div>
              </a>
            </li>

          </ul>
            </div>
          </div>
        </div>
      </section>
</div>

</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

   setup () {
 return {

  }

   }


})
</script>
