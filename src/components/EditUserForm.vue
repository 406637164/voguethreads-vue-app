<template>
  <h2>編輯個人資訊</h2>
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
    class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
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
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      username: ' ',
      email: '',
      address: '',
      cellphone: '',
      activeTab: 'User',
    };
  },
  methods: {
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
