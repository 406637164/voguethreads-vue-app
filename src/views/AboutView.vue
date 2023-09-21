<template>
  <Navbar :cartTotal="cartTotal"></Navbar>
  <div class="content-img">
    <span class="content-txt">關於VogueThreads</span>
    <img
      src="https://media.istockphoto.com/id/1136561987/photo/different-colored-shirts-hanging-on-a-rack.jpg?s=612x612&w=0&k=20&c=CpXTlEM5atn2GxJ_uB0L49tqPrAVjJyBHXmfumtM988="
      alt=""
    />
  </div>
  <div class="container">
    <div class="txt">
      <h2>品質保證：本店的商品含棉量超過 75%！ 為什麼選擇高含棉量的衣物？</h2>
      <ul>
        <li>質地柔軟堅韌，透氣性好</li>
        <li>
          我們的衣物以高含棉比例為您提供絕佳的舒適感，質地柔軟，同時堅韌耐用。透氣性能讓您在炎熱的天氣中感到涼爽快舒服。
        </li>
        <li>
          吸汗性強，保持乾爽
          我們的衣物具有卓越的吸汗性能，即使在激烈運動或大汗淋漓的情況下，您也無需擔心滴水問題。保持身體乾爽，讓您保持自信。
        </li>
        <li>
          天然不刺激皮膚，適合各種皮膚類型
          高含棉量的衣物天然不刺激皮膚，適合皮膚過敏或敏感的人群。您可以放心地穿著我們的衣物，無需擔心不適。
          為什麼不是 100% 純棉？ 根據 GB/T 29862-2013 的規定，如果含棉量達到 95%
        </li>
        <li>
          棉 5% 氨綸，也可以稱為全棉。100%
          純棉的衣物可能在耐磨性方面不如預期，因此我們選擇高含棉量，綜合了舒適性和耐用性的最佳特點。
        </li>
      </ul>
      <p></p>
    </div>
  </div>
  <footer class="footer">
    <p>&copy; 2023 Your Website. All rights reserved.</p>
  </footer>
</template>
<style>
.txt {
  padding: 20px;
  line-height: 2;
  font-size: 20px;
}
.content-img {
  position: relative;
}

.content-txt {
  font-weight: bold;
  font-size: 3.25rem;
  z-index: 6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content-img > img {
  opacity: 0.5;
  width: 100%;
  height: 50vh;
}
</style>
<script>
import Navbar from '../components/NavBar.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
  data() {
    return {
      activeTab: 'User',
      cartTotal: 0,
    };
  },

  methods: {
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
  },
  created() {
    this.getCart();
  },
};
</script>
