<template>
  <main>
    <Navbar />
    <BannerSlider />
    asd
    <div class="container" v-for="(content, i) in content_data" :key="i">
      <SimpleContent
        :text="content.text"
        :title="content.title"
        :order="content.order"
        :image="content.image"
        :html_extra="content.html_extra"
      />
    </div>
    <UserSlider />
    <div class="container home__container-content">
      <div class="home__floating-content">
        <p>
          El <b>cubo de Rubik</b> fascinó a gente de todo el mundo y se volvió uno de
          los juegos más populares de América a mediados de la década de 1970.
          <br /><br />
          En solo siete años las ventas mundiales habían superado los <b> treinta
          millones de unidades;</b> un conocido comprador en el emporio de juguetes
          de FAO Scwarz en Nueva York señaló que se había convertido en "el
          juguete más solicitado".<br /><br />
          Algunos incluso sostenían que podía llevar a un comportamiento
          obsesivo.
        </p>
      </div>
      <div class="home__container-image">
        <img :src="image_content" alt="" />
      </div>
      <div class="home__static-content">
        <p>
          El <b>cubo de Rubik</b> fascinó a gente de todo el mundo y se volvió uno de
          los juegos más populares de América a mediados de la década de 1970.
          <br /><br />
          En solo siete años las ventas mundiales habían superado los <b> treinta
          millones de unidades;</b> un conocido comprador en el emporio de juguetes
          de FAO Scwarz en Nueva York señaló que se había convertido en "el
          juguete más solicitado".<br /><br />
          Algunos incluso sostenían que podía llevar a un comportamiento
          obsesivo.
        </p>
      </div>
    </div>
    <div class="footer-spacer" style="height:200px; width: 100%;"></div>
    <Footer />
  </main>
</template>
<script setup>
import { ref } from "vue";
import Navbar from "@/components/NavbarComponent.vue";
import BannerSlider from "@/components/BannerSliderComponent.vue";
import Footer from "@/components/FooterComponent.vue";
import SimpleContent from "@/components/SimpleContentComponent.vue";
import UserSlider from "@/components/UserSliderComponent.vue";
import "@/assets/scss/home.scss";

const image_content = ref("./src/assets/img/content01.jpg");
const content_data = ref([
  {
    id: 0,
    title: "Cubo de Rubik",
    text: `El Cubo de Rubik es un rompecabezas mecánico tridimensional creado por el escultor y profesor 
    de arquitectura húngaro Ernő Rubik en 1974. Originalmente llamado «cubo mágico»,
    el rompecabezas fue licenciado por Rubik para ser vendido por Ideal Toy Company en 1980,
    año en el cual ganó el premio alemán a Mejor Juego del Año en la categoría de mejor 
    rompecabezas.Hasta 2020 se vendieron 450 millones de cubos en todo el mundo, convirtiéndolo 
    no solo en el rompecabezas más vendido, sino que es considerado, en general, el juguete más vendido del mundo.
    `,
    html_extra: "",
    order: "right-to-left",
    image: "./src/assets/img/content02.jpg",
  },
  {
    id: 1,
    title: "",
    text: "Un cubo de Rubik clásico posee seis colores uniformes (tradicionalmente blanco, rojo, azul, naranja, verde y amarillo).11​ Un mecanismo de ejes permite a cada cara girar independientemente, mezclando así los colores. Para resolver el rompecabezas, cada cara debe volver a quedar en un solo color.",
    html_extra: `<div class="color-list w-100 d-flex justify-content-center">
      <div class="color-list__container d-flex">
        <div class="color-list__item green mr-1 border rounded"></div>
        <div class="color-list__item white mr-1 border rounded"></div>
        <div class="color-list__item red mr-1 border rounded"></div>
        <div class="color-list__item yellow mr-1 border rounded" ></div>
        <div class="color-list__item blue mr-1 border rounded"></div>
        <div class="color-list__item orange mr-1 border rounded"></div>
      </div>
    </div>`,
    order: "left-to-right",
    image: "./src/assets/img/rubik_desarmado.jpg",
  },
]);
</script>
