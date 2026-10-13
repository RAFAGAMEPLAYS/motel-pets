
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pets',
    },
    {
      path: '/pets',
      name: 'pets',
      component: () => import('../views/PetsView.vue'),
    },
    {
      path: '/pets/novo',
      name: 'addPet',
      component: () => import('../views/AddPetsView.vue'),
    },
     {
      path: '/pets/:id',
      name: 'detalhes-pet',
      component: () => import('../views/PetDetailsView.vue'),
    },
     {
      path: '/tutores',
      name: 'tutores',
      component: () => import('../views/TutorView.vue'),
    },
      {
      path: '/tutores/details/:id',
      name: 'tutores-detalhes',
      component: () => import('../views/TutorDetailsView.vue'),
    },
     {
      path: '/tutores/novo',
      name: 'tutores-new',
      component: () => import('../views/addTutorView.vue'),
    },
  ],
});

export default router;
