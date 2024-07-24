import { createApp } from 'vue'
import './style.css'
import './assets/css/global.css'
import App from './App.vue'
import router from './routes/index'

createApp(App)
    .use(router)
    .mount('#app')
