<template>
  <div class="admin-product">
    <div class="admin-product-header">
      <h2 class="product-title">Products</h2>
      <q-btn color="primary" @click="confirm = true" label="add product" />
      <q-dialog v-model="confirm" persistent>
        <q-card class="card">
          <q-toolbar class="card-toolbar">
            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
          <p class="add-product-title">Add product</p>
          <q-card-section class="row items-center">
            <form @submit.prevent="addProduct">
              <div class="add-product">
                <div class="">
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your img url'"
                    class="mobile-search-input"
                    required
                    v-model="img_url"
                    type="text"
                  />
                  <div class="group-select">
                    <BaseSelect
                      prepend
                      standout="standout-bg-gray no-shadow"
                      :options="options"
                      class="mobile-search-input"
                      :placeholder="'Enter your category'"
                      v-model="product_category"
                    />
                    <span class="paddnig-box"></span>
                    <BaseSelect
                      prepend
                      standout="standout-bg-gray no-shadow"
                      :options="option"
                      class="mobile-search-input"
                      :placeholder="'Enter your type'"
                      v-model="product_type"
                    />
                  </div>
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your product name'"
                    class="mobile-search-input"
                    required
                    v-model="product_name"
                    type="text"
                  />
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your product price'"
                    class="mobile-search-input"
                    required
                    v-model="product_price"
                    type="text"
                  />
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your kv'"
                    class="mobile-search-input"
                    required
                    v-model="product_kv"
                    type="number"
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
      <q-dialog v-model="editconfirm" persistent>
        <q-card class="card">
          <q-toolbar class="card-toolbar">
            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
          <p class="add-product-title">Edit product</p>
          <q-card-section class="row items-center">
            <form @submit.prevent="addProduct">
              <div class="add-product">
                <div class="">
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your img url'"
                    class="mobile-search-input"
                    required
                    v-model="img_url"
                    type="text"
                  />
                  <div class="group-select">
                    <BaseSelect
                      prepend
                      standout="standout-bg-gray no-shadow"
                      :options="options"
                      class="mobile-search-input"
                      :placeholder="'Enter your category'"
                      v-model="product_category"
                    />
                    <span class="paddnig-box"></span>
                    <BaseSelect
                      prepend
                      standout="standout-bg-gray no-shadow"
                      :options="option"
                      class="mobile-search-input"
                      :placeholder="'Enter your type'"
                      v-model="product_type"
                    />
                  </div>
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your product name'"
                    class="mobile-search-input"
                    required
                    v-model="product_name"
                    type="text"
                  />
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your product price'"
                    class="mobile-search-input"
                    required
                    v-model="product_price"
                    type="text"
                  />
                  <BaseInput
                    standout="standout-bg-gray no-shadow"
                    :placeholder="'Enter your kv'"
                    class="mobile-search-input"
                    required
                    v-model="product_kv"
                    type="number"
                  />
                </div>
              </div>
              <q-btn
                flat
                label="Edit product"
                type="submit"
                color="primary"
                v-close-popup
              />
            </form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <div class="card-group">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Quyosh panel" />
          <q-tab name="alarms" label="Suv isitigich panel" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <!-- <div class="text-h6">Quyosh panel</div> -->
            <table class="table">
              <thead class="table-head">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>kvadrat</th>
                  <th>edit</th>
                </tr>
              </thead>
              <tr v-for="item in dataSun" :key="item">
                <td>
                  <img
                    :src="item.img_url"
                    width="100"
                    height="100"
                    :alt="item.product_name"
                  />
                </td>
                <td>{{ item.product_name }}</td>
                <td>{{ item.product_price }}</td>
                <td>{{ item.product_category.label }}</td>
                <td>{{ item.product_kv }}</td>
                <td>
                  <q-btn
                    color="secondary"
                    class="edit-btn"
                    @click="() => editProduct(item.id)"
                    >Edit</q-btn
                  ><q-btn
                    color="red"
                    class="del-btn"
                    @click="() => delProduct(item.id)"
                    >Delete</q-btn
                  >
                </td>
              </tr>
            </table>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <!-- <div class="text-h6">Suv isitigich panel</div> -->
            <table class="table">
              <thead class="table-head">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>kvadrat</th>
                  <th>edit</th>
                </tr>
              </thead>
              <tr v-for="item in dataWater" :key="item">
                <td>
                  <img
                    :src="item.img_url"
                    width="100"
                    height="100"
                    :alt="item.product_name"
                  />
                </td>
                <td>{{ item.product_name }}</td>
                <td>{{ item.product_price }}</td>
                <td>{{ item.product_category.label }}</td>
                <td>{{ item.product_kv }}</td>
                <td>
                  <q-btn
                    color="secondary"
                    class="edit-btn"
                    @click="() => editProduct(item.id)"
                    >Edit</q-btn
                  ><q-btn
                    color="red"
                    class="del-btn"
                    @click="() => delProduct(item.id)"
                    >Delete</q-btn
                  >
                </td>
              </tr>
            </table>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import {
  AddProductApi,
  DelProductApi,
  EditProductApi,
  GetCategoreApi,
  GetProductApi,
  GetProductApiId,
} from "src/API/API";
import { ref } from "vue";
import BaseInput from "../UI/BaseInput";
import BaseSelect from "../UI/BaseSelect";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const user = JSON.parse(localStorage.getItem("user"));
const dataSun = ref([]);
const dataWater = ref([]);

const confirm = ref(false);
const editconfirm = ref(false);
const tab = ref("mails");
const img_url = ref("");
const product_name = ref("");
const product_price = ref("");
const product_kv = ref("");
const product_category = ref(null);
const product_type = ref(null);
let datas = [];
let datares = [];
let num = ref(0);
const options = ref([]);
const option = ref([
  {
    label: "Quyosh panel",
    id: 1,
  },
  {
    label: "Suv isitgich panel",
    id: 2,
  },
]);

options.value.forEach((item) => {
  console.log(item);
});

const getCategoreApi = async () => {
  const cardCasts = await GetCategoreApi(user.id);
  console.log(cardCasts);
  if (cardCasts.status === 200) {
    datas = cardCasts.data;
    options.value = [...datas];
    datas.forEach((item) => {
      let obj = {
        label: item.productName,
        id: item.id,
      };
      datares.push(obj);
      options.value = datares;
    });
  }
};
getCategoreApi();
const getProductApiSun = async () => {
  const cardCasts = await GetProductApiId(1);
  console.log(cardCasts);
  if (cardCasts.status === 200) {
    dataSun.value = cardCasts.data;
  }
};
getProductApiSun();

const getProductApi = async () => {
  const cardCasts = await GetProductApiId(2);
  console.log(cardCasts);
  if (cardCasts.status === 200) {
    dataWater.value = cardCasts.data;
  }
};
getProductApi();

const addProduct = () => {
  const RegisterApiUser = async () => {
    const cardCasts = await AddProductApi({
      img_url: img_url.value,
      product_name: product_name.value,
      product_price: product_price.value,
      product_kv: product_kv.value,
      product_category: product_category.value,
      product_type: product_type.value,
    });
    console.log(cardCasts);
    if (cardCasts.status === 201) {
      toast.success("Add product success!", {
        autoClose: 2000,
      });
      getProductApi();
    }
  };
  RegisterApiUser();
};

const delProduct = (id) => {
  const delProductApi = async () => {
    const cardCasts = await DelProductApi(id);
    console.log(cardCasts);
    if (cardCasts.status === 200) {
      toast.success("Delete product success!", {
        autoClose: 2000,
      });
      getProductApi();
    }
  };
  delProductApi();
};

const editProduct = (id) => {
  num.value = id;
  editconfirm.value = true;
};
const editProductApi = () => {
  const editProduct = async () => {
    const cardCasts = await EditProductApi(
      {
        img_url: img_url.value,
        product_name: product_name.value,
        product_price: product_price.value,
        product_kv: product_kv.value,
        product_category: product_category.value,
        product_type: product_type.value,
      },
      num.value
    );
    console.log(cardCasts);
    if (cardCasts.status === 200) {
      toast.success("Edit product success!", {
        autoClose: 2000,
      });
      getProductApi();
    }
  };
  editProduct();
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
.card-group {
  height: 85vh;
  overflow: auto;
  position: relative;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #3279e3;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #265cac;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
.edit-btn {
  margin-right: 20px;
}
.card {
  width: 600px;
  background-color: #f7f7f7;
}
.mobile-search-input {
  margin-bottom: 15px;
  width: 100%;
}
.card-toolbar {
  display: flex;
  align-items: center;
  justify-content: end;
}
.add-product {
  width: 100% !important;
}
form {
  width: 100%;
}
.group-select {
  display: flex;
}
.paddnig-box {
  display: block;
  width: 30px;
}
.add-product-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
