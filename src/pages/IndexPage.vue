<template>
  <div >
    <section class="hero">
      <h1 class="visually-hidden">{{$t("short_title")}}</h1>
      <div class="container">

        <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >

      <q-carousel-slide :name="1" >
        <div class=" absolute-bottom custom-caption">
            <img src="/images/banner-img.png" style="width:100%;height: 400px;  border-radius: 4px ;">
            <div class="Info">
              <h2 class="banner-title">{{$t("short_title")}}</h2>
              <p class="banner-text">{{$t("success")}}</p>
              <button class="banner-btn">{{$t("to_learn_more")}}</button>
            </div>
          </div></q-carousel-slide>
      <q-carousel-slide :name="2" >
        <div class="absolute-bottom custom-caption">
            <img src="/images/areston-ponel.png" style="width:100% ;height: 400px;border-radius: 4px ;">
            <div class="Info">
              <h2 class="banner-title">{{$t("short_title")}}</h2>
              <p class="banner-text">{{$t("success")}}</p>
              <button class="banner-btn">{{$t("to_learn_more")}}</button>
            </div>
          </div></q-carousel-slide>
      <q-carousel-slide :name="3" >
        <div class="absolute-bottom custom-caption">
            <img src="/images/energi-ponel.png" style="width:100% ;height: 400px;border-radius: 4px ;">
            <div class="Info">
              <h2 class="banner-title">{{$t("short_title")}}</h2>
              <p class="banner-text">{{$t("success")}}</p>
              <button class="banner-btn">{{$t("to_learn_more")}}</button>
            </div>
          </div>  </q-carousel-slide>

    </q-carousel>

      </div>
    </section>
    <section class="intro">
      <div class="container">
        <div class="intro-inner">
          <h2 class="category-title">{{$t("select_a_category")}}</h2>
          <ul class="card-list">
            <li class="card-list-item">
              <a href="#/category" class="card-list-link">
                <h3 class="category-box-title">{{$t("solar_panels")}}</h3>
                <p class="category-box-text">{{$t("items")}}</p>
              </a>
            </li>
            <li class="card-list-item">
              <a href="#/category" class="card-list-link">
                <h3 class="category-box-title">{{$t("solar_water_heaters")}}</h3>
                <p class="category-box-text">{{$t("itemss")}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="calculator">
      <div class="container">
        <div class="calculator-inner">
          <h2 class="calculator-title">{{$t("calculator")}}</h2>
          <ul class="box-list">
            <li class="box-list-item " :class="{ boxlistitemactive: isActive }" >
              <a class="box-list-link"  @click="addras()" >
                {{$t("subsidy_calculation")}}
              </a>
            </li>
            <li class="box-list-item" :class="{ boxlistitemactive: isActiveras }">
              <a   @click="addrass()" class="box-list-link">
                 {{$t("installment_payment")}}
              </a>
            </li>
          </ul>
          <div class=" sliders  " :class="{ slidersactive: isActive }" >
            <div class="calculator-box-wrapper ">
              <div class="calculator-box-inner">
                <form class="form" method="post" autocomplete="off">
                  <p class="box-text">{{$t("select_type")}}</p>
                  <div class="radio-group">
                    <label @click="sunPanels()">
                      <input  class="radio visually-hidden" v-model="shape" value="false"   type="radio" name="radio" required>
                      <span class="chek-box">
                        <span class="slinder"></span>
                        <span class="text">{{$t("solar_panel")}}</span>
                      </span>
                    </label>
                    <label @click="waterPanels()">
                      <input class="radio visually-hidden" v-model="shape" value="true"  type="radio" name="radio" required>
                      <span class="chek-box">
                        <span class="slinder"></span>
                        <span class="text">{{$t("water_heater")}}</span>
                      </span>
                    </label>
                  </div>
                  <p class="box-title">{{$t("solar_panel_power")}}</p>
                  <div class="cvadrat-group " :class="{ cvadratgroupwater: litr }">
                    <input class="cvadret-input ponel-input" v-model="kvMeter"  id="kvMeter" type="number" :placeholder="$t('power')">
                    <input class="cvadret-input wotter-input" v-model="watterMeter" id="watterMeter" type="number" :placeholder="$t('volume_in_liters')">
                    <button class="cvadret-btn" @click="calcs()" type="button">{{$t("calculate")}}</button>
                  </div>

                  <p class="itogo">{{$t("total")}}</p>
                  <p class="summa">{{$t("amount_compensation")}}<strong id="resultSum">{{testResult}}</strong></p>
                  <p id="fifty-warning">{{znak}}</p>
                </form>

              </div>
            </div>
          </div>
          <div class="sliders" :class="{ slidersactive: isActiveras }">
            <div class="calculator-box-wrapper ">
              <div class="calculator-box-inner">
                <form class="form" method="post" autocomplete="off">
                  <p class="box-text">{{$t("solar_station_cost")}}</p>


                  <div class="cvadrat-group" id="cvadrat">
                    <input class="cvadret-input intl-number-input" v-model="raseum" id="rasInput" type="number" :placeholder="$t('cost_in_sum')">
                  </div>
                  <p class="box-text">{{$t('number_of_installment_months')}}</p>
                  <div class="cvadrat-group">
                    <div class="cvadret-input cvadret-input--padding ">
                      <p class="month-number"><span >{{rangeras}}</span> {{$t("months")}}</p>
                      <div class="range-slider ranes">
                        <q-slider class="ranes-input" v-model="rangeras"  marker :min="1" :max="36"/>
                    </div>
                      </div>
                  </div>
                  <button class="cvadret-btn range-btn" @click="rassum()" type="button"> {{$t("calculate")}}</button>
                </form>
              <table class="table">
                <thead class="thead">
                  <tr>
                    <th>№</th>
                    <th>{{$t("months")}}</th>
                    <th>{{$t("summa")}}</th>
                  </tr>
                </thead>
                <tbody class="table__body">
                  <tr  v-for="(menu, idx) in tabelres"
            :key="idx">
                    <td>{{idx + 1}}</td>
                    <td>{{$t("months")}}</td>
                    <td>{{elrasresultSum}}</td>
                  </tr>
                </tbody>
              </table>
              <p class="itogo">{{$t("total")}}</p>
              <p class="summa"><strong >{{elrasresultSum}}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tavar">
      <div class="container">
        <div class="tavar-inner">
          <h2 class="tavar-title">
            {{$t("suitable_products")}}
          </h2>
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
                <h3 class="model-title">{{$t("sola_module")}}</h3>
                <span class="model-number">One-sun</span>
                <p class="summa">1 554 000 {{$t("sum")}}</p>
                <span class="summa-supsidy">{{$t("price_with_compensation")}}</span>
                <p class="summa-blok">1 554 000 {{$t("sum")}}</p>
                <span class="summa-rasrochki">{{$t("installment_price")}}</span>
                <div class="summa-group">
                  <p class="summa-number">222 000 {{$t("sum")}}</p>
                  <span class="mons">x 36 мес</span>
                </div>
                <a class="btn-list" href="#/request" >{{$t("submit_your_application")}}</a>
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
                <h3 class="model-title">{{$t("sola_module")}}</h3>
                <span class="model-number">One-sun</span>
                <p class="summa">1 554 000 {{$t("sum")}}</p>
                <span class="summa-supsidy">{{$t("price_with_compensation")}}</span>
                <p class="summa-blok">1 554 000 {{$t("sum")}}</p>
                <span class="summa-rasrochki">{{$t("installment_price")}}</span>
                <div class="summa-group">
                  <p class="summa-number">222 000 {{$t("sum")}}</p>
                  <span class="mons">x 36 мес</span>
                </div>
                <a class="btn-list" href="#/request" >{{$t("submit_your_application")}}</a>
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
                <h3 class="model-title">{{$t("sola_module")}}</h3>
                <span class="model-number">One-sun</span>
                <p class="summa">1 554 000 {{$t("sum")}}</p>
                <span class="summa-supsidy">{{$t("price_with_compensation")}}</span>
                <p class="summa-blok">1 554 000 {{$t("sum")}}</p>
                <span class="summa-rasrochki">{{$t("installment_price")}}</span>
                <div class="summa-group">
                  <p class="summa-number">222 000 {{$t("sum")}}</p>
                  <span class="mons">x 36 мес</span>
                </div>
                <a class="btn-list" href="#/request" >{{$t("submit_your_application")}}</a>
               </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

</template>

<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n'

     let litr = ref(false)

     let shape = ref(false)


     const isActive = ref(true)
     const isActiveras = ref(false)


function sunPanels() {
  this.litr = false
  this.testResult="_"
this.watterMeter =""
}

function waterPanels() {
    this.litr = true
    this.testResult="_"
    this.kvMeter=""
    this.znak =""
}
 function addras(){
  this.isActive = true
  this.isActiveras = false
 }
  function addrass(){
  this.isActive = false
  this.isActiveras = true
 }


  let kvMeter = ref("")
  let watterMeter = ref("");









  let testResult = ref(`_`);
  let summa = ref(0)
 let add = ref('компенсация предоставляется только при установке возобновляемых источников электроэнергии для  водяных насосов, установленными в вертикальных скважинах при освоении новых земель')
  let znak = ref('')

function samsum() {




    let sunPanelcol = ref(300000)
  let waterPanelcol = ref(300000)


    this.summa = sunPanelcol.value
  if (kvMeter.value > 0.4 && kvMeter.value <= 0.9) {
    let kvMeterSeven = this.summa * 7
    this.testResult = `7 БРВ = ${kvMeterSeven.toLocaleString()} сум`

  } else if (kvMeter.value > 0.9 && kvMeter.value <= 1.4) {
    let kvMeterTen = this.summa * 10
    this.testResult = `10 БРВ = ${kvMeterTen.toLocaleString()} сум`

  } else if (kvMeter.value > 1.4 && kvMeter.value <= 1.9) {
    let kvMeterFifteen = this.summa * 15
    this.testResult = `15 БРВ = ${kvMeterFifteen.toLocaleString()} сум`

  } else if (kvMeter.value > 1.9 && kvMeter.value <= 4.9) {
    let kvMeterTwenty = this.summa * 20
    this.testResult = `20 БРВ = ${kvMeterTwenty.toLocaleString()} сум`

  } else if (kvMeter.value >= 5) {
    let kvMeterFifty = this.summa * 50
    this.testResult = `50 БРВ = ${kvMeterFifty.toLocaleString()} сум`

  }
  else {
    let resultmonay = kvMeter.value * this.summa
   this.testResult = resultmonay

  };




 if (kvMeter.value >= 5) {
    this.znak = this.add

  } else {
  this.znak = '';
  }





  if (watterMeter.value >= 1 && watterMeter.value <= 100) {
    let waterFive = this.summa * 5
    this.testResult = `5 БРВ = ${waterFive.toLocaleString()} сум`

  } else if (watterMeter.value >= 100) {
    let waterSeven = this.summa * 7
    this.testResult = `7 БРВ = ${waterSeven.toLocaleString()} сум`

  }






}

let rasInput = document.querySelector("#rasInput")
let rasInputRange = document.querySelector("#range")
let rasRangeBtn = document.querySelector(".range-btn")
let elTableBody = document.querySelector(".table__body");
let elrasresultSum = ref("_");
let elckikdiv = document.querySelector("#cvadrat");


let rangeras = ref("1")

let raseum = ref("")

function rassum(){

   let tabelres = ref("")

   this.tabelres = rangeras.value

  // let rasInputRangeNumber = Number(rasInputRange.value)
  let rangeSum = Math.ceil(raseum.value / rangeras.value)

  let elnumber = rangeSum.toLocaleString()
  // console.log(elnumber.toFixed(2));
  this.elrasresultSum = `${elnumber} сум  в месяц`

  for (let i = 1; i <= rasInputRangeNumber; i++) {

    let elTableRow = document.createElement("tr");
    let elTableData = document.createElement("td");
    let elTableDatas = document.createElement("td");
    let elTableDeta = document.createElement("td");

    elTableDatas.textContent = i;
    // elTableDeta.textContent = `${kun}.${ oyla}.${yil}`;
    elTableDeta.textContent = `месяц`;
    elTableData.textContent = `${elnumber} сум`;

    elTableRow.appendChild(elTableDatas);
    elTableRow.appendChild(elTableDeta);
    elTableRow.appendChild(elTableData);

    elTableBody.appendChild(elTableRow);



  }


}

 // ? //////////////////////////////////////



function calcs() {


this.samsum()

}

let slide = ref(1)
</script>
