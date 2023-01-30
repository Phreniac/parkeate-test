<template>
  <div class="banner-slider">
    <!-- Slider Carousel -->
    <div
      id="carouselIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          data-target="#carouselIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <!-- Slides -->
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(banner, i) in banner_data"
          :key="i"
          :class="{active : i === active_banneri }"
        >
          <img :src="banner.path" class="d-block w-100" alt="" />
        </div>
      </div>
      <!-- Controls -->
      <a
        class="carousel-control-prev"
        href="#carouselIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import "@/assets/scss/components/bannerSlider.scss";
const active_banneri = ref(0);
const banner_data = ref([
  {
    id: 0,
    name: "banner01",
    path: "./src/assets/img/rubik_banner01.jpg",
  },
  {
    id: 0,
    name: "banner02",
    path: "./src/assets/img/rubik_banner02.jpg",
  },
  {
    id: 0,
    name: "banner03",
    path: "./src/assets/img/rubik_banner03.jpg",
  },
]);
</script>
