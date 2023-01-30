<template>
  <div class="content container">
    <div
      class="d-flex justify-content-center align-items-center flag-container"
      :class="`content__${props.order}`"
    >
      <div class="content__container col-md-6 col-sm-12">
        <img
          :src="props.image"
          :alt="'Picture'"
          class="mr-3"
        />
      </div>
      <div class="content__container col-md-6 col-sm-12 ">
         <div class="content__container-title">
            <h2>{{ props.title }}</h2>
        </div>
        <div class="content__container-text">
            <p>{{ props.text }}</p>
        </div>
        <div v-if="props.html_extra != ''">
            <p v-html="props.html_extra"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/scss/components/SimpleContent.scss';
const props = defineProps({
  image: String,
    text: String,
  html_extra: String,
  title: String,
  order: {
    type: String,
    default: "right-to-left",
  },
  responsive: {
    type: Boolean,
    default: false,
  },
});
</script>
