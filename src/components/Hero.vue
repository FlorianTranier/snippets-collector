<template>
  <div class="hero">
    <div class="title">
      Hello fellow developer !
    </div>
    <div class="subtitle">
      One snippet a day, keep the debugger away
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.hero {
  color: $text-secondary;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 2rem;
}

.title {
  font-size: 4rem;
}

.subtitle {
  font-size: 1.2rem;
}

</style>
