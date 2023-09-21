import { ref } from 'vue';

// 创建一个可观察的 ref 变量，用于存储购物车总数
export const cartTotal = ref(0);

// 创建一个事件总线对象，用于触发和监听事件
export const eventBus = {
  emit(event, data) {
    // 触发事件并传递数据
    this[event].value = data;
  },
  on(event, callback) {
    // 监听事件
    this[event].subscribe(callback);
  },
};
