<template>
  <footer class="footer d-flex justify-content-start">
    <div class="container d-flex align-items-center">
      <div class="footer__logo">
        <img :src="logo" alt="logo" />
      </div>
      <div class="footer__list">
        <h2>Rubik</h2>
        <ul>
          <li><a class="" href="#">Historial</a></li>
          <li><a class="" href="#">Como se arma</a></li>
          <li><a class="" href="#">Variedades</a></li>
          <li><a class="" href="#">Perfil</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__floating-logos">
      <div class="footer_logo">
        <img src="./src/assets/img/twitter_logo.png/" alt="" />
      </div>
      <div class="footer_logo">
         <img src="./src/assets/img/facebook_logo.png/" alt="" />
      </div>
      <div class="footer_logo">
         <img src="./src/assets/img/ig_logo.png/" alt="" />
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from "vue";
import "@/assets/scss/components/footer.scss";

const logo = ref("../src/assets/img/logo.png");

</script>
