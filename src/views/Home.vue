<template>
<div>
  <Hero />
  <div class="container">
    <SnippetCardStack :snippets="toDisplaySnippets" :title="'Latest snippets'"/>
    <div v-if="!hideSeeMoreBtn">
      <div class="btn-seemore" @click="seeMore" v-if="!hideSeeMoreBtn">See More !</div>
    </div>
  </div>

</div>
</template>

<script>
import snippets from '@/assets/my-snippets';
import SnippetCardStack from '@/components/SnippetCardStack.vue';
import Hero from '@/components/Hero.vue';
import { reactive, computed } from 'vue';

export default {
  name: 'Home',
  components: {
    SnippetCardStack,
    Hero,
  },
  setup() {
    const state = reactive({
      numberOfSnippets: 3,
    });

    const toDisplaySnippets = computed(() => snippets.slice(0, state.numberOfSnippets));

    const hideSeeMoreBtn = computed(() => state.numberOfSnippets >= snippets.length);

    const seeMore = () => {
      state.numberOfSnippets += 3;
    };

    return {
      toDisplaySnippets,
      seeMore,
      hideSeeMoreBtn,
    };
  },
};
</script>

<style scoped lang="scss">
@import "src/scss/variables";
.btn-seemore {
  display: block;
  text-align: center;
  background-color: $text-primary;
  color: $bg-primary;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: auto;
  width: 10vw;
}

.btn-seemore:hover {
  cursor: pointer;
}

.btn-seemore:active {
  background-color: $text-secondary;
  transition: 0s;
}

</style>
