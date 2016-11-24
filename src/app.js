// ES5 promises polyfill
// Allows app to work with older browsers
import { polyfill } from 'es6-promise';
polyfill();

// Global imports
import { nodeEnv } from './config';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';

// Components
import App from './components/App.vue';

Vue.use(VueValidator);
Vue.use(VueRouter);

// Router
const routes = [
    { path: '', component: App }
];

const router = new VueRouter({ routes });

// Enable Vue's debug mode?
if (nodeEnv == 'development')
  Vue.config.debug = true;

new Vue({ router }).$mount('#app');
