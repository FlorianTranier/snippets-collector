<template>
  <div class="item" @click="goToDetails">
    <div class="top">
      <div class="name">{{name}}</div>
      <div class="language">{{formattedLanguage}}</div>
    </div>
    <div class="bottom">
      <div class="description">{{formattedDescription}}</div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import hljs from 'highlight.js/lib/core';

export default {
  name: 'SnippetListItem',
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
  @import "src/scss/_variables.scss";

  .item {
    border: solid 1px $text-primary;
    //box-shadow: 0 5px 5px $text-primary;
    min-height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 0.5rem 2rem;
  }

  .item:hover {
    box-shadow: 0 5px 5px $text-primary, 0 0 5px $text-primary;
    cursor: pointer;
  }

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
  }

  .bottom {
    padding: 1rem 0;
    width: 100%;
  }

  .name, .language {
    font-size: 1.5rem;
    color: $text-secondary;
  }
</style>
