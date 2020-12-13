<template>
    <SnippetListItem
      v-for="snippet in snippets"
      :name="snippet.name"
      :language="snippet.language"
      :description="snippet.description"
      :id="snippet.id"
      :key="snippet.id"
    />
</template>

<script>
import SnippetListItem from '@/components/SnippetListItem.vue';

export default {

  components: {
    SnippetListItem,
  },

  props: {
    snippets: Array,
  },
};
</script>

<style lang="scss" scoped>

</style>
