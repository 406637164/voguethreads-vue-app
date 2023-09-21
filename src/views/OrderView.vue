<template>
  <div>
    <div class="container items">
      <div class="row">
        <div class="col-md-6">
          <div class="card card-titles">
            <div class="card-header">
              <h5 class="mb-0">填寫個人基本資料</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">姓名</label>
                  <input
                    type="text"
                    v-model="name"
                    id="name"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="cellphone" class="form-label">電話</label>
                  <input
                    type="text"
                    v-model="cellphone"
                    id="cellphone"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">寄件地址</label>
                  <div class="city-selector-set d-flex">
                    <!-- 縣市選單 -->
                    <div>
                      <select
                        class="district"
                        v-model="selectedcity"
                        :value="selectedcity"
                      >
                        <option v-for="city in country" :key="city">
                          {{ city }}
                        </option>
                      </select>
                    </div>
                    <!-- 區域選單 -->
                    <div>
                      <select v-model="place" :value="place" class="place">
                        <option value="" v-if="countrygroups.length == 0">
                          選擇地區
                        </option>
                        <option
                          v-for="place in countrygroups"
                          :key="place"
                          :value="place"
                        >
                          {{ place }}
                        </option>
                      </select>
                      <input type="address" name="" id="" />
                    </div>
                    <!-- 郵遞區號欄位 (建議加入 readonly 屬性，防止修改) -->
                  </div>

                  <!-- <input
                    type="text"
                    v-model="address"
                    id="address"
                    class="form-control"
                  /> -->
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">備註</label>
                  <textarea
                    v-model="message"
                    class="form-control"
                    id="message"
                    name="message"
                    rows="4"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card card-titles">
            <div class="card-header">
              <h5 class="mb-0">訂單摘要</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <p class="summary">商品總計: {{ amount }}元</p>
              </div>
              <div class="mb-3">
                <fieldset>
                  <legend>請選擇付款方式</legend>

                  <div class="radios">
                    <input type="radio" name="pay" value="Line Pay" checked />
                    <label for="Line">Line Pay</label>
                  </div>

                  <div class="radios">
                    <input type="radio" name="pay" value="credit" />
                    <label for="credit">信用卡</label>
                  </div>
                </fieldset>
              </div>

              <div class="mb-3" style="max-height: 400px; overflow-y: auto">
                <h5>已選擇的商品:</h5>

                <div class="row products">
                  <div class="col-6" v-for="item in cartProduct" :key="item.id">
                    <div class="card card-orders">
                      <img
                        :src="item.image"
                        alt="商品图片"
                        class="card-img-top"
                        style="max-height: 100px"
                      />
                      <div class="card-body">
                        <h6 class="card-title">{{ item.name }}</h6>
                        <p class="card-text">數量: {{ item.quantity }}</p>
                        <p class="card-text">價格: {{ item.price }}元</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <button
                  class="w-100 ordersubmit"
                  id="submitOrder"
                  @click="submitOrder"
                >
                  送出訂單
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.items {
  height: 70vh;
  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
  /* background-color: rgba(238, 237, 237, 0.4); */
}
.card-item {
  margin-top: 5px;
  height: 230px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 5px;
}
.products {
  height: 80vh;
  overflow: scroll;
}
.form-check {
  font-size: 1.5rem;
}

.right {
  padding: 30px;
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2); */
  margin-left: 30px;
}
#submitOrder {
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
}
#submitOrder:hover {
  background-color: #d0a896;
}

.form-label {
  width: 100px;
}
.ordertitle {
  display: flex;
  font-weight: bold;
  padding: 10px;
  font-size: 2rem;
  letter-spacing: 0.5cm;
  justify-content: center;
}
.district {
  margin-right: 10px;
}
.place {
  margin-right: 10px;
}
.ordersubmit {
  width: 100%;
  color: white;
  background-color: #c8815f;

  z-index: 3;
  line-height: 50px;
  position: absolute;
  bottom: 0px;
  right: 0;
  border: 0px solid transparent;
  font-weight: bold;
}
.radios {
  margin-top: 5px;
  font-size: 18px;
  display: flex;
}
.radios input {
  margin-right: 5px;
}
.radios label {
  padding-left: 5px;
  margin-right: 15px;
}
legend {
  font-size: 18px;
}
.card-header {
  background-color: #c8815f;
  color: white;
  font-weight: bold;
}
.card-titles {
  padding: 0;
}
.card-orders {
  padding: 0;
}
.summary {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
<script>
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import axios from 'axios';
import TwCitySelector from '../assets/AllData.json';
import Navbar from '../components/NavBar.vue';
export default {
  name: 'order',
  components: {
    Navbar,
  },
  data() {
    return {
      cartProduct: [],
      itemcount: 0,
      cartTotal: 0,
      itemtotal: 0,
      amount: 0,
      name: '',
      address: '',
      cellphone: '',
      paymentMethod: '',
      message: '',
      country: [],
      selectedcity: '',
      countrygroups: [],
      place: '',
      myCounty: TwCitySelector,
    };
  },
  watch: {
    selectedcity(newValue) {
      // 在selectedCity变化时更新區域选项

      this.countrygroups = this.myCounty
        .find((c) => c.CityName == newValue)
        .AreaList.map((area) => area.AreaName);
      this.place = this.countrygroups[0];
    },
  },
  methods: {
    checkout() {
      this.cartProduct = JSON.parse(Cookies.get('cartProduct'));
      this.amount = this.cartProduct.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    async setaddress() {
      console.log(this.myCounty);

      this.country = this.myCounty.map((city) => city.CityName);
      this.selectedcity = this.country[0];
      // console.log(this.myCounty.filter(f=>f.));
      console.log(this.selectedcity);
    },
    submitOrder() {
      this.showcheck();
    },
    async showcheck() {
      console.log(localStorage.id);
      console.log(this.cartProduct);
      console.log(this.name);
      console.log(this.cellphone);
      console.log(this.address);

      console.log(this.message);
      console.log(this.totalPrice);
      console.log(this.paymentMethod);
      // {
      //   headers: { Authorization: `Bearer ${localStorage.token}` },
      // }

      const response = await axios.post(
        'http://localhost:3000/api/admin/order',
        {
          userid: localStorage.id,
          name: this.name,
          phone: this.cellphone,
          address: this.address,
          amount: this.amount,
          Payment_method: this.paymentMethod,
          message: this.message,
          products: this.cartProduct,
        }
      );
      console.log(response);
      window.location.href = response.data;
      //amount(totalPrice) currency
      //id(products_1)  amount products  {
      // name: '六角棒棒',
      // quantity: 1,
      // price: 10,
      // }

      // const response2 = await axios.post('http://localhost:3000/createOrder',{"amount":this.totalPrice,"currency":"TWD",});

      // Swal.fire({
      //   position: 'center',
      //   icon: 'success',
      //   title: '訂單已送出',
      //   showConfirmButton: false,
      //   timer: 1500,
      // });

      // this.$router.push({
      //   name: 'user', // 路由名称，对应于路由配置中的'name'
      //   params: { activeTab: 'Order' }, // 路由参数
      // });
    },
  },
  created() {
    this.checkout();
    this.setaddress();
  },
};
</script>
