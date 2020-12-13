<template>
  <div class="container">
    <p>See as :</p>
    <div id="switch-view-buttons">
      <div class="button" :class="{ active: listView}" @click="toggleList">List</div>
      <div class="button" :class="{ active: cardView }" @click="toggleCards">Cards</div>
    </div>
    <SnippetsList v-if="listView" :snippets="snippets" />
    <SnippetCardStack v-if="cardView" :snippets="snippets" />
  </div>
</template>

<script>
import snippets from '@/assets/my-snippets';
import { ref } from 'vue';
import SnippetCardStack from '@/components/SnippetCardStack.vue';
import SnippetsList from '../components/SnippetsList.vue';

export default {
  components: {
    SnippetCardStack,
    SnippetsList,
  },
  setup() {
    const listView = ref(true);
    const cardView = ref(false);
    const toggleList = () => {
      listView.value = true;
      cardView.value = false;
    };
    const toggleCards = () => { listView.value = false; cardView.value = true; };

    return {
      listView,
      cardView,
      toggleList,
      toggleCards,
      snippets,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";
.container {
  padding: 0 20vw;
}

#switch-view-buttons {
  display: flex;
}

.button {
  display: block;
  text-align: center;
  background-color: $bg-primary;
  color: $text-primary;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 0 auto 1rem;
  width: 100%;
}

.active {
  background-color: $text-primary;
  color: $bg-primary;
}

.button:hover {
  cursor: pointer;
}

</style>
