<template>
  <Navbar :cartTotal="cartTotal"></Navbar>
  <div v-if="isLoading" class="loading-overlay">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-swiper-autoplay="2000">
        <img src="http://localhost:3000/5.jpg" alt="Slide 1" />

        <span class="slide-txt">Modern Jersey </span>
      </div>
      <div class="swiper-slide" data-swiper-autoplay="2000">
        <img src="http://localhost:3000/6.jpg" alt="Slide 2" />
        <span class="slide-txt"> Trendy Shirt </span>
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </div> -->
  <div class="boy">
    <div class="txt">促銷商品</div>
  </div>
  <div class="container">
    <div class="container-fluid searchBar-container">
      <form class="d-flex justify-content-end" role="search">
        <div
          class="btn-group position-ralative"
          role="group"
          aria-label="Basic example"
        >
          <input
            v-model="searchText"
            class="form-control me-2"
            type="search"
            @input="handleInput"
            placeholder="找尋產品"
            aria-label="Search"
          />

          <div class="searchlist">
            <div v-if="searchText.length > 0">
              <div v-for="result in searchResults" :key="result" class="d-flex">
                <a
                  :href="`http://localhost:8080/product/${result.name}`"
                  class="searchResults"
                >
                  <img :src="result.image" alt="" class="searchimg" />

                  <span> {{ result.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <NoFound v-if="isnofound"></NoFound>

    <div class="row">
      <div class="product-list">
        <div class="box" v-for="item in products">
          <!-- Use col-12 for extra small screens, col-sm-6 for small screens, col-md-4 for medium screens, col-lg-3 for large screens -->
          <!-- <a :href="`/product/${item.name}`">
            <img
              height="100%"
              alt=""
              :src="item.image"
              class="img-fluid mb-3"
            />

            <div class="h5">{{ item.name }}</div>
          </a>
          <del class="h6">原價{{ item.price }}元</del>
          <div class="h5">現在只要 {{ item.discount * item.price }}元</div>

          <hr />
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="addToCart(item, 1)"
          >
            加到購物車
          </button> -->
          <a :href="`/product/${item.name}`" class="productlink">
            <img :src="item.image" alt="" />
            <h5>{{ item.name }}</h5>
            <h6>
              <del>原價 NT{{ item.price }}元</del>
              <i class="bx bxs-right-arrow-alt"></i
              ><span class="discounts">打{{ item.discount * 10 }}折</span>
            </h6>
            <h6>優惠價 NT{{ item.discount * item.price }}元</h6>
          </a>

          <div class="cart">
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addToCart(item, 1)"
            >
              <i class="bx bx-shopping-bag"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <nav
      aria-label="..."
      v-if="currentpage <= totalPage"
      class="pagination-container"
    >
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            :class="{ disabled: currentpage === 1 }"
            @click="setPage(currentpage - 1)"
            >Previous</a
          >
        </li>

        <li class="page-item" aria-current="page" v-for="item in totalPage">
          <a
            class="page-link"
            @click="setPage(item)"
            href="#"
            :class="{ active: currentpage == item }"
            >{{ item }}</a
          >
        </li>

        <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->

        <li class="page-item">
          <a
            class="page-link"
            href="#"
            @click="setPage(+this.$route.params.page + 1)"
            :class="{ disabled: currentpage === totalPage }"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>

  <footer class="footer">
    <p>&copy; 2023 Your Website. All rights reserved.</p>
  </footer>
</template>

<script>
// import 'swiper/swiper-bundle.css';
// import Swiper from 'swiper';
import axios from 'axios';
import NoFound from '@/components/NoFound.vue';
import { ref, inject, provide, onMounted } from 'vue';
import Swal from 'sweetalert2';
import Navbar from '../components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NoFound,
    Navbar,
  },
  data() {
    return {
      products: [],
      isLoading: false,
      currentpage: +this.$route.params.page,
      isnofound: false,
      totalPage: '',
      cartTotal: 0,
      cartProduct: [],
      searchText: '',

      searchResults: [],
      searchText: '',
      keywords: [],

      searchTimer: null, // 用于保存延迟搜索的定时器
    };
  },
  // mounted() {
  //   this.initSwiper();
  // },

  methods: {
    handleInput() {
      // 清除之前的定时器
      clearTimeout(this.searchTimer);

      // 创建一个新的定时器以延迟搜索
      this.searchTimer = setTimeout(() => {
        this.updateSearchResults();
      }, 500); // 设置延迟时间，单位为毫秒（这里设置为500毫秒，可以根据需要调整）
    },
    async updateSearchResults() {
      // 在这里执行搜索操作，使用 this.searchText 作为搜索关键字
      const res = await axios.get('http://localhost:3000/api/products');

      console.log('执行搜索操作:', this.searchText);
      console.log('执行搜索操作:', res);
      const words = res.data.map((keyword) => {
        return {
          name: keyword.name,
          price: keyword.price,
          image: keyword.image,
        };
      });
      this.searchResults = words.filter((keyword) =>
        keyword.name.includes(this.searchText)
      );
    },
    updateCartTotal(newTotal) {
      this.cartTotal = newTotal; // 更新 cartTotal
    },
    async getCart() {
      console.log(localStorage.email);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/admin/userCart/${localStorage.email}`,
          {
            headers: { Authorization: `Bearer ${localStorage.token}` },
          }
        );

        const responseData = response.data;
        console.log(responseData);
        this.cartProduct = responseData;
        localStorage.cart = responseData.length;
        this.updateCartTotal(this.cartTotal);
        this.cartTotal = response.data.length;
        this.cartTotal = response.data.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
      } catch (error) {
        console.error('Login error:', error);

        // this.$router.push('/login');
      }
    },

    async addToCart(item, i) {
      // const existingItem = this.cartProduct.find((el) => el.name === item.name);
      // if (existingItem) {
      // existingItem.count++;
      // if (existingItem.qty > 0) {
      // existingItem.qty--;
      //   }
      // } else {
      // item.qty--;
      //   this.cartProduct.push({ ...item, count: 1 });
      // }
      console.log('localStorage');
      console.log(localStorage);
      const name = item.name;
      const quantity = i;
      const email = localStorage.email;
      console.log(item.name);
      console.log(name, quantity, email);

      console.log(this.cartTotal);
      if (localStorage.length != 0) {
        try {
          const response = await axios.post(
            'http://localhost:3000/api/admin/cart',
            {
              name: name,
              email: email,
              quantity: quantity,
            },
            {
              headers: { Authorization: `Bearer ${localStorage.token}` },
            }
          );
          console.log(response);
          this.updateCartTotal(this.cartTotal + 1);
          this.showalert();
        } catch (error) {
          this.showlogin();

          console.error('Login error:', error);
        }
      } else if (localStorage.length == 0) {
        this.showlogin();
      }

      console.log(this.cartProduct);
    },
    showalert() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '加入購物車成功',
        showConfirmButton: false,
        timer: 1500,
      });
    },
    showlogin() {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '您尚未登入會員',
        showConfirmButton: false,
        timer: 1500,
      });
    },
    goToPage(currentpage = 1) {
      // let currentpage = 1;
      this.isLoading = true;
      this.isnofound = false;
      const api = `http://localhost:3000/api/products/discount/page=${this.currentpage}`;
      console.log(api);
      this.$http.get(api).then((response) => {
        console.log(response);
        this.products = response.data.data;
        this.currentpage = currentpage;
        this.totalPage = response.data.totalPage;
        console.log(this.currentpage);
        console.log(this.totalPage);
        this.isLoading = false;
        if (this.products.length == 0) {
          this.isnofound = true;
        }
      });
    },
    setPage(page) {
      console.log(page);
      this.currentpage = page;
      this.$router.push({
        name: 'product',
        params: { page: this.currentpage },
      });
      this.goToPage(this.currentpage);
    },

    // initSwiper() {
    //   this.swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
    //   });
    // },
  },

  // beforeDestroy() {
  //   if (this.swiper) {
  //     this.swiper.destroy();
  //   }
  // },

  created() {
    this.setPage(+this.$route.params.page);
    this.getCart();
  },
};
</script>
<style>
.carousel-item .carousel-item {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  max-width: 100%;
}
.carousel-inner {
  max-width: 100%;
  height: auto;
  filter: brightness(0.9);
  margin: 0 auto;
}
.carousel-inner img {
  max-width: 100%;
  height: auto;
  filter: brightness(0.9);
  margin: 0 auto;
}
.custom-caption {
  /* width: 600px; */
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  color: white;
  font-size: 2.5rem;
  /* width: 50vw; */
}
h3 {
  /* text-align: center; */
  padding: 5px;
}

.row {
  /* justify-content: center; */
  margin: 0 auto;
  padding: 10px;
}
.product-list {
  display: flex;
  /* justify-content:  ; */
  flex-wrap: wrap;
  justify-content: center;
}
.slide-txt {
  position: absolute;
  z-index: 111;
}
.bi-search {
  top: 5px;
  right: 20px;
}
.dropdown {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
}

.card > a > img {
  width: 100%;
  height: 200px;
}
.searchBar-container {
  width: 500px;
  padding: 20px;
  margin-right: -5px;
}

/* .pagination-container {
  margin-bottom: 90px;
} */
.pagination {
  display: flex;
  justify-content: center;
  padding: 5px;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.swal2-container {
  z-index: 10000;
}
.card {
  padding: 5px;
  margin: 10px;
}
.card img {
  height: 250px;
}
.searchlist {
  position: absolute;
  top: 100%; /* 将searchlist显示在搜索框下方 */
  left: 0;
  z-index: 500;
  width: 100%;
  max-height: 500px;
  overflow: scroll;
  background-color: white;
}
.searchlist::-webkit-scrollbar {
  width: 0.5em;
}
.searchimg {
  width: 30px;
  height: 30px;
}
/* .searchlist ul > li {
  border: 0.5px solid black;
} */
.boy {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  height: 60vh;
  background-image: url('https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600');
}
/* .boy > img {
  height: 70vh;
  width: 100%;
} */

.box {
  position: relative;
  transition: all 0.4s ease;
  margin: 10px;
  text-align: center;
  width: 250px;
}
.box img {
  height: 250px;
  width: 100%;
}

.box h5 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
.box h6 {
  font-size: 16px;
  font-weight: 700;
}
.boy > .txt {
  height: 100%;
  position: absolute;

  top: 0;
  font-size: 80px;
  transform: translateY(40%);
  color: white;
  word-spacing: 5px;
}

.cart {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: white;
  box-shadow: 1px 1px 0.5px 1px rgba(0, 0, 0, 0.2);
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.cart:hover {
  color: red;
}

.box:hover .text-overlay {
  opacity: 1; /* 文本出现 */
}
/* .box img:hover {
  filter: brightness(0.7);  
  cursor: pointer;
} */
.discounts {
  margin-left: 3px;
  background-color: rgb(150, 88, 88);
  color: white;
  padding: 4px;
}
.productlink {
  text-decoration: none;
  color: black;
}
.searchResults {
  padding: 5px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
  width: 98%;
  text-decoration: none;
  display: block;
  color: black;
}
.searchResults:hover {
  color: rgb(150, 88, 88);
}
</style>
