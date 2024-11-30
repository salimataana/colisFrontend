
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer Vue Router

const app = createApp(App);
app.use(router); // Utiliser Vue Router
app.mount('#app');



/*
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/