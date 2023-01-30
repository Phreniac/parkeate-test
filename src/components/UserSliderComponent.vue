<template>
  <div
    id="carouselControls"
    class="user-slider carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(user, i) in user_list"
        :key="i"
        :class="{ active: i === active_slide }"
      >
        <div class="row justify-content-center">
          <div class="col-4" v-for="(user_data, j) in user.user_slide" :key="j">
            <div class="user-info">
              <div class="d-flex justify-content-center">
                <img :src="user_data.image" class="rounded-circle" alt="" />
              </div>
              <div class="text-center">
                <h5>{{ user_data.name + ' '+user_data.lastname }}</h5>
                <p>{{ user_data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "@/assets/scss/components/userSlider.scss";

const active_slide = ref(0);
const user_list = ref([
  {
    user_slide: [
      {
        id: 1,
        name: "Jorge",
        lastname: "Ramirez",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nam vestibulum commodo dui, nec scelerisque turpis porttitor sollicitudin. 
        Cras quis augue a erat posuere dignissim tristique et nibh.`,
        image: "./src/assets/img/profile01.jpg",
      },
      {
        id: 2,
        name: "Hugo",
        lastname: "Castañeda",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nam vestibulum commodo dui, nec scelerisque turpis porttitor sollicitudin. 
      Cras quis augue a erat posuere dignissim tristique et nibh.`,
        image: "./src/assets/img/profile02.jpg",
      },
    ],
  },
  {
    user_slide: [
      {
        id: 3,
        name: "Ignacio",
        lastname: "Araneda",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nam vestibulum commodo dui, nec scelerisque turpis porttitor sollicitudin. 
      Cras quis augue a erat posuere dignissim tristique et nibh.`,
        image: "./src/assets/img/profile03.jpg",
      },
      {
        id: 4,
        name: "Ricardo",
        lastname: "Rojo",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nam vestibulum commodo dui, nec scelerisque turpis porttitor sollicitudin. 
      Cras quis augue a erat posuere dignissim tristique et nibh.`,
        image: "./src/assets/img/profile04.jpg",
      },
    ],
  },
]);
</script>
