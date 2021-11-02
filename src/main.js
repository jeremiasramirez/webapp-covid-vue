import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/app.routing";

createApp(App)
.use(router)
.mount('#app')
