import App from './App.vue'
import { createApp } from 'vue'

import router from './router'

//importing components
import sessionData from './components/session-data.vue'
import userData from './components/user-data.vue'
import userSlot from './components/user-slot.vue'

const app = createApp(App)
app.component('session-data', sessionData)
app.component('user-data', userData)
app.component('user-slot', userSlot)

app.use(router)
app.mount('#app')
