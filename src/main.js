import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import vuetify from '@/plugins/vuetify'
import data from './_model/data.js'
import App from './App.vue'

const app = createApp(App)

registerPlugins(app)

app.use(vuetify)

app.mixin({
    data () {
        return {
            pagdata: data
        }
    }
})  

app.mount('#app')
