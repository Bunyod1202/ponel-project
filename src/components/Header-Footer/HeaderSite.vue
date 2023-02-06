<template>
  <header class="site-header">
    <div class="site-header-top">
      <div class="container">
        <div class="header-top">
          <nav class="nav">
            <ul class="list">
              <li class="list-item">
                <a href="#/category" class="list-link">{{
                  $t("header.solar_panels")
                }}</a>
              </li>
              <li class="list-item">
                <a href="#/category" class="list-link">{{
                  $t("header.water_heaters")
                }}</a>
              </li>
              <li class="list-item">
                <a href="#/about" class="list-link">{{
                  $t("header.about_us")
                }}</a>
              </li>
              <li class="list-item">
                <a href="#/request" class="list-link">{{
                  $t("header.regulations")
                }}</a>
              </li>
            </ul>
          </nav>
          <div class="header-top-right">
            <a class="phone-number" href="tel:+998971234567"
              >+998(78)122-12-32</a
            >
            <q-select
              borderless
              class="provinces-select"
              v-model="model"
              :options="options"
            />
            <q-btn-dropdown class="language-select" :label="dropdown">
              <q-list>
                <q-item clickable v-close-popup @click="rubtn()">
                  <q-item-section>
                    <q-item-label v-model="ru">{{ ru }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="uzbtn()">
                  <q-item-section>
                    <q-item-label v-model="uz">{{ uz }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="site-header-bottom">
      <div class="container">
        <div class="header-bottom">
          <a class="logo" href="#/">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <form class="form" method="post" autocomplete="off">
            <input
              class="search-input"
              :placeholder="$t('header.search_products')"
              type="text"
            />
            <button class="search-btn">
              <img src="/images/search (2).svg" alt="" />
            </button>
          </form>
          <router-link class="btn-login" to="/admin">
            {{ $t("header.entrance_the_office") }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
// import { useMainStore } from "src/stores/main";

// const mainStore = useMainStore();
let language = ref("Русский");
let languageoptions = [
  {
    label: "Русский",
    value: "ru",
  },
  {
    label: "O'zbekcha",
    value: "uz",
  },
];

const { locale } = useI18n();
// console.log(locale.value);

let dropdown = ref("Русский");

let ru = ref("Русский");
let uz = ref("O'zbekcha");

function rubtn() {
  this.dropdown = this.ru;
  locale.value = "ru";
}
function uzbtn() {
  this.dropdown = this.uz;
  locale.value = "uz";
}

let model = ref("Ташкент");
let options = [
  "Ташкент",
  "Навои",
  "Бухара",
  "Кашкадарья",
  "Сурхандарьинская",
  "Джизак",
  "Самарканд",
  "Наманган",
  "Фергана",
  "Хорезм",
  "Сырдарья",
  "Андижан",
];

const localeOptions = [
  {
    locale: "ru",
    name: "Русский",
  },
  {
    locale: "uz",
    name: "O'zbekcha",
  },
];

// const { locale } = useI18n();
// const store = {};
// let availableLocales = computed(() =>
//   localeOptions.filter((lang) => lang.locale !== locale.value)
// );
// let currentLocale = computed(() =>
//   localeOptions.find((i) => i.locale === locale.value)
// );
</script>
