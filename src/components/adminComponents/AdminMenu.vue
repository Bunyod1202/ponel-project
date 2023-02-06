<template>
  <div class="admin-menu">
    <div class="avatar-group">
      <q-btn class="avatar-btn">
        <q-avatar size="70px">
          <img :src="userimg" />
        </q-avatar>
        <q-menu>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <label>
                <input class="visually-hidden" type="file" @change="userImg" />
                <span class="edit-btn">
                  change user image <SolidEditIcon />
                </span>
              </label>
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img :src="userimg" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

              <q-btn
                color="primary"
                label="Logout"
                push
                size="sm"
                @click="logout"
              />
            </div>
          </div>
        </q-menu>
      </q-btn>
      <span>
        <p class="ferst-name">{{ user?.firstname }}</p>
        <p class="last-name">{{ user?.lastname }}</p>
      </span>
    </div>
    <ul class="nav-list">
      <li class="nav-item">
        <router-link exact class="nav-link" to="/admin">Category</router-link>
      </li>
      <li class="nav-item">
        <router-link exact class="nav-link" to="/admin/products"
          >Products</router-link
        >
      </li>
      <li class="nav-item">
        <router-link exact class="nav-link" to="/admin/orders"
          >Orders</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SolidEditIcon from "../icons/SollidEditIcon";

const router = useRouter();
const mobileData = ref(true);
const bluetooth = ref(false);
const user = ref(JSON.parse(localStorage.getItem("user")));
const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
const userimg = ref(
  JSON.parse(localStorage.getItem("userimg")) ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30SfNCE6e-sM7qSa8Z9CwrktkRgrjbHKyeSh3VyZDrsXLDVW0uHVcjmeki6bBSwQnqWo&usqp=CAU"
);
const userImg = (evt) => {
  let img = evt.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(img);
  fileReader.addEventListener("load", function () {
    userimg.value = this.result;
    localStorage.setItem("userimg", JSON.stringify(this.result));
  });
};
</script>

<style lang="scss" scoped>
.admin-menu {
  width: 300px;
  height: 100vh;
  // position: fixed;
  box-shadow: 0px 2px 21px rgba(0, 0, 0, 0.1);
}
.avatar-group {
  width: 100%;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0px 5px 21px rgba(0, 0, 0, 0.1);
}
.avatar-btn {
  width: 70px;
  height: 70px;
  margin-right: 15px;
  padding: 0;
  border-radius: 50%;
}
.ferst-name {
  padding: 0;
  margin: 0;
  font-size: 20px;
}
.last-name {
  padding: 0;
  margin: 0;
  font-size: 20px;
}
.nav-list {
  padding-top: 22px;
  padding-left: 22px;
}
.nav-link {
  width: 100%;
  padding: 20px;
  position: relative;
  color: #000;
  margin-bottom: 25px;
  transition: 0.3s all linear;
  &::before {
    opacity: 0;
    transition: 0.3s all linear;
    position: absolute;
    right: 0;
    top: -17px;
    width: 19px;
    height: 19px;
  }
  &::after {
    opacity: 0;
    transition: 1s all linear;
    position: absolute;
    right: 0;
    bottom: -17px;
    width: 19px;
    height: 19px;
  }
}
.router-link-exact-active {
  background-color: #3279e3;
  color: #fff;
  border-radius: 19px 0px 0px 19px;
  &::before {
    content: "";
    opacity: 1;
    transition: 0.3s all linear;
    position: absolute;
    right: 0;
    top: -17px;
    width: 19px;
    height: 19px;
    background-image: url("../../assets/images/border.png");
    background-size: cover;
  }
  &::after {
    content: "";

    opacity: 1;
    transition: 0.3s all linear;
    position: absolute;
    right: 0;
    bottom: -17px;
    width: 19px;
    height: 19px;
    background-image: url("../../assets/images/border.png");
    background-size: cover;
    transform: rotate(-90deg);
  }
}
.edit-btn {
  display: flex;
  background-color: #3279e3;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
