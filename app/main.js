let component = require('./component');

run();

function run() {
  let app = document.createElement('div');
  document.body.appendChild(app);
  app.appendChild(component());
};

