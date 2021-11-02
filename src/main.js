import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/app.routing";
 import "./styles/animate.css"
 import "./assets/fontawesome/css/all.min.css"
createApp(App)
.use(router)
.mount('#app')
