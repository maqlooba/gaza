import { createApp } from 'vue'
import App from './App.vue'

import 'v-calendar/style.css';
import './index.css'

import VCalendar from 'v-calendar';


createApp(App).use(VCalendar, {}).mount('#app')
