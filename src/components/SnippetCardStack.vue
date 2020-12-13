<template>
  <div class="title" v-if="title">
    <div>{{title}}/</div>
  </div>
  <div class="stack">
    <SnippetCardItem
      v-for="snippet in snippets"
      :name="snippet.name"
      :language="snippet.language"
      :description="snippet.description"
      :id="snippet.id"
      :key="snippet.id"
    />
  </div>
</template>

<script>

import SnippetCardItem from '@/components/SnippetCardItem.vue';

export default {
  name: 'SnippetCardStack',
  components: {
    SnippetCardItem,
  },
  props: {
    snippets: Array,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  .stack {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding-bottom: 1rem;
  }

  .title {
    margin: 0;
    padding-bottom: 1rem;
    color: $text-secondary;
    font-size: 1.5rem;
  }
</style>
