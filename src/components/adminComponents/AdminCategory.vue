<template>
  <div class="admin-product">
    <div class="admin-product-header">
      <h2 class="product-title">Category</h2>
      <q-btn color="primary" @click="confirm = true" label="add product" />
      <q-dialog v-model="confirm" persistent>
        <q-card class="card">
          <q-card-section class="row items-center">
            <form @submit.prevent="addCategory">
              <div class="add-product">
                <div class="">
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your product name'"
                    class="mobile-search-input"
                    required
                    :ref="product_name.ref"
                    v-model="product_name"
                    type="text"
                  />
                </div>
              </div>
              <q-btn
                flat
                label="Add product"
                type="submit"
                color="primary"
                v-close-popup
              />
            </form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="confirmEdit" persistent>
        <q-card class="card">
          <q-card-section class="row items-center">
            <form @submit.prevent="CategoryEdit">
              <div class="add-product">
                <div class="">
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your product name'"
                    class="mobile-search-input"
                    required
                    :ref="product_name.ref"
                    v-model="product_name"
                    type="text"
                  />
                </div>
              </div>
              <q-btn
                flat
                label="Add product"
                type="submit"
                color="primary"
                v-close-popup
              />
            </form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Edit</th>
      </tr>
      <tr v-for="item in data" :key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.productName }}</td>
        <td>
          <q-btn
            color="secondary"
            class="edit-btn"
            @click="() => editCategorys(item.id)"
            >Edit</q-btn
          ><q-btn
            color="red"
            @click="() => delCategorys(item.id)"
            class="del-btn"
            >Delete</q-btn
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import {
  AddCategoreApi,
  DelCategoreApi,
  EditCategoreApi,
  GetCategoreApi,
} from "src/API/API";
import { ref } from "vue";
import BaseInput from "../UI/BaseInput";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const data = ref([]);
const confirm = ref(false);

const confirmEdit = ref(false);
const product_name = ref("");

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
const num = ref(0);
//1 edit Category
const CategoryEdit = () => {
  const editCategoreApi = async () => {
    const cardCasts = await EditCategoreApi(
      {
        productName: product_name.value,
        userId: user.id,
      },
      num.value
    );
    console.log(cardCasts);
    if (cardCasts.status === 200) {
      product_name.value = "";
      toast.success("Edit category success!", {
        autoClose: 2000,
      });
      getCategoreApi();
    }
  };
  editCategoreApi();
};

const editCategorys = (id) => {
  console.log(id);
  confirmEdit.value = true;
  num.value = id;
};
//3 delete category
const delCategorys = (id) => {
  const addCategoreApi = async () => {
    const cardCasts = await DelCategoreApi(id);
    console.log(cardCasts);
    if (cardCasts.status === 200) {
      toast.success("Delete category success!", {
        autoClose: 2000,
      });
      getCategoreApi();
    }
  };
  addCategoreApi();
};
//2 get category
const getCategoreApi = async () => {
  const cardCasts = await GetCategoreApi(user.id);
  console.log(cardCasts);
  if (cardCasts.status === 200) {
    data.value = cardCasts.data;
    product_name.value = "";
  }
};
getCategoreApi();
//4 add category
const addCategory = () => {
  const addCategoreApi = async () => {
    const cardCasts = await AddCategoreApi({
      productName: product_name.value,
      userId: user.id,
    });
    console.log(cardCasts);
    if (cardCasts.status === 201) {
      toast.success("Add category success!", {
        autoClose: 2000,
      });
      getCategoreApi();
      product_name.value = "";
    }
  };
  addCategoreApi();
};
</script>

<style lang="scss" scoped>
.admin-product {
  width: 80%;
  padding: 25px;
}
.admin-product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-title {
  font-size: 25px;
  font-weight: 700;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
.edit-btn {
  margin-right: 20px;
}
.card {
  background-color: #f7f7f7;
}
.mobile-search-input {
  margin-bottom: 15px;
}
</style>
