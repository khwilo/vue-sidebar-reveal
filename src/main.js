import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

library.add(faUser, faCog);

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).use(router).mount('#app');
