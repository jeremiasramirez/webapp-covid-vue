import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/app.routing";
 import "./styles/animate.css"
createApp(App)
.use(router)
.mount('#app')
