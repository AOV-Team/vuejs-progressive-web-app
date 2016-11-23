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

// Router options
var routerOptions = { hashbang: false, linkActiveClass: 'active-link' };

// Enable Vue's debug mode?
if (nodeEnv == 'development')
  Vue.config.debug = true;

router.start(App, '#app');
