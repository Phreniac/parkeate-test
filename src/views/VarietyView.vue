<template>
  <div class="variety">
    <Navbar />
    <div class="container variety__container">
      <div class="variety__searcher">
        <input type="text" placeholder="Buscar" />
        <span class="variety_searcer-icon"></span>
      </div>
      <div class="variety__title">
        <h2>Variedades</h2>
      </div>
      <div class="variety__product-list d-flex flex-wrap justify-content-center">
        <div
          class="variety__product col-md-3 col-sm-12"
          v-for="(product, i) in product_list"
          :key="i"
          role="button"
          @click.prevent="redirectToDetail(product.code)"
        >
          <div class="variety__product-image">
            <img :src="product.image" alt="" />
          </div>
          <div class="variety__product-name">
            <h4>{{ product.name }}</h4>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "@/components/NavbarComponent.vue";
import Footer from "@/components/FooterComponent.vue";
import { useProductStore } from "@/stores/product";
import "@/assets/scss/variety.scss";

const route = useRouter();
const products = useProductStore();
const product_list = ref(products.product_list);
const redirectToDetail = (code_) => {
  route.push({ name:  'product', params:{code:code_}})
}
</script>
