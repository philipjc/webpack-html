// import './style/_app.scss';
import component from './component';

run();

function run() {
  let app = document.createElement('div');
  document.body.appendChild(app);
  app.appendChild(component('Hello, Webpack!'));
};
