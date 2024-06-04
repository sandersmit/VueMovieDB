import { createApp } from 'vue'
// Option A: Include Complete Bootstrap

import './style.css'
import App from './App.vue'

//import router - createRouter and history.. from 'vue-router' npm dependancy
import router from './router';

//pinia instance for data
import { createPinia } from 'pinia'

import NavComp from './components/NavComp.vue';

//setting a constant for the imported 'createPinia' call it : pinia
const pinia = createPinia()
const appVueMovieDB = createApp(App)

appVueMovieDB.component('nav-comp', NavComp)

//adding router
appVueMovieDB.use(router);

appVueMovieDB.use(pinia)
appVueMovieDB.mount('#app')
