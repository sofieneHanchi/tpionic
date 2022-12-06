import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import formP from "../views/FormP.vue";
import affichP from "../views/AffichageM.vue";
import EtudiantP from '@/views/Etudiants.vue';
import ModifierM from '@/views/ModifierM.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Formulaire',
    component: formP,
    props: true
  },
  {
    path: '/affichage/:nom/:prenom/:civilite/:specialite/:Tmatiere*',
    name: 'affichage',
    component: affichP,
    props: true
  },
  {
    path: '/etudiants',
    name: 'EtudiantP',
    component: EtudiantP,
    props: false
  },
  {
    path: '/etudiants/:id',
    name: 'modifier',
    component: ModifierM,
    props: true
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
