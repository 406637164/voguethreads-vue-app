<template>
  <div class=" ">
    <div
      class="tab-pane fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form @submit.prevent="login">
        <!-- Email input -->
        <div
          class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
        >
          <label class="form-label" for="loginName">帳號(電子郵件)</label>
          <input
            type="email"
            v-model="email"
            id="loginName"
            class="form-control"
          />
        </div>

        <!-- Password input -->

        <div
          class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
        >
          <label class="form-label" for="loginPassword">密碼</label>
          <input
            type="password"
            v-model="password"
            id="loginPassword"
            class="form-control"
          />
        </div>

        <!-- 2 column grid layout -->
        <div class="row mb-4">
          <div class="col-md-6 d-flex justify-content-center">
            <!-- Simple link -->
            <a href="#!">忘記密碼?</a>
          </div>
        </div>

        <!-- Submit button -->

        <div class="d-flex justify-content-center">
          <div class="w-50">
            <button type="submit" class="btn btn-primary btn-block mb-4 w-100">
              登入
            </button>
          </div>
        </div>
        <!-- Register buttons -->
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/admin/login',
          {
            email: this.email,

            password: this.password,
          }
        );
        const token = response.data.token;
        const email = response.data.email;
        const id = response.data.id;
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('email', this.email);

        console.log('-----');
        console.log(response);

        this.$router.push('/user');
        this.showAlert();
        this.username = '';

        this.password = '';

        // 处理服务器响应，例如保存令牌到本地存储
        // const token = response.data.token;
        // localStorage.setItem('token', token);

        // 导航到其他页面或进行其他操作
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    showAlert() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '登入成功',
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>
