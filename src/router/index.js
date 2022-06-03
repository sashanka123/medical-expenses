import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("../components/NewClaim.vue"),
  },
  {
    path: "/asse",
    component: () => import("../components/SecondComp.vue"),
  },
  {
    path: "/medical_asses",
    component: () => import("../components/AddAssesment.vue"),
  },
  {
    path: "/medical_sheet",
    component: () => import("../components/MedicalSheet.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
