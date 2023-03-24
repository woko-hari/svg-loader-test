import { createApp } from 'vue'
import App from './App.vue'

const ctx = require.context("@/assets/icons-svg", false, /\.svg$/);
ctx.keys().forEach(path => {
  const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/);
  if (!temp) return;
  const name = temp[1];
  require(`@/assets/icons-svg/${name}.svg`);
});

// vue.component(SvgIcon.name, SvgIcon);

createApp(App).mount('#app')
