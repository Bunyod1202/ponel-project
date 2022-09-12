<template>
 <div>
    <section class="product">
      <div class="container">
        <p class="links">Главная  >
          Каталог  >
          Солнечные электростанции  >
          на 2 кВт  >
          <span>Комплект однофазный, 2 кВт, Solax – Jinko Solar</span></p>
          <div class="product-inner">
            <div class="product-wrapper">
              <h2 class="product-name">Комплект однофазный, 2 кВт, Solax – Jinko Solar</h2>
              <div class="function">
                <img src="/images/image.png" alt="">
                <ul class="list">
                  <li class="list-item">
                    <p>Максимальная мощность	</p> <span>1000 Вт</span>
                  </li>
                  <li class="list-item">
                    <p>Максимальная выработка	</p> <span>до 1 кВт*ч / сутки</span>
                  </li>
                  <li class="list-item">
                    <p>Выходное напряжение</p> <span>220 Вольт</span>
                  </li>
                  <li class="list-item">
                    <p>Общая емкость аккумулятора</p> <span>1 x 75Ач</span>
                  </li>
                  <li class="list-item">
                    <p>Тип АКБ	</p>
                    <span>AGM, не обслуживаемый</span>
                  </li>
                  <li class="list-item">
                    <p>Срок службы АКБ	</p>
                    <span>8 лет</span>
                  </li>
                  <li class="list-item">
                    <p>Общая мощность солнечных батарей	</p>
                    <span>1 x 170 Вт</span>
                  </li>
                  <li class="list-item">
                    <p>Тип солнечных батарей	</p> <span>монокристаллический</span>
                  </li>
                  <li class="list-item">
                    <p>Срок службы солнечных батарей</p>
                    <span>не менее 20 лет</span>
                  </li>
                  <li class="list-item">
                    <p>Общий вес оборудования	</p> <span>55 кг</span>
                  </li>
                  <li class="list-item">
                    <p>Гарантия</p>
                    <span>1 год</span>
                  </li>
                  <li class="list-item">
                    <button class="btn-sum" type="button">Есть в наличии</button>
                  </li>
                </ul>
              </div>
              <div class="characteristics">
                <ul class="list-description">
                  <li class="list-description-item " :class="{ listdescriptionitemactive: category } ">
                    <button type="button" @click="categorys()" class="list-description-link">Характеристики</button>
                  </li>
                  <li class="list-description-item" :class="{ listdescriptionitemactive:descriptions}">
                    <button type="button"  @click="descriptionss()"  class="list-description-link">Описание</button>
                  </li>
                  <li class="list-description-item"  :class="{ listdescriptionitemactive:review}">
                    <button type="button" @click="reviews()"  class="list-description-link">Отзывы</button>
                  </li>
                </ul>
                <div class="content  content-one" :class="{ contentactive:category}" id="content-one">
                  <div class="description">
                    <p class="general">Общие</p>
                    <ul class="list">
                      <li class="list-item">
                        <p>Максимальная мощность	</p> <span>1000 Вт</span>
                      </li>
                      <li class="list-item">
                        <p>Максимальная выработка	</p> <span>до 1 кВт*ч / сутки</span>
                      </li>
                      <li class="list-item">
                        <p>Выходное напряжение</p> <span>220 Вольт</span>
                      </li>
                      <li class="list-item">
                        <p>Общая емкость аккумулятора</p> <span>1 x 75Ач</span>
                      </li>
                      <li class="list-item">
                        <p>Тип АКБ	</p>
                        <span>AGM, не обслуживаемый</span>
                      </li>
                      <li class="list-item">
                        <p>Срок службы АКБ	</p>
                        <span>8 лет</span>
                      </li>
                      <li class="list-item">
                        <p>Общая мощность солнечных батарей	</p>
                        <span>1 x 170 Вт</span>
                      </li>
                      <li class="list-item">
                        <p>Тип солнечных батарей	</p> <span>монокристаллический</span>
                      </li>
                      <li class="list-item">
                        <p>Срок службы солнечных батарей</p>
                        <span>не менее 20 лет</span>
                      </li>
                      <li class="list-item">
                        <p>Общий вес оборудования	</p> <span>55 кг</span>
                      </li>
                      <li class="list-item">
                        <p>Гарантия</p>
                        <span>1 год</span>
                      </li>

                    </ul>
                  </div>
                </div>
                <div class="content content-two" :class="{ contentactive:descriptions}" id="content-two">
                  <div class="description">
                    <p>Комплект оборудования сетевой солнечной электростанции на 2 кВт  однофазный, на базе инвертора Solax и солнечных модулей JinKO Solar.
                    </p>
                  <p>Данная солнечная электростанция способна обеспечить выработку до 12,63 кВт*ч за световой день.</p>
                  </div>
                </div>
                <div class="content content-three" :class="{ contentactive:review}" id="content-three">
                  <div class="description">
                 <div class="description-coment">
                  <ul class="coment-list">
                    <li class="coment-list-item">
                        <div class="coment-box">
                          <img src="/images/avatar.svg" alt="">
                          <div class="content-wrapper">
                            <p>Константин Константинопольский</p>
                            <span class="likes1-blok">
                                <div class="likes1">
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

                            </div>
                            <span>21 октября 2021</span>
                          </span>
                          </div>

                        </div>
                        <p class="text">
                          В последнее время мне не везло с покупкой телефона...долго... в этот раз я выбирала... но вспомнила ,,самсунг",который у меня с 2012 года работает,в интернет с него плохо заходить,он только для звонков... и решила-пусть будет опять-Samsung ! Заказала и оплатила,привезли на следующий день,очень довольна покупкой телефона , чехол нашла без проблем! Самсунг сделан в Индии,прост в работе,понятен,прекрасные фото получаются,очень удобно вставлять сим-карту,сделала режим ,от которого глаза отдыхают!

                        </p>
                        <ul class="img-list">
                          <li class="img-list-item">
                            <img src="/images/photo1.png" alt="">
                          </li>
                          <li class="img-list-item">
                            <img src="/images/photo2.png" alt="">
                          </li>
                          <li class="img-list-item">
                            <img src="/images/photo3.png" alt="">
                          </li>
                        </ul>
                        <div class="liks-group">
                          <div class="liks">
                            <img src="/images/likes.svg" alt="">
                            <span>56</span>
                          </div>
                          <div class="diz-liks">
                            <img src="/images/diz-like.svg" alt="">
                            <span>4</span>
                          </div>
                        </div>
                    </li>
                    <li class="coment-list-item">
                      <div class="coment-box">
                        <img src="/images/avatar-girl.svg" alt="photo">
                        <div class="content-wrapper">
                          <p>Bartholomew Cubbins</p>
                          <span class="likes1-blok">
                              <div class="likes1">
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

                          </div>
                          <span>21 октября 2021</span>
                        </span>
                        </div>

                      </div>
                      <p class="text">
                        С 2010 года пользуюсь только Андроид-телефонами, с 2014 – телефонами Самсунг (S5, S7, Note 9). Последний телефон – Note 20 Ultra – у меня год. За это время он основательно меня достал своим совсем не флагманским поведением. В основном по этой причине (а также посмотрев, что есть сейчас на рынке) решил попробовать в работе совершенно новую для меня платформу.
                        Сразу скажу, покупкой доволен. Жаба только периодически продолжает квакать из-за ценника. А так - Айфон закрыл все проблемные моменты, которые не устраивали меня в Note 20 Ultra, а также подарил радость исследователя, изучающего новую платформу, где все совсем по-другому
                      </p>

                      <div class="liks-group">
                        <div class="liks">
                          <img src="/images/likes.svg" alt="">
                          <span>56</span>
                        </div>
                        <div class="diz-liks">
                          <img src="/images/diz-like.svg" alt="">
                          <span>4</span>
                        </div>
                      </div>
                  </li>
                  <li class="coment-list-item">
                    <div class="coment-box">
                      <img src="/images/avatar-boy.png" alt="photo">
                      <div class="content-wrapper">
                        <p>Ваня Ванин</p>
                        <span class="likes1-blok">
                            <div class="likes1">
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

                        </div>
                        <span>21 октября 2021</span>
                      </span>
                      </div>

                    </div>
                    <p class="text">
                      Нормальный аппарат со спорным дизайном

                    </p>
                    <ul class="img-list">
                      <li class="img-list-item">
                        <img src="/images/photo4.png" alt="photo">
                      </li>
                      <li class="img-list-item">
                        <img src="/images/photo5.png" alt="photo">
                      </li>
                      <li class="img-list-item">
                        <img src="/images/photo6.png" alt="photo">
                      </li>
                      <li class="img-list-item">
                        <img src="/images/photo7.png" alt="photo">
                      </li>
                    </ul>
                    <div class="liks-group">
                      <div class="liks">
                        <img src="/images/likes.svg" alt="photo">
                        <span>56</span>
                      </div>
                      <div class="diz-liks">
                        <img src="/images/diz-like.svg" alt="photo">
                        <span>4</span>
                      </div>
                    </div>
                </li>
                   </ul>
                  <div class="reviews-box">
                    <div class="reviews">
                      <div class="reviews-number">
                        <p>4.6 <sub>/5</sub> </p>
                        <span>86 отзывов</span>
                      </div>
                    <div>
                      <div class="likes0">
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
                         <img src="/images/Group 1.svg" alt="">
                         <span>70</span>
                      </div>
                      <div class="likes1">
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

                          <img src="/images/Group 3.svg" alt="">
                        <span>8</span>
                      </div>
                      <div class="likes2">
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
                       <img src="/images/Group 2.svg" alt="">
                        <span>5</span>
                      </div>
                      <div class="likes3">
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
                        <img src="/images/Group 4.svg" alt="">
                        <span>2</span>
                      </div>
                      <div class="likes4">
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
                        <img src="/images/Group 5.svg" alt="">
                        <span>1</span>
                      </div>
                    </div>
                     </div>
                     <button class="btn-reviews">Оставить отзыв</button>
                  </div>
                 </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-sum">
              <div class="sum-card">
                <h3 class="sum-title">Купить сразу с субсидями</h3>
                <span class="del-sum">3 071 880 сум</span>
                <p class="sum">2 898 000 сум</p>
                <a href="#/request" class="btn-sum" type="button">Оставить заявку</a>
              </div>
              <div class="rasrochka-card">
                <h3 class="rasrochka-title">Купить в рассрочку</h3>
                <select class="mons-number" name="number" >
                  <option value="1">
                      1
                  </option>
                  <option value="2">

                    2
                 </option>
                  <option value="3">


                      3
                    </option>
                  <option value="4">
                    4
                </option>
                  <option value="5">

                      5
                          </option>
                  <option value="6">

                      6

                  </option>
                  <option value="6">

                      7

                  </option>
                  <option value="6">

                      8

                  </option>
                  <option value="6">

                      9

                  </option>
                  <option value="6">

                      10

                  </option>
                  <option value="6">

                      11

                  </option>
                  <option value="6">

                      12

                  </option>
                </select>
                <span class="itogo">Итого:</span>
                <p class="sum-mons">256 000 сум  в месяц</p>
                <a class="btn-sum" href="#/request" >Оставить заявку</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="tavar tavar-active">
        <div class="container">
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
            <li class="product-list-item">
              <a href="#/product" class="product-list-link">
                <div class="card">
                  <button class="btn-hart">
                    <img src="/images/icon-heart.svg" alt="hart">
                  </button>
                  <img src="/images/product-ponel-image.png" alt="product-ponel">
                  <div class="likes">
                    <ul class="likes-list">
                      <li class="likes-list-item ">
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
                  <a class="btn-list" href="#/request" >Оставить заявку</a>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
</div>

</template>


<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n'

let category = ref(true)
let review = ref(false)
let descriptions = ref(false)

function categorys() {
  this.category = true
this.review = false
this.descriptions = false
}
function reviews() {
  this.category = false
this.review = true
this.descriptions = false
}
function descriptionss() {
  this.category = false
this.review = false
this.descriptions = true
}

</script>
