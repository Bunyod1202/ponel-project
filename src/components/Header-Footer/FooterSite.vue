<template>

 <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <a href="#/">
          <img src="/images/logo.svg" alt="logo">
        </a>
        <ul class="footer-list">
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">{{$t("header.about_us")}}</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">{{$t("header.regulations")}}</a>
          </li>
        </ul>
        <div class="phone-number-box">
          <a class="phone-number" href="tel:+998971234567">+998(78)122-12-32</a>
          <p class="footer-text">{{$t("support")}}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="icon-list">
          <li class="icon-list-item">
            <a href="#" target="blank" class="icon-list-link">
              <img src="/images/instagram-icon.svg" alt="instagram">
            </a>
          </li>
          <li class="icon-list-item">
            <a href="#" target="blank" class="icon-list-link">
              <img src="/images/fasebook-icon .svg" alt="fasebook">
            </a>
          </li>
          <li class="icon-list-item">
            <a href="#" target="blank" class="icon-list-link">
              <img src="/images/telegram-icon .svg" alt="telegram">
            </a>
          </li>
          <li class="icon-list-item">
            <a href="#" target="blank" class="icon-list-link">
              <img src="/images/yotube-icon .svg" alt="yotube">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
