import { createApp } from 'vue'
import { PointOfVuePlugin } from 'point-of-vue-globe-lib'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(PointOfVuePlugin)
app.mount('#app')
