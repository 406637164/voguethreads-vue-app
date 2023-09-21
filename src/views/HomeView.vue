<template>
  <Navbar :cartTotal="cartTotal"></Navbar>
  <section class="home" id="home">
    <div class="home-text">
      <h1>新品上市</h1>
      <p>發掘獨特風格，穿上VogueThreads，讓你的時尚故事獨一無二</p>

      <a href="#" class="btns">點擊查看</a>
    </div>
  </section>
  <div class="container">
    <!-- <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/1136561987/photo/different-colored-shirts-hanging-on-a-rack.jpg?s=612x612&w=0&k=20&c=CpXTlEM5atn2GxJ_uB0L49tqPrAVjJyBHXmfumtM988="
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block custom-caption">
            <p>發掘獨特風格，穿上VogueThreads，讓你的時尚故事獨一無二</p>
          
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1600"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block custom-caption">
            <p>VogueThreads提供無盡風格選擇</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1363257452/photo/a-european-woman-professional-stylist-with-dark-hair-and-glasses-chooses-clothes-for-a.jpg?s=612x612&w=0&k=20&c=pQc-RfTjPEWUL2Su4mcPc1n2q3bOM-_LcOIp4pxZub0="
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block custom-caption">
            <p>嘗試VogueThreads，打造專屬於你的風格！</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
  </div>
  <div class="container">
    <section class="new" id="new">
      <div class="center-text">
        <h2>熱銷商品</h2>
      </div>
      <div class="new-content">
        <div class="box">
          <img src="http://localhost:3000/13.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
        <div class="box">
          <img src="http://localhost:3000/2.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
        <div class="box">
          <img src="http://localhost:3000/3.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
        <div class="box">
          <img src="http://localhost:3000/4.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
        <div class="box">
          <img src="http://localhost:3000/13.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
        <div class="box">
          <img src="http://localhost:3000/10.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
        <div class="box">
          <img src="http://localhost:3000/20.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
        <div class="box">
          <img src="http://localhost:3000/14.jpg" alt="" />
          <h5>lorem ipsum</h5>
          <h6>$188</h6>
          <div class="sale">
            <h4>Hot</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="new">
      <div class="center-text">
        <h2>會員專屬</h2>
      </div>
      <div class="d-flex items-container">
        <div class="item-box">
          <img
            src="https://images.unsplash.com/photo-1571989928541-674d0cf46c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div class="text-overlay">
            <p class="looks">免費修改長度</p>
          </div>
        </div>
        <div class="item-box">
          <img
            src="https://plus.unsplash.com/premium_photo-1667850562258-b77dfa54c79d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div class="text-overlay">
            <p class="looks">宅配到府</p>
          </div>
        </div>
        <div class="item-box">
          <img
            src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div class="text-overlay">
            <p class="looks">店到店服務</p>
          </div>
        </div>
      </div>
      <!-- <div class="item-container">
      <div class="item-box">
        <div class="item-img">
          <img
            src="https://plus.unsplash.com/premium_photo-1667850562258-b77dfa54c79d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div class="item-txt">免費修改長度</div>
      </div>
      <div class="item-box">
        <div class="item-img">
          <img
            src="https://images.unsplash.com/photo-1571989928541-674d0cf46c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div class="item-txt">宅配到府</div>
      </div>
      <div class="item-box">
        <div class="item-img">
          <img
            src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div class="item-txt">店到店服務</div>
      </div>
    </div> -->
    </section>
  </div>
  <footer class="footer">
    <p>&copy; 2023 Your Website. All rights reserved.</p>
  </footer>
</template>
<style>
.carousel-item img {
  /* max-width: 400px; 设置你希望的最大宽度 */
  height: 100%;
  max-height: 500px; /* 设置你希望的最大高度 */
  /* width: 100vw; */
  background-color: opacity;
  height: auto;
  margin: auto; /* 居中图片 */
}
.slider-text h1 {
  font-weight: 900;
  line-height: 75px;
}
.center-text {
  text-align: center;
}
.btns {
  display: inline-block;
  padding: 13px 25px;
  background: var(--main-color);
  color: var(--bg-color);
  font-size: 15px;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.35s ease;
}
.btns:hover {
  transform: translateY(-5px);
  background: var(--text-color);
}
.slider-container {
  /* padding: 5px; */
  position: relative;

  display: flex;
  justify-content: space-between;
  height: 50%;
  width: 100%;
}
.title {
  font-size: 24px;
  font-weight: 700;
  line-height: 50px;
}

.items-container {
  margin-top: 4rem;
  height: 300px;

  justify-content: space-between;
}

.item-box {
  position: relative;
  background-color: white;
  width: 300px;
  height: 100%;
  border-radius: 300px;
  /* 其他样式 */

  /* border-radius: 500px; */
  overflow: hidden;
}
.item-box > span {
  position: absolute;
  transform: translate(50%, 50%);
}
.item-img {
  height: 400px;
  width: 100%;
  overflow: hidden;
}
.item-box img {
  height: 100%;
  width: 100%;

  transition: transform 0.3s;
}
.item-box:hover img {
  filter: brightness(0.7); /* Apply a brightness filter to the image */
  transform: scale(1.1); /* Add a scaling effect on hover */
  cursor: pointer;
}
/* .item-img > img {
  padding: 10px;
  width: 100%;
  height: 100%;
  filter: brightness(0.7);
  
  transition: transform 0.3s;
} */

.text-overlay {
  position: absolute; /* 绝对定位，相对于父容器 .image-container 定位 */
  top: 50%; /* 从顶部偏移50% */
  left: 50%; /* 从左侧偏移50% */
  transform: translate(-50%, -50%);

  color: white; /* 可选：设置文本颜色 */
  letter-spacing: 5px;
  font-size: 1.25rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.item-box:hover .text-overlay {
  opacity: 1; /* 文本出现 */
}

/* .item-box :hover {
  transform: scale(1.4); 
  filter: brightness(1);
} */

.item-txt {
  position: absolute;
  z-index: 50;
  font-size: 27px;
  letter-spacing: 10px;
  top: 50%;
  left: 20%;
  bottom: 50%;
  color: white;
  right: 20%;
}

.item-box:hover .item-txt {
  opacity: 0; /* 悬停时不可见 */
  transform: translate(-200%);
}
item-box ~ .looks,
.looks {
  cursor: pointer;
}
.slider-text {
  /* z-index: 555; */
  margin: 20px;
  padding: 20px;
  width: 600px;
  font-size: 1.5rem;
  height: 100%;
  color: white;
  position: absolute;
}

.btn {
  font-size: 1.5rem;
}
video {
  height: 100%;
  width: 100%;
}
.swiper-container {
  overflow: hidden;
  height: 400px;
}

section {
  padding: 60px 12%;
}
.home {
  min-height: 100vh;
  width: 100%;
  background: url('https://media.istockphoto.com/id/1136561987/photo/different-colored-shirts-hanging-on-a-rack.jpg?s=612x612&w=0&k=20&c=CpXTlEM5atn2GxJ_uB0L49tqPrAVjJyBHXmfumtM988=');
  background-size: cover;
  background-position: center top;
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
.home-text h1 {
  font-size: var(--big-font);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.6rem;
  margin-bottom: 1.4rem;
}
.home-text span {
  font-size: var(--h2-font);
}
.home-text p {
  font-size: var(--normal-font);
  font-weight: 500;
  margin-bottom: 3rem;
  letter-spacing: 0.2rem;
}
.new-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 2.3rem;
  align-items: center;
  margin-top: 4rem;
  text-align: center;
}

.box {
  position: relative;
  transition: all 0.4s ease;
  margin: 10px;
  width: 250px;
}
.box img {
  height: 250px;
  width: 100%;
  margin-bottom: 5px;
  /* border-radius: 10px; */
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
.sale {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 30px;
  background: red;
  color: var(--bg-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.box:hover {
  /* transform: scale(0.9) translateY(-5px); */
  cursor: pointer;
}
.brand {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  gap: 1.3rem;
  align-items: center;
  justify-content: center;
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
