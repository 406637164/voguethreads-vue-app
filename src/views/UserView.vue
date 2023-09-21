<template>
  <Navbar :cartTotal="cartTotal"></Navbar>
  <div class="w-50 container p-3">
    <div class="tabs d-flex">
      <div
        class="tab-item"
        href="#"
        :class="{ active: activeTab === 'User' }"
        @click="activeTab = 'User'"
      >
        <b>個人資訊</b>
      </div>
      <div
        class="tab-item"
        href="#"
        :class="{ active: activeTab === 'Order' }"
        @click="activeTab = 'Order'"
      >
        訂單
      </div>
    </div>
    <a href="">編輯個人資訊</a>
    <a href="">查看訂單</a>
    <!-- <component
      :orderdata="orderdata"
      :is="activeTab === 'User' ? 'EditUserForm' : 'UserOrderForm'"
    /> -->
    <EditUserForm></EditUserForm>
  </div>
</template>
<script>
import UserOrderForm from '@/components/UserOrderForm.vue';
import EditUserForm from '@/components/EditUserForm.vue';
import Navbar from '../components/NavBar.vue';
import axios from 'axios';

export default {
  components: {
    EditUserForm,
    UserOrderForm,
    Navbar,
  },
  data() {
    return {
      activeTab: 'User',
      cartTotal: 0,
      orderdata: [],
    };
  },

  methods: {
    updateCartTotal(newTotal) {
      this.cartTotal = newTotal; // 更新 cartTotal
    },
    async getOrder() {
      const res = await axios.get(
        `http://localhost:3000/api/admin/order/${localStorage.id}`
      );
      this.orderdata = res.data.data;
      console.log(this.orderdata);
      console.log(this.orderdata);
      console.log(this.orderdata);
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
  mounted() {
    this.getCart();
    this.getOrder();
  },
  created() {
    // 访问路由参数
    console.log('Active Tab:', this.activeTab);
  },
};
</script>
<style>
.btn {
  width: 0;
  flex-grow: 1;
  border: none;
  /* width: 200px; */
}
.Tabset {
  /* margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px #ddd;
  height: 600px; */
}

/* #logout {
  margin-left: 20px;
} */

.form-label {
  padding-top: 5px;
  display: inline-block;
  width: 150px;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
}
h2 {
  margin-top: 20px;
  font-weight: bold;

  text-align: center;
  margin-bottom: 20px;
}

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
.box img:hover {
  filter: brightness(0.7); /* Apply a brightness filter to the image */

  cursor: pointer;
}
</style>
