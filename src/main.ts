
// Core Vue imports
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Vuetify (UI library) imports
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

// App component imports
import App from './components/App/index.vue';
import Content from './components/Content/index.vue';

// Global styles
import './index.scss';

// Initialize Vuetify with Material Design Icons
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});


// Enable API mocking for development
async function enableMocking() {
  const { worker } = await import('./__mocks/browser');
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}


// Start the mock service worker, then initialize the app
enableMocking().then(() => {
  // Set up Vue Router
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Content },
    ],
  });

  // Create and mount the Vue app
  createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#root');
});

