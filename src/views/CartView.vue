<template>
  <Navbar :cartTotal="cartTotal"></Navbar>

  <div class="position-relative content">
    <div class="container">
      <h4>共{{ cartTotal }}項商品</h4>
      <div class="d-flex">
        <div class="product-container">
          <table class="item-lists">
            <thead>
              <tr>
                <th class="item_detail">商品</th>
                <th class="price">單價</th>
                <th class="count">數量</th>
                <th class="amount" colspan="2">金額</th>
                <th class="operate"></th>
              </tr>
            </thead>
            <tbody class="scrollable-tbody">
              <tr v-for="(item, index) in cartProduct" :key="item.name">
                <td class="item_detail">
                  <a :href="`/product/${item.name}`">
                    <img :src="item.image" alt="" />
                    <div class="name">
                      <span>{{ item.name }}</span>
                    </div>
                  </a>
                </td>
                <td class="price">{{ item.price }}</td>
                <td class="count">
                  <button class="btn dels" @click="reduceitem(item, index)">
                    -
                  </button>
                  {{ item.quantity }}
                  <button class="btn adds" @click="additem(item, index)">
                    +
                  </button>
                </td>
                <td class="amount">{{ item.price * item.quantity }}</td>
                <td class="operate">
                  <button
                    class="btn btn-outline-danger btn-sm del"
                    @click="deleteitem(item, index)"
                  >
                    <i class="bx bx-x"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="checkout">
          <span class="title">商品清單</span>

          <ol>
            <li
              v-for="(item, index) in cartProduct"
              :key="item.name"
              class="d-flex detailtitle"
            >
              <div>
                <i class="bx bxs-t-shirt" style="color: #c8815f"></i>
                {{ item.name }}
              </div>
              <div>x {{ item.quantity }}</div>
            </li>
          </ol>
          <ul class="totals">
            <li class="d-flex detailtitle">
              <div><i class="bx bxs-wallet"></i> 總計</div>
              <div>
                <span>共 NT {{ totalPrice }}元</span>
              </div>
            </li>
          </ul>

          <button id="checkout" @click="checkout(cartProduct)">結帳</button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container">
    <h3>我的購物車</h3>
    <div class="item_header">
      <div class="item_detail">商品</div>
      <div class="price">單價</div>
      <div class="count">數量</div>
      <div class="amount">總計</div>
      <div class="operate">操作</div>
    </div>

    <div
      class="item_header item_body"
      v-for="(item, index) in cartProduct"
      :key="item.name"
    >
      <div class="item_detail">
        <a href="">
          <img :src="item.image" alt="" />
          <div class="name">{{ item.name }}</div>
        </a>
      </div>

      <div class="price"><span>$</span>{{ item.price }}</div>
      <div class="count">
        <button class="btn" @click="reduceitem(item, index)">-</button>
        {{ item.quantity }}
        <button class="btn" @click="additem(item, index)">+</button>
      </div>
      <div class="amount">{{ item.price * item.quantity }}</div>
      <div class="operate">
        <button
          class="btn btn-secondary btn-sm"
          @click="deleteitem(item, index)"
        >
          刪除
        </button>
      </div>
    </div>
  </div> -->

  <footer class="footer">
    <p>&copy; 2023 Your Website. All rights reserved.</p>
  </footer>
</template>

<script>
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from '../components/NavBar.vue';
export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
  data() {
    return {
      cartProduct: [],
      itemcount: 0,
      cartTotal: 0,
      itemtotal: 0,
    };
  },

  methods: {
    checkout(cartProduct) {
      console.log(cartProduct);
      console.log(cartProduct);
      if (cartProduct.length != 0) {
        Cookies.set('cartProduct', JSON.stringify(cartProduct));
        this.$router.push({ path: '/order' });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '請先選購商品',
          showConfirmButton: false,
          timer: 1500,
        });
      }

      // this.$router.currentRoute.meta.cartProduct = cartProduct;
    },
    async getCart(item) {
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
        this.cartProduct = responseData;
        this.cartTotal = response.data.length;
        this.cartTotal = response.data.reduce((total, item) => {
          return total + item.quantity;
        }, 0);

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

    async additem(item) {
      const response = await axios.patch(
        'http://localhost:3000/api/admin/adduserCartItem',
        {
          cartitemid: item.cartitemid,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      this.itemcount = item.quantity;
      item.quantity++;

      this.cartTotal++;
      console.log(this.cartTotal);
    },
    async reduceitem(item, index) {
      const response = await axios.patch(
        'http://localhost:3000/api/admin/reduceuserCartItem',
        {
          cartitemid: item.cartitemid,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      this.itemcount = item.quantity;
      if (this.itemcount > 1) {
        this.itemcount--;
        item.quantity--;
        this.cartTotal--;
      } else if (this.itemcount <= 1) {
        this.deleteitem(item, index, 1);
        // Swal.fire({
        //   title: '確認刪除此商品?',

        //   showCancelButton: true,
        //   confirmButtonText: '是',
        //   cancelButtonText: '否',
        // }).then((result) => {

        //   if (result.isConfirmed) {

        //   }
        // });
      }
    },
    async deleteitem(item, index, num) {
      Swal.fire({
        title: '確認刪除此商品?',

        showCancelButton: true,
        confirmButtonText: '是',
        cancelButtonText: '否',
      }).then((result) => {
        if (result.isConfirmed) {
          if (item.quantity == 1) {
            this.cartTotal--;
          } else if (item.quantity >= 1) {
            this.cartTotal -= item.quantity;
          }
          // console.log(item.cartitemid);
          Swal.fire('刪除成功', '', 'success');
          this.cartProduct.splice(index, 1);
          axios.delete(
            `http://localhost:3000/api/admin/deleteuserCartItem/${item.cartitemid}`,

            {
              headers: { Authorization: `Bearer ${localStorage.token}` },
            }
          );
        }
      });

      // this.cartProduct = this.cartProduct.reduce((total, item) => {
      //   return total + item.quantity;
      // }, 0);
    },
    showlogin() {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '請先登入會員',
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
  computed: {
    totalPrice() {
      return this.cartProduct.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style>
h3 {
  text-align: center;
  padding: 5px;
}
.btn {
  font-size: 18px;
  border: 1px solid #fff;
}
.item_header {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  height: 30px;

  border-radius: 3px;
  padding-left: 10px;
}
.item_header div {
  width: 200px;

  line-height: 30px;
}
.item_header .item_detail {
  width: 50%;
}
.item_body {
  margin-top: 20px;
  height: 100px;
  align-items: center;
}
.item_detail img {
  width: 80px;
  height: 80px;
  border-radius: 3px;
  /* margin-top: 10px; */
  float: left;
}
.item_detail .name {
  margin-top: 20px;
}
.dels .adds {
  color: gray;
}
.Tabset {
  display: flex;

  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  height: 80%;
}
.col {
  font-size: 1.5rem;
  text-align: center;

  line-height: 2.5rem;
}

.del {
  color: gray;
  font-size: 1.25rem;
}
#checkout {
  width: 100%;
  color: white;
  background-color: #c8815f;
  border: 1px solid gray;
  z-index: 3;
  line-height: 50px;
  position: absolute;
  bottom: 0px;
  right: 0;
  font-weight: bold;
}
#checkout:hover {
  background-color: #d0a896;
}
.swal2-container {
  z-index: 10000;
}
.titles {
  display: flex;
  justify-content: space-between;
  /* width: 60%; */
}

.titles > * {
  font-size: 1.25rem;
  padding: 5px;

  flex-grow: 1; /* Each column will take an equal share of the available space */
}
thead {
  font-size: 1.25rem;
  color: white;
}
thead > tr > th {
  border-left: 1px solid white;
}
.amount {
  border-right: 1px solid transparent;
}
.item-lists tbody tr {
  display: table-row;
  height: auto;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
}

.item_detail {
  flex-grow: 2; /* Adjust this value if you want this column to take up more space */
}
.item_detail > a {
  text-decoration: none;
  color: black;
}
.item_detail > a:hover {
  color: brown;
}
.item-lists {
  width: 90%;
  border-collapse: collapse;

  text-align: center;
  margin-right: 5px;
}
.item-lists > tr {
  height: 200px;
}

.content {
  margin-top: 6rem;
  text-decoration: none;
}
.checkout {
  width: 30%;
  text-align: center;
  font-size: 1.5rem;
  max-height: 70vh;
  position: relative;
  box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.2);
}
thead > tr {
  background-color: #c8815f;
}
.checkout > .title {
  text-align: center;
  display: block;
  color: white;
  background-color: #c8815f;
  margin-bottom: 15px;
}
.checkout > ol {
  text-align: left;
  height: 300px;
  overflow: scroll;
}
.checkout > ul {
  text-align: left;
  padding-right: 5px;
}
.checkout > ol::-webkit-scrollbar {
  width: 0.5em;
}
.detailtitle {
  justify-content: space-between;
  line-height: 2;
}
.totals {
  position: absolute;
  z-index: 3;
  right: 0;
  width: 100%;
  bottom: 50px;
}
.product-container {
  width: 70%;
  max-height: 510px;
  position: relative;
  overflow: scroll;
}

thead {
  position: sticky;
  top: 0;
  background-color: #c8815f;
  /* ... your other styles ... */
}
.product-container::-webkit-scrollbar {
  width: 0.5em;
}
</style>
