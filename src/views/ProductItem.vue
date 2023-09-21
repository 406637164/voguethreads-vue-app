<template>
  <Navbar :cartTotal="cartTotal"></Navbar>
  <div class="container">
    <div class="row">
      <div class="d-flex box">
        <div class="product-img">
          <img :src="image" alt="" />
        </div>

        <div class="product-txt">
          <span class="title">{{ productName }} </span>
          <span class="detail">【商品說明】</span>
          <ul>
            <li class="detail-txt">{{ description }}</li>

            <div v-if="discount < 1">
              <del class="price">原價 NT{{ productPrice * quantity }} 元 </del>
              <span class="discounts">打{{ discount * 10 }}折</span>
              <span class="discount"
                ><i class="bx bxs-right-arrow-alt"></i> 折扣價 NT{{
                  productPrice * discount * quantity
                }}
                元</span
              >
            </div>
            <div v-else>
              <span class="price"
                >商品售價 NT{{ productPrice * quantity }} 元
              </span>
            </div>
            <div class="addcheck">
              <button
                class="btn btn-secondary"
                style="width: 40px"
                @click="decrement"
              >
                -
              </button>
              <input
                type="number"
                class="form-control quantity"
                v-model="quantity"
                min="1"
                style="width: 200px"
              />

              <button
                class="btn btn-secondary"
                style="width: 40px"
                @click="increment"
              >
                +
              </button>
              <button
                class="btn btn-outline-danger"
                id="addcart"
                @click="addToCart(productName)"
              >
                <i class="bx bx-shopping-bag"></i> 加入購物車
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <p>&copy; 2023 Your Website. All rights reserved.</p>
  </footer>
</template>
<style>
.txt {
  line-height: 2;
  font-size: 20px;
}
.product-img {
  padding: 10px;
}

.product-txt {
  height: 50vh;
  text-align: left;
  width: 50%;
}
.product-img > img {
  width: 100%;
  height: 60vh;
}
.detail {
  display: block;
  font-size: 1.25rem;
}
.detail-txt {
  max-width: 100%; /* 最大宽度不超过父元素宽度 */
  list-style: none;
  margin-bottom: 30px;
}
.title {
  font-size: 2.5rem;
  display: block;

  margin-bottom: 20px;
}
.price {
  font-size: 1.2rem;

  margin-bottom: 10px;
  margin-right: 10px;
}
.discount {
  font-size: 1.5rem;
  font-weight: bold;
}
#addcart {
  margin-left: 10px;
  border: 0.5px solid red;
}

.title > ul > li {
  list-style: none;
}
.btn {
  font-size: 18px;
  border: 1px solid #fff;
}
.addcheck {
  margin-top: 30px;
  display: flex;
}
.quantity {
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
}
.dropdown-toggle {
  background-color: transparent !important;
  border: none !important;
  color: inherit !important; /* 保留原始文本颜色 */
  padding: 0.375rem 0.75rem !important;
}

/* 移除下拉菜单选项的背景颜色和边框 */
.dropdown-menu {
  background-color: transparent !important;
  border: none !important;
}

/* 移除下拉菜单选项的颜色 */
.dropdown-item {
  color: inherit !important; /* 保留原始文本颜色 */
  padding: 0.25rem 1.5rem !important;
  background-color: transparent !important;
}

/* 移除下拉菜单选项的鼠标悬停背景颜色 */
.dropdown-item:hover {
  background-color: transparent !important;
}

/* 移除下拉菜单选项的焦点边框 */
.dropdown-item:focus {
  outline: none !important;
}
.container {
  margin-top: 100px;
}
.discounts {
  margin-left: 3px;
  background-color: rgb(150, 88, 88);
  color: white;
  padding: 4px;
}
</style>
<script>
import Navbar from '../components/NavBar.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
  data() {
    return {
      productName: 'Urban Tee',
      productPrice: 100,
      discount: 0.2,
      description: 'dsadsadas',
      activeTab: 'User',
      cartTotal: 0,
      quantity: 1,
      image: '',
      orgquantity: 0,
      sums: 0,
    };
  },

  methods: {
    async addToCart(productName) {
      let inputquantity = this.quantity;
      // console.log(inputquantity);
      let inputproductName = this.productName;

      console.log(localStorage.token);
      //       if (localStorage.length != 0) {
      //          this.updateCartTotal(this.cartTotal + inputquantity);
      // await axios.post(
      //       'http://localhost:3000/api/admin/cart',
      //       {
      //         name: inputproductName,
      //         email: localStorage.email,
      //         quantity: inputquantity,
      //       },
      //       {
      //         headers: { Authorization: `Bearer ${localStorage.token}` },
      //       }
      //     );
      //       }

      if (localStorage.length != 0) {
        this.updateCartTotal(this.cartTotal + inputquantity);
        try {
          const response = await axios.post(
            'http://localhost:3000/api/admin/cart',
            {
              name: inputproductName,
              email: localStorage.email,
              quantity: inputquantity,
            },
            {
              headers: { Authorization: `Bearer ${localStorage.token}` },
            }
          );
          console.log(response);
          this.showalert();
        } catch (error) {
          console.error('Login error:', error);
        }
      } else if (localStorage.length == 0) {
        this.showlogin();
      }
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
    showalert() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '加入購物車成功',
        showConfirmButton: false,
        timer: 1500,
      });
    },
    updateCartTotal(newTotal) {
      this.cartTotal = newTotal; // 更新 cartTotal
    },
    decrement() {
      // 减少数量
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increment() {
      // 增加数量
      this.quantity++;
    },
    async getItemProduct() {
      this.productName = this.$route.params.productName;
      let response = await axios.get(
        `http://localhost:3000/api/products/${this.productName}`
      );
      response = response.data[0];
      this.name = response.name;
      this.image = response.image;
      this.productPrice = +response.price;
      this.discount = +response.discount;
      this.description = response.description;
      console.log(response);
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
        console.log('seccuss');
        const responseData = response.data;
        console.log(responseData);
        console.log(responseData);
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
  },
  created() {
    this.getCart();
    this.getItemProduct();
  },
};
</script>
