<template>
  <div class="product">
    <Navbar />
    <div class="container">
        <SimpleContent
        :text="product.description"
        :title="product.name"
        :order="'left-to-right'"
        :image="product.image"
      />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import { useProductStore } from "@/stores/product";
import { useRoute } from "vue-router";
import Navbar from "@/components/NavbarComponent.vue";
import Footer from "@/components/FooterComponent.vue";
import SimpleContent from "@/components/SimpleContentComponent.vue";
import "@/assets/scss/product.scss";

const products = useProductStore();
const route = useRoute();
const product = ref({});
const state = reactive({
  product,
});
onMounted(() => {
  if (
    route.params.code != undefined &&
    route.params.code != "" &&
    route.params.code != null
  ) {
    state.product = products.getProductById(route.params.code);
  }
});
</script>
