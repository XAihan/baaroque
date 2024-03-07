import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router';
import VConsole from 'vconsole';


// 加载vconsole
new VConsole();

createApp(App).use(router).mount('#app')
