<template>
  <header ref="header">
    <a href="/" class="logo">VogueThreads</a>
    <ul class="navlists">
      <li><a href="/">首頁</a></li>
      <li @mouseenter="showSubMenu" @mouseleave="hideSubMenu">
        <a href="#">服飾</a>
        <div class="sub-menu" v-show="isSubMenuVisible">
          <a href="/product/discount">促銷商品</a>
          <a href="/product/boy">秋季上衣</a>
          <a href="/product/shirt">夏季短袖</a>
        </div>
      </li>
      <li><a href="/about">關於VogueThreads</a></li>
    </ul>
    <div class="header-icons">
      <a class="btn-square" href="/cart">
        <button id="cart">
          <span class="bi bi-cart"></span>
          <span class="cart-num badge-danger" v-text="cartTotal"> </span>
        </button>
      </a>
      <a class="btn-square" href="/user">
        <button id="member">
          <span class="bi bi-person-circle"></span>
        </button>
      </a>
      <!-- <a href=""><i class="bx bxs-shopping-bag-alt"></i></a> -->
    </div>
  </header>

  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img
          style="height: 60px"
          src="../assets/voguethreads-low-resolution-logo-black-on-transparent-background.png"
          alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarScroll"
      >
        <ul class="navbar-nav">
          <li
            class="nav-item ml-2 dropdown"
            :class="{ active: $route.path === '/product/page=1' }"
          >
            <a class="nav-link" data-bs-toggle="dropdown" href="#">產品</a>
            
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/product">促銷商品</a>
              </li>
              <li>
                <a class="dropdown-item" href="/product/boy">秋季上衣</a>
              </li>
              <li>
                <a class="dropdown-item" href="/product/shirt">夏季短袖</a>
              </li>
              
            </ul>
          </li>
          <li
            class="nav-item ml-2"
            :class="{ active: $route.path === '/about' }"
          >
            <a class="nav-link" href="/about">關於VogueThreads</a>
          </li>
          <li></li>
          <li
            class="nav-item ml-2"
            :class="{ active: $route.path === '/login' }"
          >
            <a class="btn-square" href="/user">
              <button id="member">
                <span class="bi bi-person-circle"></span>
              </button>
            </a>
          </li>

          <li
            class="nav-item ml-2"
            :class="{ active: $route.path === '/cart' }"
          >
            <a class="btn-square" href="/cart">
              <button id="cart">
                <span class="bi bi-cart"></span>
                <span class="cart-num badge-danger" v-text="cartTotal"> </span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>
<script>
// import modalMixin from '@/mixins/modalMixin';
import axios from 'axios';
export default {
  name: 'couponModal',
  props: ['cartTotal'],
  data() {
    return {
      cartTotals: this.cartTotal,
      isSubMenuVisible: false,
    };
  },
  watch: {
    cartTotal(newCartTotal) {
      // 在 cartTotal 变化时更新文本内容
      // this.updateTextContent(newCartTotal);
      console.log(newCartTotal);
      this.$emit('cartTotal', newCartTotal);
    },
  },
  methods: {
    async getCart() {
      this.$emit('cartTotal', this.cartTotals);
    },
    showSubMenu() {
      this.isSubMenuVisible = true;
    },
    hideSubMenu() {
      this.isSubMenuVisible = false;
    },
  },
  mounted() {
    const header = this.$refs.header;
    window.addEventListener('scroll', () => {
      header.classList.toggle('sticky', window.scrollY > 0);
    });
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss">
@import './assets/all';
@import url('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
@import url('https://fonts.googleapis.com/css2?family=Catamaran&family=Inter&family=Kalam:wght@400;700&family=Niramit:wght@600&family=Noto+Sans+TC&family=Open+Sans:wght@300;400;600&display=swap');
li {
  font-size: 1.25rem;
  text-decoration: none;
}
.navbar-nav .dropdown:hover .dropdown-menu {
  display: block;
}

:root {
  --bg-color: white;
  --text-color: black;
  --main-color: #c8815f;
  --big-font: 4.5rem;
  --h2-font: 3.3rem;
  --h3-font: 2rem;
  --normal-font: 1rem;
}
body {
  background: var(--bg-color);
  color: var(--text-color);
}
ol,
ul {
}
header {
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  // padding: 20px 14%;
  padding: 8px 14%;
  transition: all 0.35s ease;
}
.logo {
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--text-color);
}
@media screen and (max-width: 768px) {
  .navlists {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .boy {
    margin-top: 40vh;
  }
  .nav-active {
    display: flex;
  }

  .menu-toggle {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }

  // .header-icons {
  //   display: none;
  // }
  .header-icons {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 140px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
}
.navlists {
  display: flex;
  margin-bottom: 0;
}
.navlists a {
  color: var(--text-color);
  font-weight: 600;
  padding: 10px 25px;
  color: var(--text-color);
  transition: all 1s ease;
  text-decoration: none;
}

.navlists a:hover {
  color: var(--main-color);
}
.header-icons {
  display: flex;
  font-size: 20px;
  color: var(--text-color);
  margin-right: 20px;
  transition: all 0.36s ease;
}

.header-icons i:hover {
  color: var(--main-color);
}
header.sticky {
  background: var(--bg-color);
  padding: 8px 14%;
  box-shadow: 0px 0px 10px rgb(0 0 0/10%);
}
.ol,
ul,
dl {
  margin-bottom: 0px;
}
.nav-item:hover .sub-menu {
  display: flex;
  position: absolute;
  background-color: #fff; /* 背景颜色，可以根据需要进行调整 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影效果，可选 */
  z-index: 1; /* 确保下拉菜单位于其他内容之上 */
}
.sub-menu {
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%; /* 使下拉菜单位于服饰链接的下方 */
  left: 0;
  width: 100%; /* 让下拉菜单占满整个宽度 */
  padding: 10px;
  text-align: center;
}
/* 样式化 .sub-menu 中的链接 */
.sub-menu a {
  text-decoration: none; /* 去除下划线 */
  color: #333; /* 文字颜色，可根据需要进行调整 */
  display: inline-block;
  padding: 10px; /* 可根据需要进行调整 */
  text-align: center; /* 文字居中，可选 */
  transition: background-color 0.3s; /* 添加过渡效果，可选 */
}

/* 链接悬停时改变背景颜色，可选 */
.navlists :hover .sub-menu {
  position: absolute;
  z-index: 9999;
  top: 55px;
  background-color: #fff;
  text-align: center;
  left: 0px;
  padding-left: 10px;
  width: 100vw;
  padding: 10px;
  display: block;
}
</style>
