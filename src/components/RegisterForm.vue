<template>
  <form @submit.prevent="register">
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
      <label class="form-label" for="loginemail">帳號(電子郵件)</label>
      <input v-model="email" type="email" id="email" class="form-control" />
    </div>

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
    <div
      class="form-outline mb-4 d-flex justify-content-center align-items-center p-3 px-2"
    >
      <label class="form-label" for="loginCellponw">電話</label>
      <input
        type="phone"
        id="loginPassword"
        v-model="cellphone"
        class="form-control"
      />
    </div>

    <div class="d-flex justify-content-center">
      <div class="w-50">
        <button type="submit" class="btn btn-primary btn-block mb-4 w-100">
          註冊
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      cellphone: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/admin/register',
          {
            username: this.username,
            email: this.email,
            password: this.password,
            cellphone: this.cellphone,
          }
        );
        console.log(response);
        this.showAlert();
        this.username = '';
        this.email = '';
        this.password = '';
        this.cellphone = '';
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
        title: '註冊成功',
        icon: 'success',
        timer: 2000, // 设置2秒的显示时间
        timerProgressBar: true, // 显示倒计时进度条
      });
    },
  },
};
</script>
<style>
.btn {
  width: 150px;
}
.form-label {
  padding-top: 5px;
  display: inline-block;
  width: 200px;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
}
</style>
