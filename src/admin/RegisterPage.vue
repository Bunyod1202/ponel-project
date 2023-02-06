<template>
  <div class="register">
    <div class="card">
      <h2 class="card__title">Register</h2>
      <form @submit.prevent="register">
        <div>
          <p class="input-text">First name</p>
          <BaseInput
            standout="standout-bg-gray no-shadow"
            :placeholder="'Enter your ferst naem'"
            class="mobile-search-input"
            :ref="firstname.ref"
            required
            v-model="firstname.value"
            type="text"
          />
          <p class="err" v-if="firstname.error">
            {{ firstname.error.message }}
          </p>
        </div>
        <div>
          <p class="input-text">Last name</p>
          <BaseInput
            standout="standout-bg-gray no-shadow"
            :placeholder="'Enter your last name'"
            class="mobile-search-input"
            :ref="lastname.ref"
            required
            v-model="lastname.value"
            type="text"
          />
          <p class="err" v-if="lastname.error">{{ lastname.error.message }}</p>
        </div>
        <div>
          <p class="input-text">Email</p>
          <BaseInput
            standout="standout-bg-gray no-shadow"
            :placeholder="'Enter your email '"
            class="mobile-search-input"
            :ref="email.ref"
            required
            v-model="email.value"
            type="email"
          />
          <p class="err" v-if="email.error">{{ email.error.message }}</p>
        </div>
        <div>
          <p class="input-text">Password</p>
          <BaseInput
            standout="standout-bg-gray no-shadow"
            :placeholder="'Enter your password'"
            append
            class="mobile-search-input"
            :ref="password.ref"
            required
            v-model="password.value"
            :type="eyePassword ? 'password' : 'text'"
          >
            <template #append>
              <button class="input-button" @click="eyePassword = !eyePassword">
                <SolidEyeIcon />
              </button>
            </template>
          </BaseInput>
          <p class="err" v-if="password.error">{{ password.error.message }}</p>
        </div>
        <p class="user-err">{{ userErr }}</p>
        <div class="btn-group">
          <button class="btn-login" type="submit">Register</button>
        </div>
        <p class="link">
          Already have an accaount? <router-link to="login">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../components/UI/BaseInput";
import { RegisterApi } from "../API/API";
import { useForm } from "vue-hooks-form";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SolidEyeIcon from "../components/icons/SolidEyeIcon";

const router = useRouter();

const eyePassword = ref(true);
const userErr = ref("");

const { useField, handleSubmit } = useForm({
  defaultValues: {},
});

const email = useField("email", {
  rule: {
    type: "email",
    required: true,
  },
});
const password = useField("password", {
  rule: {
    required: true,
    min: 6,
    max: 10,
  },
});
const firstname = useField("firstname", {
  rule: {
    required: true,
    min: 3,
  },
});
const lastname = useField("lastname", {
  rule: {
    required: true,
    min: 3,
  },
});

const register = handleSubmit(async (data) => {
  const RegisterApiUser = async () => {
    const cardCasts = await RegisterApi(data).catch((err) => {
      if (err.response.status === 400) {
        userErr.value = "such a user exists";
      }
    });
    console.log(cardCasts);
    if (cardCasts.status === 201) {
      localStorage.setItem("token", cardCasts.data.accessToken);
      localStorage.setItem("user", JSON.stringify(cardCasts.data.user));

      router.push("/admin");
    }
  };
  RegisterApiUser();
});
</script>

<style lang="scss" scoped>
.register {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 100%;
  max-width: 594px;
  padding: 40px 73px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 29px #00000014;
  border-radius: 12px;
}
.card__title {
  text-align: center;
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
}
.cvadret-input {
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  padding: 20px 18px;
  margin-right: 20px;
  width: 100%;
}
.input-text {
  margin-top: 4px;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}
.btn-group {
  margin-top: 22px;
  display: flex;
  justify-content: center;
}
.btn-login {
  border: none;
  background-color: #3279e3;
  border-radius: 10px;
  padding: 13px 49px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
}
.link {
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-align: center;
}
.input-button {
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
}
.user-err {
  color: red;
  margin-top: 5px;
}
</style>
