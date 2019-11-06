import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import config from '@/config'

import './index.less'
import '@/assets/icons/iconfont.css'

Vue.config.productionTip = false

Vue.use(ViewUI);

Vue.prototype.$config = config

if (process.env.NODE_ENV !== 'production') require('@/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
