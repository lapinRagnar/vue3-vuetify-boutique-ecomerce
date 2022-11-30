/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// autres
import router from '@/routes/index'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia())

app.use(router)
app.mount('#app')
