import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { store2 } from './store/store2';
new Vue({
    store2,
    render: h => h(App),
}).$mount('#app')