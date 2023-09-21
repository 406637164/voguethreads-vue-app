<template>
  <Navbar :cartTotal="cartTotal"></Navbar>

  <div class="container editusercontent w-50">
    <div class="tabs d-flex">
      <a class="tab-item active" href="#">
        <b>個人資訊</b>
      </a>
      <a class="tab-item" href="/userOrder">我的訂單</a>
    </div>

    <div
      class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
    >
      <label class="form-label" for="loginName">姓名</label>
      <input
        v-model="username"
        type="username"
        id="username"
        class="form-control"
      />
    </div>
    <div
      class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
    >
      <label class="form-label" for="loginName">帳號(電子郵件)</label>
      <input v-model="email" type="email" id="username" class="form-control" />
    </div>
    <div
      class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
    >
      <label class="form-label" for="loginName">地址</label>
      <input
        v-model="address"
        type="addaddressress"
        id="username"
        class="form-control"
      />
    </div>
    <div
      class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
    >
      <label class="form-label" for="loginName">聯絡電話</label>
      <input
        v-model="cellphone"
        type="cellphone"
        id="cellphone"
        class="form-control"
      />
    </div>
    <div
      class="form-outline mb-4 d-flex justify-content-center align-items-center px-2"
    >
      <button type="button" class="btn btn-outline-primary btn-lg">
        儲存變更
      </button>
      <button
        type="button"
        id="logout"
        class="btn btn-outline-primary btn-lg"
        @click="logout"
      >
        登出
      </button>
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
    };
  },
  methods: {
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
