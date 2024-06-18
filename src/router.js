import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';
import Posts from './components/Posts.vue';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import PhotoDetail from './components/PhotoDetail.vue';

const routes = [
  {
    path: '/todos',
    component: TodoList
  },
  { path: '/posts', component: Posts },
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: AlbumDetail, props: true },
  { path: '/photo/:id', component: PhotoDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
