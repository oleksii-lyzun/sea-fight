import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheckCircle, faSyncAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
