import { createRouter, createWebHistory } from "vue-router";
import { reactive, toRefs } from "vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import VarietyView from "../views/VarietyView.vue";
import ProductView from "../views/ProductView.vue";
const routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    component: LoginView,
    name: "login",
    meta: { requiresAuth: false },
  },
  {
    path: "/variedades",
    component: VarietyView,
    name: "variety",
    meta: { requiresAuth: true },
  },
  {
    path: "/variedades/:code",
    component: ProductView,
    name: "product",
    meta: { requiresAuth: true },
  },
];

const userAuth = () => {
  const state = reactive({
    authenticated: false,
  });
  let user_data = JSON.parse(localStorage.getItem("user"));
  if (
    user_data != undefined &&
    user_data.token != "" &&
    user_data.token != null
  ) {
    state.authenticated = true;
  }
  return { ...toRefs(state) };
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
// se autentifica cada ruta, si no tiene los parametros necesario se devuelve al login
const useRouteGuard = (to, from, next) => {
  const { authenticated } = userAuth();
  if (to.meta.requiresAuth && !authenticated.value) {
    next({ name: "login" });
  } else {
    next();
  }
};
router.beforeEach(useRouteGuard);
export default router;
