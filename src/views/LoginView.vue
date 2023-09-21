<template>
  <Navbar :cartTotal="cartTotal"></Navbar>
  <div class="w-50 container p-3" style="margin-top: 100px">
    <div class="tabs d-flex">
      <div
        class="tab-item"
        href="#"
        :class="{ active: activeTab === 'login' }"
        @click="activeTab = 'login'"
      >
        <b>登入</b>
      </div>
      <div
        class="tab-item"
        href="#"
        :class="{ active: activeTab === 'register' }"
        @click="activeTab = 'register'"
      >
        註冊
      </div>
    </div>

    <component :is="activeTab === 'login' ? 'LoginForm' : 'RegisterForm'" />
  </div>
</template>

<style>
.login-container {
  width: 40vw;
}
</style>

<script>
import RegisterForm from '@/components/RegisterForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import axios from 'axios';
import Navbar from '../components/NavBar.vue';
export default {
  name: 'HomeView',
  components: {
    RegisterForm,
    LoginForm,
    Navbar,
  },
  data() {
    return {
      activeTab: 'login',
      cartTotal: 0,
    };
  },
  methods: {
    signIn() {},

    updateCartTotal(newTotal) {
      this.cartTotal = newTotal; // 更新 cartTotal
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
  },
};
</script>
<style>
h2 {
  margin-top: 20px;
  font-weight: bold;

  text-align: center;
  margin-bottom: 20px;
}
</style>
