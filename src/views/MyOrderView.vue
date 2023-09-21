<template>
  <Navbar :cartTotal="cartTotal"></Navbar>

  <div class="container editusercontent w-50">
    <div class="tabs d-flex">
      <a class="tab-item" href="/user"> 個人資訊 </a>
      <a class="tab-item active" href="#">我的訂單</a>
    </div>

    <div class="container mt-4">
      <div v-for="(order, index) in orderdata" :key="index">
        <span @click="toggleOrder(index)" class="btn collapse_button">
          <span class="button-text">訂單編號 {{ order.orderid }}</span>
          <i
            class="fa"
            :class="{
              'fa-chevron-down': activeOrder === index,
              'fa-chevron-up': activeOrder !== index,
            }"
          ></i>
        </span>
        <div v-if="activeOrder === index">
          <h3>訂單詳情</h3>

          <div class="container d-flex flex-column">
            <span class="item_title">所有商品</span>
            <div class="d-flex justify-content-center">
              <template v-for="(img, imageIndex) in imagelist[index]">
                <div class="data-imgitem">
                  <img :src="img" alt="" />
                  <span>{{ namelist[index][imageIndex] }}</span>
                  <div class="row">
                    數量:{{ quantitylist[index][imageIndex] }}
                  </div>
                  <div class="row">
                    價格: {{ pricelist[index][imageIndex] }}
                  </div>
                </div>
              </template>
            </div>
          </div>
          <span class="item_title">總金額:{{ orderdata[0].totalamount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../components/NavBar.vue';
export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
  data() {
    return {
      username: ' ',
      email: '',
      address: '',
      cellphone: '',
      activeTab: 'User',
      cartTotal: 0,
      activeOrder: 0,
      orderdata: this.orderdata,
      imagelist: [],
      namelist: [],
      pricelist: [],
      quantitylist: [],
    };
  },
  methods: {
    toggleOrder(index) {
      if (this.activeOrder === index) {
        this.activeOrder = null;
      } else {
        this.activeOrder = index;
      }
    },
    async getOrder() {
      console.log('http://localhost:3000/api/admin/order/');
      const res = await axios.get(
        `http://localhost:3000/api/admin/order/${localStorage.id}`
      );
      this.orderdata = res.data.data;
      console.log(this.orderdata);
      console.log(this.orderdata);
      console.log(this.orderdata);
      this.imagelist = this.orderdata.map((item, index) =>
        item.image.split(',')
      );
      this.namelist = this.orderdata.map((item, index) =>
        item.productname.split(',')
      );
      this.pricelist = this.orderdata.map((item, index) =>
        item.itemprice.split(',')
      );
      this.quantitylist = this.orderdata.map((item, index) =>
        item.quantity_array.split(',')
      );
      console.log(this.orderdata);
      console.log('imagelist:', this.imagelist);
      console.log(' namelist:', this.namelist);
      this.$emit('cartTotal', this.orderdata);
    },
    async getCart() {
      console.log(localStorage.email);
      console.log(localStorage);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/admin/userCart/${localStorage.email}`,
          {
            headers: { Authorization: `Bearer ${localStorage.token}` },
          }
        );

        const responseData = response.data;

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
    logout() {
      localStorage.clear();
      console.log(localStorage);
      this.$router.push('/login');
      Swal.fire({
        title: '已登出',
        icon: 'success',
        timer: 2000, // 设置2秒的显示时间
        timerProgressBar: true, // 显示倒计时进度条
      });
    },

    updateCartTotal(newTotal) {
      this.cartTotal = newTotal; // 更新 cartTotal
    },
    async getUserInfo() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/admin/login',
          {
            headers: { Authorization: `Bearer ${localStorage.token}` },
          }
        );
        const responseData = response.data.data;
        console.log(responseData);
        this.username = responseData.user;
        this.email = responseData.email;
        this.address = responseData.address;
        this.cellphone = responseData.cellphone;
        // localStorage.email = responseData.email;
      } catch (error) {
        console.error('Login error:', error);
        this.$router.push('/login');
      }
    },
  },
  async getOrder() {
    console.log(this.orderdata);
    this.imagelist = this.orderdata.map((item, index) => item.image.split(','));
    this.namelist = this.orderdata.map((item, index) =>
      item.productname.split(',')
    );
    this.pricelist = this.orderdata.map((item, index) =>
      item.itemprice.split(',')
    );
    this.quantitylist = this.orderdata.map((item, index) =>
      item.quantity_array.split(',')
    );
    console.log(this.orderdata);
    console.log('imagelist:', this.imagelist);
    console.log(' namelist:', this.namelist);
    this.$emit('cartTotal', this.orderdata);
  },
  async getCart() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/admin/userCart/${localStorage.email}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );

      const responseData = response.data;

      this.cartProduct = responseData;

      this.cartTotal = response.data.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      localStorage.cart = this.cartTotal;
      // this.username = responseData.user;
      // this.email = responseData.email;
      // this.address = responseData.address;
      // this.cellphone = responseData.cellphone;
    } catch (error) {
      console.error('Login error:', error);
      this.showlogin();
      this.$router.push('/login');
      // this.$router.push('/login');
    }
  },

  created() {
    this.getUserInfo();
    this.getCart();
    this.getOrder();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.editusercontent {
  margin-top: 100px;
}
h2 {
  text-align: center;
}

.data-imgitem {
  width: 100px;
  height: 100px;
}
.order-img {
}
.item_title {
  font-size: 1.25rem;
}
.vertical-text {
  margin: 3px;
  font-size: 1.25rem;
  letter-spacing: 1cm;
}
.data-imgitem > img {
  height: 70%;
  width: 100%;

  padding: 3px;
}
.data-imgitem > i {
  width: 200px;
  height: 200px;
}
.collapse_button {
  margin-top: 3px;
  margin-bottom: 3px;

  border-bottom: 0.5px solid #c3c3c3;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-text {
  line-height: 1.5; /* 控制文字垂直居中对齐 */
  margin-left: auto;
  margin-right: auto;
}

.arrow-icon {
  margin-left: 10px; /* 调整箭头和按钮文本之间的距离 */
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tab-item {
  color: black;
  text-decoration: none;
}
.editusercontent {
  height: 600px;
  overflow: scroll;
}
.editusercontent::-webkit-scrollbar {
  width: 0.5em;
}
.tabs {
  position: sticky;
  top: 0;
}
</style>
