<template>
  <q-layout view="hhh lpR fff">
    <header elevated>
  <Header/>
    </header>



    <q-page-container>
      <router-view />
    </q-page-container>
      <footer elevated >
        <Footer/>
    </footer>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import Header from "../components/Header-Footer/HeaderSite"
import Footer from "../components/Header-Footer/FooterSite"

</script>
