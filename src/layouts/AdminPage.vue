<template>
  <q-layout view="hhh lpR fff">
    <q-page-container>
      <div class="admin-page">
        <AdminMenu />
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AdminMenu from "../components/adminComponents/AdminMenu";
import { useRouter } from "vue-router";

const router = useRouter();
const token = localStorage.getItem("token");

if (!token) {
  router.push("/login");
}
</script>

<style lang="scss" scoped>
.admin-page {
  display: flex;
}
</style>
