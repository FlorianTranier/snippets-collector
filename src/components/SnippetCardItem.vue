<template>
  <div class="card" @click="goToDetails">
    <div class="title">[{{language}}]/{{name}}</div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
import router from '@/router';
import hljs from 'highlight.js/lib/core';

export default {
  name: 'SnippetCardItem',
  props: {
    id: Number,
    name: String,
    language: String,
    description: String,
  },
  setup(props) {
    const goToDetails = () => {
      router.push({ name: 'SnippetDetail', params: { id: props.id } });
    };

    return {
      formattedDescription: props.description.length > 255 ? `${props.description.slice(0, 255)}...` : props.description,
      goToDetails,
      formattedLanguage: hljs.getLanguage(props.language)?.name || props.language,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";
.card {
  width: 100%;
  height: 20vh;
  border: solid 1px $text-primary;
  display: flex;
  flex-direction: column;
  justify-content: normal;
  padding: 0.5rem 2rem;
  transition: all 0.15s;

  &:hover {
    box-shadow: 0 5px 5px $text-primary, 0 0 5px $text-primary;
    cursor: pointer;
    transform: scale(1.03);
  }
}

.title {
  font-size: 1.5rem;
  color: $text-secondary;
  margin-bottom: 1rem;
  overflow-wrap: anywhere;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
