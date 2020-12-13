<template>
  <div class="container">
    <div class="name">
      [{{language}}] / {{name}}
    </div>
    <div class="code">
      <div class="copy-button" @click="copyCode">
        {{copyText}}
      </div>
      <pre v-highlightjs="code"><code class="autodetect">
      </code></pre>
    </div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
import snippets from '@/assets/my-snippets';
import { ref } from 'vue';
import hljs from 'highlight.js/lib/core';

export default {
  name: 'SnippetDetails',
  props: {
    id: String,
  },
  setup(props) {
    const {
      name, language, description, code,
    } = snippets[props.id - 1];

    const copyText = ref('Copy to clipboard');

    const copyCode = () => {
      navigator.clipboard.writeText(code);
      copyText.value = 'Copied !';
      setTimeout(() => {
        copyText.value = 'Copy to clipboard';
      }, 2000);
    };

    return {
      name,
      language: hljs.getLanguage(language)?.name || language,
      description,
      code,
      copyCode,
      copyText,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";
  .container {
    font-size: 1.5rem;
    padding: 0 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > * {
      margin-bottom: 2rem;
    }
  }

  .description {
    color: $text-secondary;
    font-size: 1.2rem;
  }

  .code {
    font-size: 1rem;
  }

  .copy-button {
    display: block;
    text-align: center;
    background-color: $text-primary;
    color: $bg-primary;
    font-size: 1.2rem;
    padding: 0.5rem;
    transition: background-color 0.5s;
  }

  .copy-button:hover {
    cursor: pointer;
  }

  .copy-button:active {
    background-color: $text-secondary;
    transition: 0s;
  }
</style>
