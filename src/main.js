import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 确保你导入了 router
import store from './store'; 

createApp(App).use(store).use(router).mount('#app');
