<template>
  <h2>訂單資訊</h2>
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
                <div class="row">價格: {{ pricelist[index][imageIndex] }}</div>
              </div>
            </template>
          </div>
        </div>
        <span class="item_title">總金額:{{ orderdata[0].totalamount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css';

export default {
  name: 'user',
  props: {
    orderdata: Array,
  },
  data() {
    return {
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
  },
  created() {
    this.getOrder();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.editusercontent {
  height: 600px;
  overflow: scroll;
}
</style>
