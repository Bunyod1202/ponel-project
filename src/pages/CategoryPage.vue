<template>
  <div>
    <section class="tavar tavar-box">
      <div class="container">
        <div class="content">
          <h2 class="ponel">{{ $t("solar_power_plants") }}</h2>
          <span>1567 {{ $t("goods") }}</span>
        </div>
        <div class="tavar-inners">
          <div class="tavar-filter">
            <form class="form" @submit.prevent="filterForm">
              <details class="details">
                <summary class="summary">
                  {{ $t("price") }}
                  <img
                    src="/images/Vector.svg"
                    width="11"
                    height="11"
                    alt="Vector"
                  />
                </summary>

                <div class="wrapper">
                  <div class="sum-group">
                    <span class="sum">
                      {{ $t("from") }}
                      <span class="outputOne" id="slider-output-1">
                        {{ standard.min }}
                      </span>
                    </span>
                    <span class="sum">
                      {{ $t("from") }}
                      <span class="outputTwo" id="slider-output-2">
                        {{ standard.max }}
                      </span>
                    </span>
                  </div>
                  <div class="slider">
                    <div class="range-slider">
                      <q-range
                        v-model="standard"
                        :min="100000"
                        :max="10000000"
                        :step="50000"
                      />
                    </div>
                  </div>
                </div>
              </details>
              <details class="details">
                <summary class="summary">
                  {{ $t("manufacturer") }}
                  <img
                    src="/images/Vector.svg"
                    width="11"
                    height="11"
                    alt="Vector"
                  />
                </summary>
                <div class="manufacturer">
                  <input
                    class="search-chek"
                    type="text"
                    placeholder="Найти производителя"
                  />
                  <ul class="chek-list">
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">ASUS (13)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Alcatel (20)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Apple (149)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">BQ (62)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">BQ Mobile (7)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Black Fox (4)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Blackview (17)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Cat (4)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">DIGMA (1)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Doogee (28)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">HTC (4)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Haier (1)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Honor (54)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Huawei (40)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">INOI (14)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Infinix (8)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Itel (17)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Jinga (2)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Lenovo (3)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Motorola (7)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Nokia (48)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">OPPO (42)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Oukitel (16)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">POCO (21)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Realme (44)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Redmi (18)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Senseit (1)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Samsung (184)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">TLC (3)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Necno (34)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Tele2 (1)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Ulefone (3)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Vertex (9)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Vivo (36)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Vsmart (4)</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                          value="off"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Xiaomi (112)</span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
              <details class="details">
                <summary class="summary">
                  {{ $t("purpose") }}
                  <img
                    src="/images/Vector.svg"
                    width="11"
                    height="11"
                    alt="Vector"
                  />
                </summary>
                <div class="purpose">
                  <ul class="chek-list">
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">{{
                            $t("for_water_transport")
                          }}</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">{{ $t("for_giving") }}</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">{{ $t("for_home") }}</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">{{
                            $t("for_battery_charging")
                          }}</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">{{
                            $t("for_businesses")
                          }}</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">{{ $t("for_farms") }}</span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
              <details class="details">
                <summary class="summary">
                  {{ $t("rated_power") }}
                  <img
                    src="/images/Vector.svg"
                    width="11"
                    height="11"
                    alt="Vector"
                  />
                </summary>

                <div class="wrapper">
                  <div class="sum-group">
                    <span class="sum">
                      {{ $t("from") }}
                      <span class="outputOne" id="slider-output-1">
                        {{ stand.min }}
                      </span>
                    </span>
                    <span class="sum">
                      {{ $t("from") }}
                      <span class="outputTwo" id="slider-output-2">
                        {{ stand.max }}
                      </span>
                    </span>
                  </div>
                  <div class="slider">
                    <div class="range-slider">
                      <q-range
                        v-model="stand"
                        :min="1"
                        :max="10000"
                        :step="1"
                      />
                    </div>
                  </div>
                </div>
              </details>
              <details class="details">
                <summary class="summary">
                  {{ $t("charge_controller") }}
                  <img
                    src="/images/Vector.svg"
                    width="11"
                    height="11"
                    alt="Vector"
                  />
                </summary>
                <div class="charge-controller">
                  <ul class="chek-list">
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">МРРТ</span>
                        </span>
                      </label>
                    </li>
                    <li class="chek-list-item">
                      <label>
                        <input
                          class="visually-hidden check-input"
                          type="checkbox"
                          name="manufacturer"
                        />
                        <span class="chek-inner">
                          <span class="checkbox"></span>
                          <span class="chek-title">Шим</span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
              <div class="details details-btn">
                <button class="btn-form" type="submit">
                  {{ $t("clear_all_filters") }}
                </button>
              </div>
            </form>
          </div>
          <div class="tavar-wrapper">
            <div class="popular-box">
              <button class="btn-drop">
                {{ $t("popular") }}
                <img
                  src="/images/Vector.svg"
                  width="11"
                  height="11"
                  alt="Vector"
                />
              </button>
              <button
                type="button"
                @click="modalOpen()"
                class="modal-btn-open btn-login"
              >
                {{ $t("power_calculation") }}
              </button>
            </div>
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
        </div>
      </div>
    </section>

    <div>
      <q-dialog class="modal" v-model="modal" persistent>
        <div class="modal-card calculator">
          <div class="calculator-box-wrapper">
            <div class="calculator-box-inner">
              <button
                class="modal-btn-close"
                v-close-popup
                @click="closebtn()"
                type="button"
              >
                <img src="/images/close.svg" alt="close" />
              </button>
              <form class="form" method="post" autocomplete="off">
                <p class="box-text">{{ $t("select_type") }}</p>
                <div class="radio-group">
                  <label class="one" @click="individual()">
                    <input
                      class="radio visually-hidden tarifIputs"
                      v-model="individualinput"
                      value="true"
                      id="individual"
                      type="radio"
                      name="radio"
                      required
                    />
                    <span class="chek-box">
                      <span class="slinder"></span>
                      <span class="text">{{ $t("individual") }}</span>
                    </span>
                  </label>
                  <label class="two" @click="entity()">
                    <input
                      class="radio visually-hidden tarifIputs"
                      v-model="individualinput"
                      value="false"
                      id="entity"
                      type="radio"
                      name="radio"
                      required
                    />
                    <span class="chek-box">
                      <span class="slinder"></span>
                      <span class="text">{{ $t("entity") }}</span>
                    </span>
                  </label>
                </div>
                <p class="box-title">{{ $t("region") }}</p>
                <div class="cvadrat-group select-group">
                  <q-select
                    class="select-input select"
                    borderless
                    v-model="city"
                    :options="cityoptions"
                    :label="$t('choose_an_area')"
                  />
                </div>
                <p class="box-title">
                  {{ $t("annual_payment_for_electricity") }}
                </p>
                <div class="cvadrat-group">
                  <input
                    class="cvadret-input"
                    id="vtMeter"
                    type="number"
                    v-model="summa"
                    :placeholder="$t('in_soums')"
                  />
                </div>
                <p class="box-title">{{ $t("rate") }}</p>
                <div class="cvadrat-group rate select-group">
                  <q-select
                    class="select-input select"
                    borderless
                    :class="{ entityselect: selecttarifone }"
                    v-model="terifoneselect"
                    :options="tarifone"
                    :label="$t('choose_a_plan')"
                  />

                  <q-select
                    class="select-input select"
                    borderless
                    v-model="teriftwoselect"
                    :class="{ entityselect: selecttariftwo }"
                    :options="tariftwo"
                    :label="$t('choose_a_plan')"
                  />
                </div>
                <button
                  class="cvadret-btn cvadret-btn--bottom"
                  @click="calceElctor()"
                  type="button"
                >
                  {{ $t("calculate") }}
                </button>
                <p class="itogo">{{ $t("recommended_panel_power") }}</p>
                <p class="summa">
                  <strong id="resultSum">{{ result }}</strong>
                </p>
                <p id="fifty-warning"></p>
              </form>
            </div>
          </div>
        </div>
      </q-dialog>
    </div>
  </div>
</template>
<script setup>
import { GetProductApiId } from "src/API/API";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import CardItem from "../components/cards/CardItem";

let city = ref(null);
const cityoptions = [
  {
    label: "Ташкент",
    value: "1497.5",
  },
  {
    label: "Ургенч",
    value: "1570.5",
  },
  {
    label: "Джизак",
    value: "1461",
  },
  {
    label: "Самарканд",
    value: "1607",
  },
  {
    label: "Навои",
    value: "1643",
  },
  {
    label: "Бухара",
    value: "1607",
  },
  {
    label: "Карши",
    value: "1607",
  },
  {
    label: "Термез",
    value: "1643",
  },
  {
    label: "Наманган",
    value: "1387",
  },
  {
    label: "Фергана",
    value: "1277.5",
  },
  {
    label: "Андижан",
    value: "1350.5",
  },
  {
    label: "Нукус",
    value: "1534",
  },
  {
    label: "Ургенч",
    value: "1570.5",
  },
];
let terifoneselect = ref(null);
const tarifone = [
  {
    label: "I группа 295.0 сум за 1 кватт",
    value: "295.0",
  },
  {
    label: "II группа 147.5 сум за 1 кватт",
    value: "147.5",
  },
];
let teriftwoselect = ref(null);
const tariftwo = [
  {
    label: "I группа 450.0 сум за 1 кватт",
    value: "450.0",
  },
  {
    label: "II группа 450.0 сум за 1 кватт",
    value: "450.0",
  },
  {
    label: "III группа 450.0 сум за 1 кватт",
    value: "450.0",
  },
];
let summa = ref("");
let modal = ref(false);

let results = ref(true);

function modalOpen() {
  this.modal = true;
}
const dataSun = ref([]);
let data = [];
const filterForm = () => {
  const year1InputValue = standard.value.min;
  const year2InputValue = standard.value.max;
  const filterYear = data.filter((item) => {
    if (
      Number(item.product_price) >= year1InputValue &&
      Number(item.product_price) <= year2InputValue
    ) {
      return true;
    }
  });
  dataSun.value = filterYear;
};

const getProductApi = async () => {
  const cardCasts = await GetProductApiId(1);
  if (cardCasts.status === 200) {
    dataSun.value = cardCasts.data;
    data = cardCasts.data;
  }
};
getProductApi();
let result = ref("_");

let individualinput = ref(true);

function calceElctor() {
  let resultsums = null;

  if (this.results == true) {
    resultsums = summa.value / terifoneselect.value.value / city.value.value;
    this.result = resultsums.toFixed(2);
  }

  if (this.results == false) {
    resultsums = summa.value / teriftwoselect.value.value / city.value.value;
    this.result = resultsums.toFixed(2);
  }
}
let selecttariftwo = ref(true);
let selecttarifone = ref(false);

function individual() {
  this.selecttarifone = false;
  this.selecttariftwo = true;
  this.teriftwoselect = null;
  this.results = true;
  this.city = null;
  this.summa = null;
  this.result = "_";
}
function entity() {
  this.selecttarifone = true;
  this.selecttariftwo = false;
  this.terifoneselect = null;
  this.results = false;
  this.city = null;
  this.summa = null;
  this.result = "_";
}
function closebtn() {
  this.terifoneselect = null;
  this.results = false;
  this.city = null;
  this.summa = null;
  this.result = "_";
}

let standard = ref({
  min: 100000,
  max: 10000000,
});
let stand = ref({
  min: 1,
  max: 10000,
});
// let vtMeter = document.querySelector("#vtMeter")
// let individualSelect = document.querySelector("#individualSelect")
// let entitySelect = document.querySelector("#entitySelect")
// let btnSelect = document.querySelector("#btnSelect")
// let resultSums = document.querySelector("#resultSum")
// let tarifInputs = document.querySelector(".tarifInputs")

// elBox.addEventListener("click", (e) => {
//     btnSelect.addEventListener("click", function () {

// let sum = Number(city.options[city.selectedIndex].value);
// let entitySelectsum = Number(entitySelect.options[entitySelect.selectedIndex].value);
// let individualSelectsum = Number(individualSelect.options[individualSelect.selectedIndex].value);

//       let elInput = Number(vtMeter.value);

//       console.log(elInput, individualSelectsum, sum);

//       if (e.target.matches("#individual")) {

//         let a = e.target;
//         if (a) {
//           let resultMeter = elInput / individualSelectsum / sum;
//           let monay = resultMeter.toFixed(2)
//             resultSums.textContent = monay;
//         }
//       }
//       else if (e.target.matches("#entity")) {

//         let b = e.target;
//         if (b) {
//           let resultMeter = elInput / entitySelectsum / sum;
//           let monay = resultMeter.toFixed(2)

//         resultSums.textContent = monay;
//         }

//       }

//     })

//   })
</script>
