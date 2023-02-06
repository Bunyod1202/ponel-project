<template>
  <div>
    <section class="product">
      <div class="container">
        <q-breadcrumbs class="text-brown links">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="primary" />
          </template>

          <q-breadcrumbs-el :label="$t('home')" />
          <q-breadcrumbs-el :label="$t('catalog')" />
          <q-breadcrumbs-el :label="$t('solar_power_plants')" />
          <q-breadcrumbs-el :label="$t('for')" />
          <q-breadcrumbs-el :label="$t('single_phase')" />
        </q-breadcrumbs>

        <div class="product-inner">
          <div class="product-wrapper">
            <h2 class="product-name">{{ $t("single_phase") }}</h2>
            <div class="function">
              <img class="img-card" :src="data[0]?.img_url" alt="" />
              <ul class="list">
                <li class="list-item">
                  <p>{{ $t("max_power") }}</p>
                  <span>1000 Вт</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("max_power") }}</p>
                  <span>{{ $t("up_to_kwh_day") }}</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("output_voltage") }}</p>
                  <span>220 {{ $t("volt") }}</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("total_battery_capacity") }}</p>
                  <span>1 x 75Ач</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("type") }}</p>
                  <span>{{ $t("service") }}</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("battery_life") }}</p>
                  <span>8 {{ $t("years") }}</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("total_solar_power") }}</p>
                  <span>1 x 170 Вт</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("type_of_solar_panels") }}</p>
                  <span>{{ $t("monocrystalline") }}</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("service_life_of_solar_panels") }}</p>
                  <span>{{ $t("at_least_years") }}</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("total_equipment_weight") }}</p>
                  <span>55 кг</span>
                </li>
                <li class="list-item">
                  <p>{{ $t("home") }}</p>
                  <span>1 {{ $t("years") }}</span>
                </li>
                <li class="list-item">
                  <button class="btn-sum" type="button">
                    {{ $t("are_available") }}
                  </button>
                </li>
              </ul>
            </div>
            <div class="characteristics">
              <ul class="list-description">
                <li
                  class="list-description-item"
                  :class="{ listdescriptionitemactive: category }"
                >
                  <button
                    type="button"
                    @click="categorys()"
                    class="list-description-link"
                  >
                    {{ $t("characteristics") }}
                  </button>
                </li>
                <li
                  class="list-description-item"
                  :class="{ listdescriptionitemactive: descriptions }"
                >
                  <button
                    type="button"
                    @click="descriptionss()"
                    class="list-description-link"
                  >
                    {{ $t("description") }}
                  </button>
                </li>
                <li
                  class="list-description-item"
                  :class="{ listdescriptionitemactive: review }"
                >
                  <button
                    type="button"
                    @click="reviews()"
                    class="list-description-link"
                  >
                    {{ $t("reviews") }}
                  </button>
                </li>
              </ul>
              <div
                class="content content-one"
                :class="{ contentactive: category }"
                id="content-one"
              >
                <div class="description">
                  <p class="general">{{ $t("general") }}</p>
                  <ul class="list">
                    <li class="list-item">
                      <p>{{ $t("max_power") }}</p>
                      <span>1000 Вт</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("maximum_output") }}</p>
                      <span>{{ $t("up_to_kwh_day") }}</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("output_voltage") }}</p>
                      <span>220 {{ $t("volt") }}</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("total_battery_capacity") }}</p>
                      <span>1 x 75Ач</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("type") }}</p>
                      <span>{{ $t("service") }}</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("battery_life") }}</p>
                      <span>8 {{ $t("years") }}</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t(" total_solar_power") }}</p>
                      <span>1 x 170 Вт</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("type_of_solar_panels") }}</p>
                      <span>{{ $t("monocrystalline") }}</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("service_life_of_solar_panels") }}</p>
                      <span>{{ $t("at_least_years") }}</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("total_equipment_weight") }}</p>
                      <span>55 кг</span>
                    </li>
                    <li class="list-item">
                      <p>{{ $t("home") }}</p>
                      <span>1 {{ $t("years") }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="content content-two"
                :class="{ contentactive: descriptions }"
                id="content-two"
              >
                <div class="description">
                  <p>{{ $t("set_content") }}</p>
                  <p>{{ $t("set_text") }}</p>
                </div>
              </div>
              <div
                class="content content-three"
                :class="{ contentactive: review }"
                id="content-three"
              >
                <div class="description">
                  <div class="description-coment">
                    <ul class="coment-list">
                      <li class="coment-list-item">
                        <div class="coment-box">
                          <img src="/images/avatar.svg" alt="" />
                          <div class="content-wrapper">
                            <p>{{ $t("constantine_of_constantinople") }}</p>
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
                          {{ $t("last_thing") }}
                        </p>
                        <ul class="img-list">
                          <li class="img-list-item">
                            <img src="/images/photo1.png" alt="" />
                          </li>
                          <li class="img-list-item">
                            <img src="/images/photo2.png" alt="" />
                          </li>
                          <li class="img-list-item">
                            <img src="/images/photo3.png" alt="" />
                          </li>
                        </ul>
                        <div class="liks-group">
                          <div class="liks">
                            <img src="/images/likes.svg" alt="" />
                            <span>56</span>
                          </div>
                          <div class="diz-liks">
                            <img src="/images/diz-like.svg" alt="" />
                            <span>4</span>
                          </div>
                        </div>
                      </li>
                      <li class="coment-list-item">
                        <div class="coment-box">
                          <img src="/images/avatar-girl.svg" alt="photo" />
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
                              <span>21 {{ $t("october") }} 2021</span>
                            </span>
                          </div>
                        </div>
                        <p class="text">
                          {{ $t("use_only") }}
                        </p>

                        <div class="liks-group">
                          <div class="liks">
                            <img src="/images/likes.svg" alt="" />
                            <span>56</span>
                          </div>
                          <div class="diz-liks">
                            <img src="/images/diz-like.svg" alt="" />
                            <span>4</span>
                          </div>
                        </div>
                      </li>
                      <li class="coment-list-item">
                        <div class="coment-box">
                          <img src="/images/avatar-boy.png" alt="photo" />
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
                              <span>21 {{ $t("october") }} 2021</span>
                            </span>
                          </div>
                        </div>
                        <p class="text">
                          {{ $t("normal_apparatus") }}
                        </p>
                        <ul class="img-list">
                          <li class="img-list-item">
                            <img src="/images/photo4.png" alt="photo" />
                          </li>
                          <li class="img-list-item">
                            <img src="/images/photo5.png" alt="photo" />
                          </li>
                          <li class="img-list-item">
                            <img src="/images/photo6.png" alt="photo" />
                          </li>
                          <li class="img-list-item">
                            <img src="/images/photo7.png" alt="photo" />
                          </li>
                        </ul>
                        <div class="liks-group">
                          <div class="liks">
                            <img src="/images/likes.svg" alt="photo" />
                            <span>56</span>
                          </div>
                          <div class="diz-liks">
                            <img src="/images/diz-like.svg" alt="photo" />
                            <span>4</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="reviews-box">
                      <div class="reviews">
                        <div class="reviews-number">
                          <p>4.6 <sub>/5</sub></p>
                          <span>86 {{ $t("reviewss") }}</span>
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
                            <img src="/images/Group 1.svg" alt="" />
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

                            <img src="/images/Group 3.svg" alt="" />
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
                            <img src="/images/Group 2.svg" alt="" />
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
                            <img src="/images/Group 4.svg" alt="" />
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
                            <img src="/images/Group 5.svg" alt="" />
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                      <button class="btn-reviews">
                        {{ $t("leave_feedback") }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-sum">
            <div class="sum-card">
              <h3 class="sum-title">
                {{ $t("buy_immediately_with_subsidies") }}
              </h3>
              <span class="del-sum"
                >{{ data[0]?.product_price - 10000 }}{{ $t("sum") }}</span
              >
              <p class="sum">{{ data[0]?.product_price }}{{ $t("sum") }}</p>
              <a href="#/request" class="btn-sum" type="button">{{
                $t("submit_your_application")
              }}</a>
            </div>
            <div class="rasrochka-card">
              <h3 class="rasrochka-title">{{ $t("buy_in_installments") }}</h3>
              <select
                class="mons-number"
                v-model="rasrochkaSelect"
                @change="rasrochka"
                name="number"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="6">7</option>
                <option value="6">8</option>
                <option value="6">9</option>
                <option value="6">10</option>
                <option value="6">11</option>
                <option value="6">12</option>
              </select>
              <span class="itogo">{{ $t("months") }}</span>
              <p class="sum-mons">
                {{ rasrochkaRes }}{{ $t("soum_per_month") }}
              </p>
              <span class="itogo">{{ $t("total") }}</span>
              <p class="sum-mons">
                {{ rasrochkaItogo }}{{ $t("soum_per_month") }}
              </p>
              <a class="btn-sum" href="#/request">{{
                $t("submit_your_application")
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tavar tavar-active">
      <div class="container">
        <ul class="product-list">
          <li
            v-for="(item, index) in dataSun"
            :key="index"
            class="product-list-item"
          >
            <CardItem :item="item" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { GetProductApiId, GetProductId } from "src/API/API";
import CardItem from "../components/cards/CardItem";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const route = useRoute();

const data = ref([]);
const dataSun = ref([]);
const rasrochkaSelect = ref(null);
const rasrochkaRes = ref(0);
const rasrochkaItogo = ref(0);
const rasrochka = (evt) => {
  let res = (data.value[0]?.product_price / 100) * rasrochkaSelect.value;
  rasrochkaItogo.value = Number(data.value[0]?.product_price) + Number(res);
  const sum =
    (Number(data.value[0]?.product_price) + Number(res)) /
    rasrochkaSelect.value;
  rasrochkaRes.value = sum;
};

const getProductApiSun = async () => {
  const cardCasts = await GetProductId(route.params.id);
  if (cardCasts.status === 200) {
    data.value = cardCasts.data;
    getProductApi();
    console.log(data);
  }
};
getProductApiSun();
watch(
  () => route.params.id,
  () => {
    getProductApiSun();
  }
);
const getProductApi = async () => {
  const cardCasts = await GetProductApiId(data.value[0]?.product_type.id);
  if (cardCasts.status === 200) {
    dataSun.value = cardCasts.data;
  }
};
let category = ref(true);
let review = ref(false);
let descriptions = ref(false);

function categorys() {
  this.category = true;
  this.review = false;
  this.descriptions = false;
}
function reviews() {
  this.category = false;
  this.review = true;
  this.descriptions = false;
}
function descriptionss() {
  this.category = false;
  this.review = false;
  this.descriptions = true;
}
</script>
<style lang="scss" scoped>
.img-card {
  width: 406px;
  height: 466px;
}
</style>
