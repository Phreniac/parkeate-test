<template>
  <div class="login">
    <div class="login__background-container">
      <div
        class="login__bg-image"
        :style="{ backgroundImage: `url(${bg_image})` }"
      ></div>
    </div>
    <div class="login__form-container">
      <div class="login__title-container">
        <h2>¡Bienvenid@!</h2>
      </div>
      <form>
        <div class="login__input-container">
          <label for="username">Nombre de usuario:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="login__input-container">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <div class="login__container-button">
          <button
            type="submit"
            @mouseover="changeButtonColorIndex(active_colori)"
            :class="getButtonBGC()"
            @click.prevent="login()"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const username = ref("user1234");
const password = ref("useruser");
const active_colori = ref(0);
const colors = ref(["white", "red", "blue", "green", "orange", "yellow"]);
const bg_image = "./src/assets/img/rubik_bg.jpg";
const router = useRouter();

const login = () => {
  if (username.value == "user1234" && password.value == "useruser") {
    let user_data = {
      name: "user1234",
      lastname: "user",
      token: "1234",
      date: "29/01/2023",
    };
    localStorage.setItem("user", JSON.stringify(user_data));
    router.push({ name: "home" });
  }
};
const changeButtonColorIndex = (index) => {
  if (index >= colors.value.length - 1) {
    active_colori.value = 0;
  } else {
    active_colori.value = index + 1;
  }
};
const getButtonBGC = () => {
  return colors.value[active_colori.value];
};
</script>
