import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/product/discount',
    redirect: '/product/discount/page=1', // 默认重定向到 /product/page=1
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/ProuctView.vue'),
    children: [
      {
        path: 'page=:page', // 子路由示例：/product/page=1
        name: 'product',
        component: () =>
          import(/* webpackChunkName: "product" */ '../views/ProuctView.vue'),
      },
    ],
  },
  {
    path: '/product/boy',
    redirect: '/product/boy/page=1', // 默认重定向到 /product/page=1
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/ClothView.vue'),
    children: [
      {
        path: 'page=:page', // 子路由示例：/product/page=1
        name: 'boy',
        component: () =>
          import(/* webpackChunkName: "product" */ '../views/ClothView.vue'),
      },
    ],
  },
  {
    path: '/product/:productName',
    name: 'ProductDetail',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/ProductItem.vue'),
  },
  {
    path: '/product/shirt',
    redirect: '/product/shirt/page=1', // 默认重定向到 /product/page=1
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/ShirtView.vue'),
    children: [
      {
        path: 'page=:page', // 子路由示例：/product/page=1
        name: 'shirt',
        component: () =>
          import(/* webpackChunkName: "product" */ '../views/ShirtView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/cart',
    component: import('../views/CartView.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: import('../views/OrderView.vue'),
  },

  {
    path: '/user',
    name: 'user',
    component: () => import('../views/EditUserView.vue'),
  },
  {
    path: '/userOrder',
    name: 'userOrder',
    component: () => import('../views/MyOrderView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
