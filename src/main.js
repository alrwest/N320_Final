import App from './App.vue'
import { createApp } from 'vue'

import router from './router/index.js'

//importing components
import sessionData from './components/session-data.vue'

const app = createApp(App)
app.component('session-data', sessionData)

app.use(router)
app.mount('#app')
