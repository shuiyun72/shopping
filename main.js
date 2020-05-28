import Vue from 'vue'
import App from './App'
import "static/icon/iconfont.css"
import store from './store'
import './static/style'
import "./js"

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
