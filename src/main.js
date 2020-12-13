import { createApp } from 'vue';
import hljs from 'highlight.js';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.directive('highlightjs', {
  deep: true,
  beforeMount(el, binding) {
    // on first bind, highlight all targets
    const targets = el.querySelectorAll('code');
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      hljs.addPlugin({
        afterHighlightBlock: ({ block, result }) => {
          // move the language from the result into the dataset
          // eslint-disable-next-line no-param-reassign
          block.dataset.language = result.language;
        },
      });
      if (binding.value) {
        // eslint-disable-next-line no-param-reassign
        target.textContent = binding.value;
      }
      hljs.highlightBlock(target);
    });
  },
  updated(el, binding) {
    // after an update, re-fill the content and then highlight
    const targets = el.querySelectorAll('code');
    hljs.addPlugin({
      afterHighlightBlock: ({ block, result }) => {
        // move the language from the result into the dataset
        // eslint-disable-next-line no-param-reassign
        block.dataset.language = result.language;
      },
    });
    targets.forEach((target) => {
      if (binding.value) {
        // eslint-disable-next-line no-param-reassign
        target.textContent = binding.value;
        hljs.highlightBlock(target);
      }
    });
  },
});

app.use(store).use(router)
  .mount('#app');
