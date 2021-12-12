import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/App';

const app = new App({
  button: document.querySelector('#drawer'),
  drawer: document.querySelector('#menu'),
  content: document.querySelector('#content'),
});

export default app;