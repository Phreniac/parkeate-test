<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container d-flex">
      <!-- Logo -->
      <div class="d-flex align-items-center navbar__container-logo col-md-2">
        <a class="navbar-brand" href="#" @click.prevent="redirectTo('home')"
          ><img :src="logo" alt=""
        /></a>
        <h3>Rubik</h3>
      </div>

      <!-- Burger Button -->
      <button class="navbar-toggler" type="button" @click.prevent="openNav()">
        <span class="navbar-toggler-icon"></span>
        
      </button>

      <!-- Navigation Links -->
      <div
        class="navbar-collapse col-md-5 justify-content-end navbar__container-item"
        id="navbarNav"
        v-show="toggle_nav"
      >
        <ul class="navbar-nav ml-auto">
          <li class="navbar__nav-item">
            <a
              class="navbar__nav-link"
              href="#"
              @click.prevent="redirectTo('home')"
              >Inicio</a
            >
          </li>
          <li class="navbar__nav-item">
            <a class="navbar__nav-link" href="#">Historia</a>
          </li>
          <li class="navbar__nav-item">
            <a class="navbar__nav-link" href="#">Como se arma</a>
          </li>
          <li class="navbar__nav-item">
            <a
              class="navbar__nav-link"
              href="#"
              @click.prevent="redirectTo('variety')"
              >Variedades</a
            >
          </li>
          <li class="navbar__nav-item dropdown">
            <a
              class="nav-link user-name dropdown-toggle"
              href=""
              id="navbarDropdown"
              role="button"
              @click.prevent="dropDown()"
            >
              {{ state.user.name }}
            </a>
            <div
              class="navbar__dropdown-menu"
              :class="state.toggle_drop_down ? 'active' : ''"
            >
              <a class="dropdown-item" href="#">Perfil</a>
              <a class="dropdown-item" href="#">Historial</a>
              <a class="dropdown-item" href="" @click.prevent="logout()"
                >Cerrar Sesión</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRouter } from "vue-router";
import "@/assets/scss/navbar.scss";

const logo = ref("../src/assets/img/logo.png");
const toggle_drop_down = ref(false);
const toggle_nav = ref(false);

const state = reactive({
  user: "",
  toggle_drop_down,
  toggle_nav
});
const getUserData = () => {
  state.user = JSON.parse(localStorage.getItem("user"));
};
const openNav = () => {
  if (state.toggle_nav) {
    state.toggle_nav = false;
  } else {
    state.toggle_nav = true;
  }
}

const route = useRouter();

const redirectTo = (path_name) => {
  route.push({ name: path_name });
};
const dropDown = () => {
  if (state.toggle_drop_down) {
    state.toggle_drop_down = false;
  } else {
    state.toggle_drop_down = true;
  }
};
const logout = () => {
  localStorage.clear();
  redirectTo("login");
};
onMounted(() => {
  getUserData();
});
</script>
