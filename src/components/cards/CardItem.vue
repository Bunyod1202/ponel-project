<template>
  <router-link
    :to="{ name: 'product', params: { id: props?.item.id } }"
    class="product-list-link"
  >
    <div class="card">
      <button class="btn-hart">
        <img src="/images/icon-heart.svg" alt="hart" />
      </button>
      <img :src="props?.item.img_url" :alt="props?.item.product_name" />

      <h3 class="model-title">{{ props?.item.product_name }}</h3>
      <span class="model-number">summa</span>
      <p class="summa">{{ props?.item.product_price }}{{ $t("sum") }}</p>
      <span class="summa-supsidy">kvadrat metr</span>
      <p class="summa-blok">{{ props?.item.product_kv }} kv</p>
      <span class="summa-rasrochki">Category name</span>
      <div class="summa-group">
        <p class="summa-number">{{ props?.item.product_category.label }}</p>
      </div>
      <a class="btn-list" href="#/request">{{
        $t("submit_your_application")
      }}</a>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
