<template>
<div>

    <section class="product">
      <div class="container">
        <q-breadcrumbs class="text-brown links">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>

      <q-breadcrumbs-el label="Главная"  />
      <q-breadcrumbs-el label="Каталог"  />
      <q-breadcrumbs-el label="Солнечные электростанции "  />
      <q-breadcrumbs-el label="на 2 кВт"  />
      <q-breadcrumbs-el label="Комплект однофазный, 2 кВт, Solax – Jinko Solar" />
      <q-breadcrumbs-el label="Оформление заявки" />
    </q-breadcrumbs>

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
                    <q-select class="cvadret-input selects  "  borderless v-model="selectType" :options="selectTypeOptions" label="Выберите тип" />

                   </div>


                </li>
                <li class="card-list-item">
                  <p class="input-text">Расстояние от места установки ВИЭ до счетчика (м)</p>
                  <div class="arrow-select">
                      <q-select class="cvadret-input selects  "  borderless v-model="distance" :options="distanceOptions" label="Введите растояние до счетчика (м)" />
                   </div>

                </li>
                <li class="card-list-item">
                  <p class="input-text">Материал несущих стен</p>
                  <div class="arrow-select">
                         <q-select class="cvadret-input selects  "  borderless v-model="material" :options="materialOptions" label="Выберите материал несущих стен" />
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Срок эксплуатации электропроводки</p>
                  <div class="arrow-select">
                        <q-select class="cvadret-input selects  "  borderless v-model="exploitation" :options="exploitationOptions" label="Выберите срок эксплуатации электропроводки" />
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Тип кровли</p>
                  <div class="arrow-select">
                       <q-select class="cvadret-input selects  "  borderless v-model="roofing" :options="roofingOptions" label="Выберите тип кровли" />
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Сечение электропроводов</p>
                  <div class="arrow-select">
                      <q-select class="cvadret-input selects  "  borderless v-model="wireSection" :options="wireSectionOptions" label="Выберите сечение провода" />
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Тип перекрытия</p>
                  <div class="arrow-select">
                       <q-select class="cvadret-input selects  "  borderless v-model="precritia" :options="precritiaOptions" label="Выберите тип прекрития" />
                   </div>
                </li>
                <li class="card-list-item">
                  <p class="input-text">Материал электропроводки</p>
                  <div class="arrow-select">

                      <q-select class="cvadret-input selects  "  borderless v-model="electricalWiring" :options="electricalWiringOptions" label="Выберите материал электропроводки" />
                   </div>
                </li>
                 <li class="card-list-item">
                  <p class="input-text">Тип крыши</p>
                  <div class="arrow-select">

                     <q-select class="cvadret-input selects  "  borderless v-model="roofs" :options="roofsOptions" label="Выберите тип крыши" />
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
                    <!-- <select class="cvadret-input select " id="city">
                      <option value="" class="placeholder" selected disabled>Выберите место установки</option>
                      <option value="1497.5">На земле</option>
                      <option value="1570.5">На крыше</option>
                    </select> -->
                       <q-select class="cvadret-input selects  "  borderless v-model="place" :options="placeOptions" label="Выберите тип крыши" />
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
<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n'
  let selectType = ref(null)
     let selectTypeOptions = [
        'Жилой дом', 'Дача', 'Коммерческое помещение'
      ]
       let distance = ref(null)
     let distanceOptions = [
        'до 5 м', 'от 5 до 10 м', 'свыше 15м'
      ]
      let material = ref(null)
     let materialOptions = [
        'Жженый кирпич', 'Шлакоблок', 'Кирпич-сырец'
      ]
   let exploitation = ref(null)
     let exploitationOptions = [
        'до 5 лет', 'от 5 до 10 лет', 'свыше 15лет'
      ]
   let roofing = ref(null)
     let roofingOptions = [
        'Профнастил', 'Черепица', 'Асбестовые листы (шифер)'
      ]
       let wireSection = ref(null)
     let wireSectionOptions = [
        '2 мм', '2-5 мм', '5-10 мм'
      ]
   let precritia = ref(null)
     let precritiaOptions = [
        'ЖБ плиты', 'Деревяные срубы', 'Металлические фермы'
      ]
      let electricalWiring = ref(null)
     let electricalWiringOptions = [
        'Медь', 'Алюминий'
      ]
      let roofs = ref(null)
     let roofsOptions = [
        'Плоская', 'Наклонная'
      ]
     let place = ref(null)
     let placeOptions = [
        'На земле', 'На крыше'
      ]




</script>
