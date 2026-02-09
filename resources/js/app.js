import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const app = createApp(App);

app.use(router);
app.mount('#app');

AOS.init({
  duration: 800,
  once: false,
  easing: "ease-in-out"    
});

window.addEventListener("scroll", () => {
  AOS.refreshHard();
});


window.addEventListener("scroll", () => AOS.refresh());
window.addEventListener("resize", () => AOS.refresh());