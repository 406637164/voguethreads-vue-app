<template>
  <router-view />
</template>

<style lang="scss">
@import './assets/all';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;

  scroll-behavior: smooth;
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh; /* 设置最小高度，确保 footer 在视口底部 */
  display: flex;
  position: relative;
  font-size: 1.25rem;
  flex-direction: column;
}
.container {
  margin-bottom: 100px;
}
.nav-link {
  font-weight: 4200;
}
.btn-square {
  border: 0;

  display: flex;
  padding: 5px;
  border: 0px solid;
  position: relative;
}
#member {
  border: transparent;
  background-color: transparent;
}
.nav-item {
  padding-top: 5px;
}
.navbar-member-badge {
  position: absolute;
  right: 0;
  top: 4px;
  width: 17px;

  background-color: red;
  position: absolute;
}
#cart {
  position: relative;
  border: transparent;
  background-color: transparent;
}
.cart-num {
  position: absolute;
  background-color: #db4949;
  color: #fff;
  font-size: 6px;
  padding-left: 3px;
  padding-right: 3px;
  height: 13px;
  top: 0;
  line-height: 1.1;
  border-radius: 50px;
}
.active {
  font-weight: bold;

  // border-bottom: 3px solid blue;
  // color: blue;
}
.tab-item {
  font-size: 1.5em;
  width: 0;
  flex-grow: 1;
  background-color: #ddd;
  padding: 10px;
  text-align: center;
  border: solid 1px #ddd;
}
.tab-item:hover {
  cursor: pointer;
}
.tabs > .active {
  background-color: white;
}
.btn-square {
  // margin-left: 5px;
  padding: 10px 20px;
}
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: 'Arvo', serif;
}

.page_404 img {
  width: 100%;
  line-height: 2rem;
}

.four_zero_four_bg {
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  padding: 10px;
}
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 10px;
  width: 100%;
}
</style>

<script>
import { ref, inject, provide, onMounted } from 'vue';
import ProductView from './views/ProuctView.vue';
export default {
  components: {
    ProductView,
  },

  // ,
  data() {
    return {
      cartTotal: 0,
    };
  },
  provide() {
    return {
      cartTotal: this.cartTotal,
    };
  },
  methods: {
    updateCartTotal(item) {
      this.cartTotal += item.count;
    },
    updateCarts(newCarts) {
      this.cartTotal = newCarts;
    },
    isActive(route) {
      return this.$route.path === route;
    },
  },
  created() {
    // this.$on('cart-item-added', this.updateCartTotal);
  },
};
</script>
