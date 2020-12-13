import { createRouter, createWebHistory } from 'vue-router';
import MySnippets from '@/views/MySnippets.vue';
import SnippetDetails from '@/views/SnippetDetails.vue';
import AddOrUpdateSnippet from '@/views/AddOrUpdateSnippet.vue';
import Login from '@/views/Login.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/my-snippets',
    name: 'MySnippets',
    component: MySnippets,
  },
  {
    path: '/snippet/:id',
    name: 'SnippetDetail',
    component: SnippetDetails,
    props: true,
  },
  {
    path: '/new-snippets',
    name: 'NewSnippet',
    component: AddOrUpdateSnippet,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
