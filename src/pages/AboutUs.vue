<template >
<div>
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
      <q-breadcrumbs-el label="о нас "  />


    </q-breadcrumbs>

    <h2 class="about-title">{{$t("about_us")}}</h2>
    <div class="about-content">
      <div class="content">
  <p class="about-text pad">

              Ўзбекистон Республикаси Энергетика вазирлиги ҳузуридаги бюджетдан ташқари Тармоқлараро энергияни тежаш жамғармасининг (кейинги ўринларда — Жамғарма) ўз фаолиятида Ўзбекистон Республикаси Конституцияси ва қонунларига, Ўзбекистон Республикаси Олий Мажлиси палаталарининг қарорларига, Ўзбекистон Республикаси Президентининг фармонлари, қарорлари ва фармойишларига, Вазирлар </p>
              <p class="about-text">
              Маҳкамасининг қарорлари ва фармойишларига, шунингдек, ушбу Низомга ва бошқа норматив-ҳуқуқий ҳужжатларга амал қилади.</p>
              <p class="about-text ">
Жамғарма давлат муассасаси шаклидаги юридик шахс ҳисобланади, ўз мустақил балансига, банк ҳисобварақларига, Ўзбекистон Республикаси Давлат герби тасвири туширилган ва ўз номи давлат тилида ёзилган муҳрига эга.
</p>
<p class="about-text pad">
Жамғарма жойлашган жой (почта манзили):</p>
<p class="about-text pad">
Ўзбекистон Республикаси, Тошкент шаҳри, Истиқбол кўчаси, 21 уй.
</p>
<p class="about-text pad">
Жамғарманинг расмий номи:
</p>
<p class="about-text pad">
а) давлат тилида:
</p>
<p class="about-text pad">
тўлиқ номи — Ўзбекистон Республикаси Энергетика вазирлиги ҳузуридаги бюджетдан ташқари Тармоқлараро энергияни тежаш жамғармаси;
қисқартирилган номи — Тармоқлараро энергияни тежаш жамғармаси;
</p>
<p class="about-text pad">
б) инглиз тилида:
</p>
<p class="about-text pad">
тўлиқ номи — Extra-budgetary Intersectoral Energy Saving Fund under the Ministry of energy of the Republic of Uzbekistan;
қисқартирилган номи — Extra-budgetary Intersectoral Energy Saving Fund;
</p>
<p class="about-text pad">
в) рус тилида:
</p>
<p class="about-text ">
тўлиқ номи — Внебюджетный Межотраслевой фонд энергосбережения при Министерстве энергетики Республики Узбекистан;
қисқартирилган номи — Внебюджетный Межотраслевой фонд энергосбережения.
</p>
<p class="about-text pad">
Жамғарманинг асосий мақсади иқтисодиёт тармоқлари ва ижтимоий соҳаларда ҳамда аҳоли хонадонларида энергия самарадорлиги лойиҳаларини  амалга оширишга инвестицияларни жалб қилиш ва молиялаштиришдир.

          </p>
      </div>
      <div class="img-box">
        <img src="/images/about-img-sum-ponel.png" alt="">
      </div>
    </div>
</div>
</div>

</template>
<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n'


</script>
