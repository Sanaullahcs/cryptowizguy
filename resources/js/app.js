import './bootstrap';
import { createApp } from 'vue';
import AppComponent from './components/App.vue';
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Select2 from 'vue3-select2-component';
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import $ from 'jquery';
import axios from 'axios';
import VueSplash from 'vue-splash';
import { MotionPlugin } from '@vueuse/motion'

// Create a Vue application
const app = createApp({
    components: {
        AppComponent,
    }
});
const options = {
    type: 'default',
    duration: null,
};
app.use(VueSplash, {
});
app.use(MotionPlugin)
app.use($);
app.use(jQuery);
app.component('Select2', Select2);

app.config.globalProperties.axios = axios;
// axios.defaults.baseURL = 'test.cryptowizguy.com'
// change from to
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
// axios.defaults.baseURL = 'https://cryptowizguy.com/';
// axios.defaults.baseURL = 'https://0fajv7h7yo9q.share.zrok.io';
// axios.defaults.baseURL = 'https://test.cryptowizguy.com';

// dev.cryptowizguy.com



app.use(Toast, options);
app.use(router);
app.mount('#app');

